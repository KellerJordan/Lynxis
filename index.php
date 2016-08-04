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
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="resources/script.js"></script><script src="resources/functions.js"></script><link rel="stylesheet" href="resources/style.css">
	<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML"></script>
	<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>
	<style>
	body{ padding-top: 70px }
	</style>
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

	<div id="options">
		<div id="editing">Editing: false</div>
		<div><a target="_blank" href="http://s1.daumcdn.net/editor/fp/service_nc/pencil/Pencil_chromestore.html">Write MathJax text</a></div>
		<div><a href="/display.html">View Informational Structure</a></div>
		<button type="button" class="btn btn-default btn-lg" onclick="printDoc()" style="display: none">
			<span class="glyphicon glyphicon-print" aria-hidden="true"></span>
		</button>
	</div>
	<div id="forms">
		<form action="login.php" method="post">
			<input type="text" name="username" placeholder="username" /><br>
			<input type="password" name="password" placeholder="password" /><br>
			<input id="login" type="submit" name="login" value="login" />
			<input id="logout" type="submit" name="logout" value="logout" />
		</form>
		<br>
		Logged in as: <?php echo $_SESSION['username']; ?>
	</div>
	<div id="container"><div id="textBox" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div></div>
</body>
<script>

var editing = false, root, oroot = 42, tbox = $("#textBox");

$(document).on("keydown", function(e){
	if(!editing && !$(document.activeElement.parentElement).is("form")){
		switch(e.which){
			case 81: //q
			loadPage(42);
			break;
			case 87: //w
			loadPage(prompt("Enter page ID: "));
			break;
	    }
	}
	if([18,46].indexOf(e.which) != -1 || e.ctrlKey && !([65,67,86,89,90].indexOf(e.which) != -1)){ e.preventDefault() }
	if(e.ctrlKey && e.which == 80){ printDoc() }
	switch(e.which){
		case 83: //s
		if(e.ctrlKey){ query(function(){}, "", "backup"); console.log("Data saved to backup"); }
		break;
		case 9: //tab
		if(!$(document.activeElement.parentElement).is("form")){
			e.preventDefault();
			if('<?php echo $_SESSION["write"]; ?>'){ toggleEditing() }else{ alert("Sorry, you are not logged in with write permissions.") }
		}
	}
});

// USER NEEDS TO NOT TYPE BEFORE NORMAL TEXT IS RENDERED

// document.addEventListener("paste", function(e){
// 	e.preventDefault();
// 	var text=e.clipboardData.getData("text/html");
// 	document.execCommand("insertHTML", false, text);
// });

loadPage(oroot);

</script>
</html>
