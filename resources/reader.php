<?php

function checkSafety($id){ if (!$id || $id == "" || $id == "0" || !(is_numeric($id))) { return FALSE; }else{ return TRUE; }}

function getNodes(){
    global $con;
    global $_POST;
    $subid = $_POST["subid"];
    if(isset($_POST["type"])){ // currently always is
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
                $stmt=$con->prepare($sql);
                $stmt->bind_param("sss", $relation, $subid, $objid);
                $stmt->execute();
            // if it doesn't, create it
            }else{
                $sql = "INSERT INTO synapses (subid,objid,relation) VALUES (?, ?, ?)";
                $stmt=$con->prepare($sql);
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
    return parseNodes($subid);
}

// function recurseNodes($subid, $depth){
//     global $con;
//     $result = array();
//     foreach($con->query("SELECT relid, objid, relation FROM synapses WHERE subid = '$subid' ORDER BY primarity") as $row){
//         if($row["objid"] == "0" || $depth > 0){
//             array_push($result, ["relation" => $row["relation"], "objid" => $row["objid"], "synapses" => recurseNodes($row["objid"], $depth - 1)]);
//         }
//     }
//     return $result;
// }

function recurseNodes($subid,$depth){
    global $con;
    $result=array();
    foreach($con->query("SELECT relid, objid, relation FROM synapses WHERE subid='$subid' ORDER BY primarity") as $row){
        if($depth > 0 || ($depth == 0 && $row["objid"] == "0")){
            $object = ["relation"=>$row["relation"], "objid"=>$row["objid"]];
            $object["synapses"] = recurseNodes($row["objid"], $depth - 1);
            array_push($result, $object);
        }
        // if($depth > 0 || $row["objid"] == "0"){
        //     $object = ["relation"=>$row["relation"], "objid"=>$row["objid"]];
        //     if($depth > 0){ $object["synapses"] = recurseNodes($row["objid"], $depth - 1)]; }
        //     array_push($result, $object);
        // }
    }
    return $result;
}

function parseNodes($subid){
    $depth = 0;
    $length = 0;
    while($length < (25 * 3) && $length != count(recurseNodes($subid, $depth + 1), COUNT_RECURSIVE)){
        $length = count(recurseNodes($subid, $depth), COUNT_RECURSIVE);
        $depth++;
    }
    return recurseNodes($subid, $depth - 1);
}

session_start();
$con = new mysqli("localhost", $_SESSION['username'], $_SESSION['password'], "synapseDB");
echo json_encode(getNodes());
mysqli_close($con);

?>