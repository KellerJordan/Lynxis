//constants
var golden = (1 + Math.sqrt(5))/2, wWidth = $(window).width() - 16, wHeight = $(window).height() - 16;

function printDoc(){
	var myWindow = window.open();
	myWindow.document.open();
	myWindow.document.write('<html><head><link rel="stylesheet" href="style.css"></head><body><div id="container" style="border: 1px solid black;">'+tbox.html()+'</div></body></html>');
	// $(myWindow.document).ready(function(){myWindow.print();});
	myWindow.close();
}

function caretAtStart(){
	var range = window.getSelection().getRangeAt(0);
	return range.collapsed && range.endOffset == 0;
}

function appendDiv(node){
	if(!node){ node = {"id":"", "class":"t0", "name":"", "first":false} }
	var div = $('<div><br></div>');
	div.attr("id", node["id"]).attr("class", node["class"]).attr("contenteditable", editing).data("MathJax", true).data("text", node["name"]).text(node["name"]);
	if(node["first"]){ div.attr("style", "padding-top: 0px") }
	tbox.append(div);
	setEvents(div);
	div.focus();
}

function toggleEditing(){
	update();
	editing = !editing;
	$(tbox.children()).attr("contenteditable", editing);
	$("#editing").text("Editing: " + editing);
	tbox.focus();
}