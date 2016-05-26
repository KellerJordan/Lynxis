<?php

function getNode($subid,$r){
    global $con;

    $return=array();
    array_push($return,$subid);

    $rel_list=$con->query("SELECT DISTINCT relation FROM synapses WHERE subid='$subid'")->fetch_all();
    for($i=0;$i<count($rel_list);$i++){
        $rel_name=$rel_list[$i][0];

        $rel_instance_list=$con->query("SELECT relid,primarity,objid FROM synapses WHERE subid='$subid' AND relation='$rel_name'")->fetch_all();
        array_push($rel_list[$i],array());
        for($j=0;$j<count($rel_instance_list);$j++){
            $rel_instance=$rel_instance_list[$j];
            $objid=$rel_instance_list[$j][2];

            $result=array();
            if($objid!=0){
                array_push($result,$rel_instance[0],$rel_instance[1]);
            }

            // $primary=$con->query("SELECT relation FROM synapses WHERE subid='$objid' AND primarity=0")->fetch_all();

            // $text="_";
            // if(count($primary)>0){$text=$primary[0][0];}
            // array_push($result,$text);
            if($r>0){array_push($result,getNode($objid,$r-1));}

            array_push($rel_list[$i][1],$result);
        }
    }
    array_push($return,$rel_list);
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
    $con->query("DELETE FROM synapses WHERE subid='$subid' OR objid='subid'");
    break;
}

echo json_encode(getNode($subid,2));
mysqli_close($con);

?>