<?php
	session_start();
	if(!isset($_SESSION['username'])){ header('Refresh: 0; URL = /login.php'); }
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Lynxis</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<style>
	body{ padding-top: 70px }
	</style>
</head>
<body>

	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="/">Lynxis.org</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active"><a href="/">Home</a></li>
				<li><a href="/features">Features</a></li>
				<li><a href="/howto">Instructions</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Other Projects<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/projects/Vector-Playground">Vector Sandbox</a></li>
						<li><a href="/projects/Dota2-Drafter">Dota 2 Drafter</a></li>
					</ul>
				</li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</nav>

	<div class="col-md-4 col-md-offset-4">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">Account</h3>
			</div>
			<div class="panel-body">
				<form action="login.php" method="post">
					<div class="form-group">
						<label>Username</label>
						<input type="text" class="form-control" name="username" placeholder="Username">
					</div>
					<div class="form-group">
						<label>Password</label>
						<input type="password" class="form-control" name="password" placeholder="Password">
					</div>
					<input class="btn btn-success" type="submit" name="login" value="Login" />
					<input class="btn btn-danger" type="submit" name="logout" value="Logout" />
				</form>
				<br>
				<form action="/interface" method="get">
					<input class="btn btn-large btn-primary" type="submit" value="Access Interface" /> as <b> <?php echo $_SESSION['username']; ?> </b>
				</form>

			</div>
		</div>
	</div>

</body>
</html>
