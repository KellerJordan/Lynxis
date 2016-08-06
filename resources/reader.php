<?php

// HEADING/TREE PARSE

$headings = array();

function parse_heading($id){
    global $headings;
    $depth = 0; $length = -1;
    while(count($headings) < 42 && $length != count($headings)){
        $length = count($headings);
        $headings = array();
        $depth++;
        recurseNodes($id, $depth);
    }
    $headings = array();
    recurseNodes($id, $depth - 1);
    return $headings;
}

function recurseNodes($subid, $depth){
    if($depth <= 0){ return; }
    global $con;
    global $headings;
    foreach($con->query("SELECT objid FROM synapses WHERE subid='$subid'") as $row){
        $id=$row['objid'];
        if(getRel($id, 0)){ array_push($headings, ['id'=>$id, 'name'=>getRel($id, 0), 'class'=>'t'.($depth - 1), 'first'=>FALSE]);}
        recurseNodes($id, $depth - 1);
    }
}


// NETWORK PARSE

function parse_network(){
    global $con;
    $result=array();
    foreach($con->query("SELECT subid, objid FROM synapses WHERE NOT objid=0") as $row){
        array_push($result, ['source'=>getRel($row['subid']), 'target'=>getRel($row['objid']), 'type'=>'suit']);
    }
    return $result;
}

// GENERAL FUNCTIONS

function getRel($subid, $objid){
    global $con;
    if(!isset($objid)){ $objid = 0; }
    return $con->query("SELECT relation FROM synapses WHERE subid='$subid' AND objid='$objid'")->fetch_array()[0];
}


// need a function to assign a value to node

session_start();
$con = new mysqli('localhost', $_SESSION['username'], $_SESSION['password'], 'synapseDB');
if($_POST['type'] == 'tree'){ echo json_encode(parse_heading($_POST['id'])); }
if($_POST['type'] == 'network'){ echo json_encode(parse_network()); }
mysqli_close($con);

?>