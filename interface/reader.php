<?php

// HEADING/TREE PARSE

function parse_heading($id) {
	return recurseNodes($id, 4);
}

function recurseNodes($subid, $depth) {
	global $con;
	$result = ["id" => $subid, "name" => getRel($subid, 0), "size" => 1];
	if($depth){
		$result["children"] = array();
		foreach($con -> query("SELECT objid, relation FROM synapses WHERE subid = '$subid'") as $row) {
			if($row["relation"] == "contains") array_push($result["children"], recurseNodes($row["objid"], $depth - 1));
			// if(getRel($id, 10) == -1) $fontSize = 8;
		}
	}
	return $result;
}


// NETWORK PARSE

function parse_network($relation) {
	global $con;
	$result = array();
	$i = 100;
	foreach($con -> query("SELECT subid, objid, relation FROM synapses WHERE NOT objid = 0") as $row) {
		if($row['relation'] == $relation && $i){
			array_push($result, ['source' => getRel($row['subid'], 0), 'target' => getRel($row['objid'], 0), 'type' => $relation]);
			$i--;
		}
	}
	return $result;
}

// GENERAL FUNCTIONS

function getRel($subid, $objid) {
	global $con;
	$rel = $con -> query("SELECT relation FROM synapses WHERE subid = '$subid' AND objid = '$objid'") -> fetch_array()[0];
	if($rel) return $rel;
	else return "_";
}


// need a function to assign a value to node

session_start();
$con = new mysqli("localhost", $_SESSION["username"], $_SESSION["password"], "synapseDB");
switch($_POST["type"]){
	case "tree":
	$data = parse_heading($_POST["id"]);
	break;
	case "network":
	$data = parse_network("contains");
	break;
	case "bubble":
	$data = parse_heading($_POST["id"]);
	break;
}
echo json_encode($data);
mysqli_close($con);

?>