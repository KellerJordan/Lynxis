<html>
<head><title>Lynxis</title></head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="resources/script.js"></script><link rel="stylesheet" href="resources/style.css">
<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML"></script>
<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>
<script src="resources/functions.js"></script>
<body>
	<div id="options">
		<div id="editing">Editing: false</div>
		<div>
			<br>In view mode:
			<br>Q: load oroot node
		</div>
		<div><a target = "_blank" href = "http://s1.daumcdn.net/editor/fp/service_nc/pencil/Pencil_chromestore.html">Write MathJax text</a></div>
		<div><a href = "/lynxis/display.html">View Informational Structure</a></div>
		<img class = "intLink" title = "Print" onclick="printDoc();" src = "resources/icons/print.png" />
	</div>
	<div id = "forms">
		<form action = "resources/login.php" method = "post">
			<input type = "text" name = "username" placeholder = "username" required /><br>
			<input type = "password" name = "password" placeholder = "password" required /><br>
			<input id = "login" type = "submit" name = "login" value = "login" />
			<input id= "newaccount" type = "submit" name = "newaccount" value = "new account" />
			<input id = "logout" type = "submit" name = "logout" value = "logout" />
		</form>
	</div>
	<div id = "container"><div id = "textBox" autocomplete = "off" autocorrect = "off" autocapitalize = "off" spellcheck = "false"></div></div>
</body>
<script>

var editing=false, root, oroot=42, tbox=$("#textBox");

$(document).keydown(function(e){
	if(!editing){
		switch(e.which){
			case 81: //q
			loadPage(oroot);
			break;
			case 87: //w
			loadPage(prompt("Enter page ID: "));
			break;
	    }
	}
	if([18,46].indexOf(e.which)!=-1||e.ctrlKey&&!([65,67,86,89,90].indexOf(e.which)!=-1)){e.preventDefault();}
	if(e.ctrlKey&&e.which==80){printDoc();}
	switch(e.which){
		case 83: //s
        if(e.ctrlKey){ query(function(){}, "", "backup"); console.log("Data saved to backup"); }
        break;
	}
});

$(document).on("keydown", function(e){
	if(e.which==9){ //tab
		e.preventDefault();
		toggleEditing();
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