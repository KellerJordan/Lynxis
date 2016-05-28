<?php

function getNode($subid,$level){
    global $con;
    $return=["id"=>$subid,"relations"=>array()];
    foreach($con->query("SELECT objid,relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
        // $return["relations"]["relid"]=$row["relid"];
        if(!array_key_exists($row["relation"],$return["relations"])){
            $return["relations"][$row["relation"]]=array();
        }
        if($level>0&&$subid>=10){
            array_push($return["relations"][$row["relation"]],getNode($row["objid"],$level-1));
        }
    }
    return $return;
}

$con=mysqli_connect("localhost","root","","synapsedb");
if($con->connect_error){echo "Could not connect!";}
$subid=$_POST["subid"];

switch($_POST["type"]){
    case "new":
    $objid=$con->query("SELECT MAX(subid) FROM synapses")->fetch_all()[0][0]+1;
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

echo json_encode(getNode($subid,10));
mysqli_close($con);

?>