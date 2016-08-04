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

function appendDiv(text, id, font, first){
	var div = $('<div><br></div>');
	div.attr("class", "t0").attr("contenteditable", editing).data("MathJax", true).data("text", text);
	if(first){ div.attr("style", "padding-top: 0px") }
	tbox.append(div);
	setEvents(div);
	if(id){ div.attr("id", id).attr("class", font) }
	if(text){ div.text(text) }
	div.focus();
}

function getRelTo(node,id){
	if(node.synapses && node.synapses[0]){
		for(var i in node.synapses){
			if(node.synapses[i].objid == id){ return node.synapses[i].relation }
		}
	}
	return "_";
}

function toggleEditing(){
	update();
	editing = !editing;
	$(tbox.children()).attr("contenteditable", editing);
	$("#editing").text("Editing: " + editing);
	tbox.focus();
}