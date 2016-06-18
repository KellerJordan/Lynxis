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
    myWindow.document.write('<html><body><div style="padding:50px">'+tbox.html()+'</div></body></html>');
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

function insertParsedData(data,deepness,target){
    for(i in data.synapses){
        obj=data.synapses[i];
        if(obj.relation=='contains'){
            var id=obj.objid;
            var htmldata='<div class="parent" id="'+id+'"></div><div><br></div>';
            addHTML(target,htmldata);
            insertName(id);
            // if(deepness){
            //     query(
            //         function(data){insertParsedData(data,0)},
            //         "get",
            //         id
            //         );
            // }
        }
    }
}

// function insertObject(id){
//     var htmldata='<div class="parent" id="'+obj.objid+'"></div><div><br></div>';
// }

function insertName(id){
    query(function(data){addHTML($('#'+id),data)},
    "get_rel",
    id,
    0);
}

function addHTML(target,data){
    target.html(target.html()+data);
}

function parseHeadings(data){
    divs=tbox.children()
    for(var i=0;i<divs.length;i++){
        console.log($(divs[i]).text());
    }
}