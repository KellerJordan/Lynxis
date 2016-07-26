<?php

function recurseData($subid,$depth){
    global $con;
    if(!$depth){return;}
    $return=array();
        foreach($con->query("SELECT relid,objid,relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
            array_push($return,["relation"=>$row["relation"],"objid"=>$row["objid"],"synapses"=>recurseData($row["objid"],$depth-1)]);
            //"relid"=>$row["relid"],
        }
    return $return;
}

function getData(){
    global $con;
    global $_POST;
    $subid=$_POST["subid"];
    if(isset($_POST["type"])){
        switch($_POST["type"]){
            case "rel":
            if($_POST["objid"]){$objid=$_POST["objid"];}else{
                $objid=$con->query("SELECT MAX(GREATEST(subid,objid)) FROM synapses")->fetch_all()[0][0]+1;
                $con->query("INSERT INTO synapses (subid,objid,relation) VALUES ('$subid','$objid','contains')");
            }
            // if(isset($_POST["relation"])){
                $relation=$_POST["relation"];
                if($con->query("SELECT * FROM synapses WHERE subid='$objid' AND objid=0")->fetch_all()){
                    if($relation!=""){
                        $sql="UPDATE synapses SET relation=? WHERE subid=? AND objid=0";
                        $stmt=$con->prepare($sql);
                        $stmt->bind_param("ss",$relation,$objid);
                        $stmt->execute();
                    }else{
                        $con->query("DELETE FROM synapses WHERE subid='$subid' OR objid='$subid'");
                    }
                }else{
                    $sql="INSERT INTO synapses (subid,objid,relation) VALUES (?,0,?)";
                    $stmt=$con->prepare($sql);
                    $stmt->bind_param("ss",$objid,$relation);
                    $stmt->execute();
                }
            // }
            break;
        }
    }
    return recurseData($subid,10);
}

$con=mysqli_connect("localhost","root","","synapsedb");if($con->connect_error){echo "Could not connect!";}

echo json_encode(getData());

mysqli_close($con);

?>