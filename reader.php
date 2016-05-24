<?php

function getNode($subid){
    global $con;
    $relations=$con->query("SELECT DISTINCT relation FROM synapses WHERE subid='$subid'")->fetch_all();
    for($i=0;$i<count($relations);$i++){
        $relation=$relations[$i][0];
        $result=$con->query("SELECT relid,objid,primarity FROM synapses WHERE subid='$subid' AND relation='$relation'")->fetch_all();
        for($j=0;$j<count($result);$j++){
            $objid=$result[$j][1];
            $primary=$con->query("SELECT relation FROM synapses WHERE subid='$objid' AND primarity=0")->fetch_all();
            $text="_";
            if(count($primary)>0){
                $text=$primary[0][0];
            }
            array_push($result[$j],$text);
        }
        array_push($relations[$i],$result);
    }
    return $relations;
}

$con=mysqli_connect("localhost","root","","synapsedb");
if($con->connect_error){echo "Could not connect!";}
$subid=$_POST["subid"];

switch($_POST["type"]){
    case "new":
    $objid=$con->query("SELECT MAX(subid) FROM synapses")->fetch_all()[0][0]+1;
    $con->query("INSERT INTO synapses (subid,objid,relation) VALUES ('$subid','$objid','contains')");
    break;
    case "rel":
    $objid=$_POST["objid"];
    $relation=$_POST["relation"];
    $con->query("INSERT INTO synapses (subid,objid,relation) VALUES ('$subid','$objid','$relation')"); 
    break;
    case "del":
    $con->query("DELETE FROM synapses WHERE subid='$subid' OR objid='subid'");
    break;
}

echo json_encode(getNode($subid));
mysqli_close($con);

?>