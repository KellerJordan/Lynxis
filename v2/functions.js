//constants
var golden=(1+Math.sqrt(5))/2, wWidth=$(window).width()-16, wHeight=$(window).height()-16;

function formatDoc(sCmd, sValue){document.execCommand(sCmd, false, sValue);}

function printDoc(){
	var myWindow=window.open();
	myWindow.document.open();
	myWindow.document.write('<html><head><link rel="stylesheet" href="style.css"></head><body><div id="container" style="border: 1px solid black;">'+$('#container').html()+'</div></body></html>');
	$(myWindow.document).ready(function(){myWindow.print();});
	myWindow.close();
}

function getCaretPosition(){
	var sel=window.getSelection();
	if(sel.rangeCount&&mode=="edit"){return sel.getRangeAt(0).endOffset;}
}

function caretAtEnd(){
	var range=window.getSelection().getRangeAt(0);
	return (range.commonAncestorContainer.length==range.endOffset)&&range.collapsed;
}

function caretAtStart(){
	var range=window.getSelection().getRangeAt(0);
	return !range.collapsed||range.endOffset==0&&range.commonAncestorContainer.length;
}

//.startOffset
//.startContainer
//.endContainer
//https://developer.mozilla.org/en-US/docs/Web/API/Range

// function isDivEmpty(){
// 	var range=window.getSelection().getRangeAt(0);
// 	return !range.collapsed||range.endOffset==0&&range.commonAncestorContainer.length;
// }