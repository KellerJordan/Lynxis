<?php
session_start();
echo $_SESSION['username'];
echo '<br>';
echo $_SESSION['password'];
$con=mysqli_connect("localhost", $_SESSION['username'], $_SESSION['password'], "synapseDB");
if(!$con){
	echo "NPOE";
}
?>