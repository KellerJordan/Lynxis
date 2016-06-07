<?php

function getData(){
    global $con;
    global $_POST;
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

        case "get":
        $return=["id"=>$subid,"synapses"=>array()];
        foreach($con->query("SELECT relid,objid,relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
            array_push($return["synapses"],["relation"=>$row["relation"],"relid"=>$row["relid"],"objid"=>$row["objid"]]);
        }
        return $return;
        break;

        case "get_rel":
        $objid=$_POST["objid"];
        $arr=$con->query("SELECT relation FROM synapses WHERE subid='$subid' AND objid='$objid' ORDER BY primarity")->fetch_all()[0];
        if(count($arr)>0){
            return $arr[0];
        }else{
            return "_";
        }
        break;
    }
}

$con=mysqli_connect("localhost","root","","synapsedb");
if($con->connect_error){echo "Could not connect!";}

echo json_encode(getData());
mysqli_close($con);

?>