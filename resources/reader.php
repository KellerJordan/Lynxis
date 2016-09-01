<?php

// HEADING/TREE PARSE

// $format = '<div id = "$id" class = %1$s style = "font-size: %2$f px; line-height: %3$f">%4$s</div>';
// sprintf($format, 't2 first', 44/3, 15/11, 'example');


function parse_heading($id){
	$data = array();
	$depth = 0;
	$pageSize = 840;
	while(1){
		array_push($data, recurseNodes($id, $depth, 42));
		if(end($data) ["length"] > $pageSize || ($depth > 0 && (end($data)["length"] == $data[$depth - 1]["length"]))){
			$len = countNodeChildren($id, $depth);
			// return "'$id', '$depth', '$len'";
			return recurseNodes($id, $depth, countNodeChildren($id, $depth))["headings"];
			// return recurseNodes($id, 3, 10);
		}
		$depth++;
	}
}

function recurseNodes($subid, $depth, $countChildren){
	global $con;
	$result = array("headings" => array(), "length" => 0);
	$first = 1;
	foreach($con -> query("SELECT objid, relation FROM synapses WHERE subid = '$subid'") as $row){
		$id = $row['objid'];
		if(getRel($id, 0) && $row['relation'] == 'contains'){

			$fontSize = 44/3;
			$lineHeight = 15/11;

			if($depth == 0){ $fontSize = $lineHeight * 200/$countChildren; }
			if($fontSize < 8){ break; }

			if($depth == 0){ break; }

			$class = 't'.(floor($depth) - 1);
			if(getRel($id, 10) == -1){ $fontSize = 8; }
			if($first){ $class .= ' first'; }

			array_push($result["headings"], "<div id = '$id' class = '$class' style =' font-size: ".$fontSize."px; line-height: ".$lineHeight."'>".getRel($id, 0)."</div>");

			if($depth > 0){
				$child = recurseNodes($id, $depth - 1, $countChildren);
				$result["headings"] = array_merge($result["headings"], $child["headings"]);
				$result["length"] += $child["length"] + (1 - $first) * 20;
			}

			$result["length"] += $fontSize * $lineHeight;

			$first = 0;
		}
	}
	return $result;
}

function countNodeChildren($subid, $depth){
	global $con;
	$result = 0;
	foreach($con -> query("SELECT objid, relation FROM synapses WHERE subid = '$subid'") as $row){
		$id = $row['objid'];
		if(getRel($id, 0) && $row['relation'] == 'contains'){
			if($depth > 0){ $result += countNodeChildren($id, $depth - 1); }
			if($depth == 0){ $result++; }
		}
	}
	return $result;
}


// NETWORK PARSE

function parse_network($relation){
	global $con;
	$result=array();
	$i = 0;
	foreach($con -> query("SELECT subid, objid, relation FROM synapses WHERE NOT objid = 0") as $row){
		if($row['relation'] == $relation){ array_push($result, ['source' => getRel($row['subid'], 0), 'target' => getRel($row['objid'], 0), 'type' => $relation]); }
		$i++;
		if($i > 100){ return $result; }
	}
	return $result;
}

// GENERAL FUNCTIONS

function getRel($subid, $objid){
	global $con;
	return $con -> query("SELECT relation FROM synapses WHERE subid = '$subid' AND objid = '$objid'") -> fetch_array()[0];
}


// need a function to assign a value to node

session_start();
$con = new mysqli('localhost', $_SESSION['username'], $_SESSION['password'], 'synapseDB');
if($_POST['type'] == 'tree'){ echo json_encode(parse_heading($_POST['id'])); }
if($_POST['type'] == 'network'){ echo json_encode(parse_network('contains')); }
mysqli_close($con);

?>