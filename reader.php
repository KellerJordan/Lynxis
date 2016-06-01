<?php

function getNode($relid,$subid,$level){
    global $con;
    $return=["relid"=>$relid,"id"=>$subid,"relations"=>array()];
    foreach($con->query("SELECT relid,objid,relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
        if(!array_key_exists($row["relation"],$return["relations"])){
            $return["relations"][$row["relation"]]=array();
        }
        if($level>0&&$subid>=100){
            array_push($return["relations"][$row["relation"]],getNode($row["relid"],$row["objid"],$level-1));
        }
    }
    return $return;
}

function getRelation($relid){
    global $con;
    
}

$con=mysqli_connect("localhost","root","","synapsedb");
if($con->connect_error){echo "Could not connect!";}
$subid=$_POST["subid"];

switch($_POST["type"]){
    case "new":
    $objid=$con->query("SELECT MAX(GREATEST(subid,objid)) FROM synapses")->fetch_all()[0][0]+1;
    $con->query("INSERT INTO synapses (subid,objid,relation,primarity) VALUES ('$subid','$objid','contains',1)");
    break;
    case "rel":
    $objid=$_POST["objid"];
    $relation=$_POST["relation"];
    $con->query("INSERT INTO synapses (subid,objid,relation,primarity) VALUES ('$subid','$objid','$relation',1)"); 
    break;
    case "del":
    $con->query("DELETE FROM synapses WHERE subid='$subid' OR objid='$subid'");
    break;
}

$deepness=10;
if($_POST["type"]=="get_rel"){
    echo json_encode(getRelation($subid));
}else{
    echo json_encode(getNode(null,$subid,$deepness));
}

mysqli_close($con);

?>