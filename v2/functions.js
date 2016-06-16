//constants
var golden=(1+Math.sqrt(5))/2;
var wWidth=$(window).width()-16;
var wHeight=$(window).height()-16;

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
}

function printDoc(){
    var myWindow=window.open("","","width="+wWidth+",height="+wHeight);
    myWindow.document.open();
    myWindow.document.write('<html><body><div style="padding:50px">'+$("#textBox").html()+'</div></body></html>');
    myWindow.print();
    myWindow.close();
}

function getTextWidth(text,h){
    var testNode=svg.append("text").attr("id","test").attr("font-size",h).text(text);
    var bbox=document.getElementById("test").getBBox();
    testNode.remove();
    return bbox.width;
}

function getTextHeight(text,w){
    var testNode=svg.append("text").attr("id","test").attr("font-size",1000).text(text);
    var bbox=document.getElementById("test").getBBox();
    testNode.remove();
    return 1000*w/bbox.width;
}

function parseSynapse(data){
    return '<b>abc</b><br><br>sdffdsfdsfds';
}

function parseHeadings(data){

}