<?php

function checkSafety($id){ if ((!$id) || $id == "" || $id == "0" || !(is_numeric($id))) { return FALSE; }else{ return TRUE; } }

function getNodes(){
    global $con;
    global $_POST;
    $subid = $_POST["subid"];
    switch($_POST["type"]){
        case "backup":
        $con->query("DROP TABLE backup");
        $con->query("CREATE TABLE backup (relid int(10), subid int(10), objid int(10), relation varchar(5000), primarity int(10))");
        $con->query("INSERT INTO backup SELECT * FROM synapses");
        break;
        case "new":
        $objid = $con->query("SELECT MAX(GREATEST(subid,objid)) FROM synapses")->fetch_array()[0] + 1;
        $con->query("INSERT INTO synapses (subid,objid,relation) VALUES ('$subid','$objid','contains')");
        return $objid;
        break;
        case "rel":
        $relation = $_POST["relation"]; $objid = $_POST["objid"];
        // if name relation exists, update it
        if($con->query("SELECT * FROM synapses WHERE subid = '$subid' AND objid = '$objid'")->fetch_array()){
            $sql = "UPDATE synapses SET relation = ? WHERE subid = ? AND objid = ?";
            $stmt = $con->prepare($sql);
            $stmt->bind_param("sss", $relation, $subid, $objid);
            $stmt->execute();
        // if it doesn't, create it
        }else{
            $sql = "INSERT INTO synapses (subid,objid,relation) VALUES (?, ?, ?)";
            $stmt = $con->prepare($sql);
            $stmt->bind_param("sss", $subid, $objid, $relation);
            $stmt->execute();
        }
        return $objid;
        break;
        case "del":
        if(checkSafety($subid)){ $con->query("DELETE FROM synapses WHERE subid = '$subid' OR objid = '$subid'"); }
        break;
        case "delrel":
        if(checkSafety($subid)){ $con->query("DELETE FROM synapses WHERE objid = '$subid'"); }
        break;
    }
}

session_start();
$con = new mysqli("localhost", $_SESSION['username'], $_SESSION['password'], "synapseDB");
echo json_encode(getNodes());
mysqli_close($con);

?>