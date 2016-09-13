<?php
	session_start();
	unset($_SESSION['timeout']);
	// unset($_SESSION['username']);
	// unset($_SESSION['password']);
	$_SESSION['write'] = FALSE;
	$_SESSION['username'] = 'guest';
	$_SESSION['password'] = '1234';
?>
<html>
<head><title>Account Management</title></head>
<body>
<?php
	if(isset($_POST['login'])){
		if (!empty($_POST['username']) && !empty($_POST['password']) && mysqli_connect("localhost", $_POST['username'], $_POST['password'], "synapseDB")) {
			$_SESSION['timeout'] = time();
			$_SESSION['username'] = $_POST['username'];
			$_SESSION['password'] = $_POST['password'];
			$_SESSION['write'] = TRUE;
			echo 'Success logging in.';
		}else{
			echo 'Failure logging in.';
		}
	} 
	if(isset($_POST['logout'])){
		echo 'Success logging out.';
	}
	echo '<br>Redirecting...';
	header('Refresh: 1; URL = /');
?>
</body>
</html>