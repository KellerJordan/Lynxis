<?php

// TREE PARSE

function parse_tree($subid){
    $depth = 0;
    $length = 0;
    while($length < (3 * 25) && $length != count(recurseNodes($subid, $depth + 1), COUNT_RECURSIVE)){
        $depth++;
        $length = count(recurseNodes($subid, $depth), COUNT_RECURSIVE);
    }
    return recurseNodes($subid, $depth);
}

function recurseNodes($subid, $depth){
    global $con;
    $result = array();
    foreach($con->query("SELECT relid, objid, relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
        if($depth > 0 || ($depth == 0 && $row["objid"] == "0")){
            $object = ["relation"=>$row["relation"], "objid"=>$row["objid"]];
            $object["synapses"] = recurseNodes($row["objid"], $depth - 1);
            array_push($result, $object);
        }
    }
    return $result;
}


// NETWORK PARSE

function parse_network(){
    global $con;
    $result=array();
    foreach($con->query("SELECT subid, objid FROM synapses WHERE NOT objid=0") as $row){
        array_push($result, ["source"=>getName($row["subid"]), "target"=>getName($row["objid"]), "type"=>"suit"]);
    }
    return $result;
}

function getName($id){
    global $con;
    return $con->query("SELECT relation FROM synapses WHERE subid='$id' AND objid=0")->fetch_array()[0];
}

// need a function to assign a value to node

session_start();
$con = new mysqli("localhost", $_SESSION['username'], $_SESSION['password'], "synapseDB");
if($_POST["type"] == "tree"){ echo json_encode(parse_tree($_POST["id"])); }
if($_POST["type"] == "network"){ echo json_encode(parse_network()); }
mysqli_close($con);

?>