//constants
var golden=(1+Math.sqrt(5))/2, wWidth=$(window).width()-16, wHeight=$(window).height()-16;

function printDoc(){
	var myWindow=window.open();
	myWindow.document.open();
	myWindow.document.write('<html><head><link rel="stylesheet" href="style.css"></head><body><div id="container" style="border: 1px solid black;">'+$('#container').html()+'</div></body></html>');
	$(myWindow.document).ready(function(){myWindow.print();});
	myWindow.close();
}

function caretAtStart(){
	var range=window.getSelection().getRangeAt(0);
	return range.collapsed&&range.endOffset==0;
}

function appendDiv(text,id,font,first){
	var div=$('<div><br></div>');
	div.attr("class","h0").attr("contenteditable", editing).data("MathJax", true).data("text", text);
	if(first){ div.attr("style","padding-top: 0px") }
	tbox.append(div);
	setEvents(div);
	if(id){ div.attr("id", id).attr("class", font) }
	if(text){ div.text(text) }
	div.focus();
}

function getRelTo(node,id){
	if(node.synapses&&node.synapses[0]){
		for(var i in node.synapses){
			if(node.synapses[i].objid==id){ return node.synapses[i].relation }
		}
	}
	return "_";
}

// inserts lines with maximum recursion that can be fit into one page
function parse_SQL(data){
    r=1;
    while((count(data,r+1) < numLines) && !(count(data,r+1) == count(data,r))){ r++ }
    insertHTML(data,r,r);
}

// returns number of lines that will result from using r iterations of link recursion
function count(data,r){
    var num=0;
    for(i in data){
        if(data[i].objid==0){ num++ }
        if(data[i].synapses&&r){ num+=count(data[i].synapses,r-1) 	}
    }
    return num;
}

function toggleEditing(){
	update();
	editing=!editing;
	$(tbox.children()).attr("contenteditable", editing);
	$("#editing").text("Editing: "+editing);
	// hovering
	// if(editing){
	// 	$(tbox.children()).attr("")
	// }else{

	// }
}