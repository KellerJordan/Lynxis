//constants
var golden=(1+Math.sqrt(5))/2;
var wWidth=$(window).width()-16;
var wHeight=$(window).height()-16;
var sWidth=626;
var sHeight=500;

var headings,branches,bubbles,nodeData;

function query(type,subid,objid,relation){
    root=subid;
    $.post("reader.php",{
        type:type,
        subid:subid,
        objid:objid,
        relation:relation
    },function(data,status){
        nodeData=JSON.parse(data);
        constructPage();
    });
}

function constructPage(){
    $("text").remove();
    $("rect").remove();
    $(".relation").remove();
    $(".object").remove();
    headings=[];
    branches=[];
    bubbles=[];
    index=0;
    var h=20;

    for(var i in nodeData){

    }

    for(var i in nodeData){
        n=nodeData[i];
        if(n[1][0][1]==0||n[1][0][1]==1){
            branches.push(new branch(n[1][0][1],n[1][0][3],h,0,100+60*i));
            branches.push(new branch("noid",n[0],h,0,124+60*i));
        }else{
            branches.push(new branch("noid",n[0],h,0,100+60*i));
            for(var j=0;j<n[1].length;j++){
                branches.push(new branch(n[1][j][1],n[1][j][3],h,0,124+60*i+20*j));
            }
        }
    }

    for(var i in nodeData){
        n=nodeData[i];
        if(n[1][0][1]==0||n[1][0][1]==1){
            headings.push(new heading(n[1][0][1],n[1][0][3],"relation"));
            headings.push(new heading("noid",n[0],"object"));
        }else{
            headings.push(new heading("noid",n[0],"relation"));
            for(var j=0;j<n[1].length;j++){
                headings.push(new heading(n[1][j][1],n[1][j][3],"object"));
            }
        }
    }

    $("text,div").click(function(){
        var id=parseInt(this.id);
        if(Number.isInteger(id)){
            query("get",id);
        }
    });
}

class heading{
    constructor(id,text,className){
        this.node=div.append("div").attr("id",id).text(text).attr("class",className);
    }
}

class branch{
    constructor(id,text,h,x,y){
        this.width=getTextWidth(text,h);
        this.height=h;
        this.x=x;
        this.y=parseInt(y);
        this.id=id;
        this.index=index;

        this.rectNode=svg.append("rect").attr("stroke","grey");
        this.textNode=svg.append("text").attr("id",id).text(text);
        this.transform(false);
    }
    transform(transition){
        var w=this.width;
        var h=this.height;
        var x=this.x+sWidth/2-w/2;
        var y=this.y+h/4;
        var rectNode=this.rectNode;
        var textNode=this.textNode;
        if(transition){
            rectNode=rectNode.transition();
            textNode=textNode.transition();
        }
        rectNode.attr("x",x).attr("y",y-h*3/4).attr("width",w).attr("height",h).attr("rx",h/10).attr("ry",h/10);
        textNode.attr("x",x).attr("y",y).attr("font-size",h);

        if(this.index){
            var sign=Math.abs(this.x)/this.x
            var x1=sign*nodes[0].width/2+sWidth/2;
            var y1=nodes[0].y;
            x=(Math.abs(this.x)-24-w/2)*sign+sWidth/2;
            y-=h/4;
            var arb=(x-x1)/2;
            var path="m "+x1+" "+y1+" c "+(x-x1-arb)+" 0 "+arb+" "+(y-y1)+" "+(x-x1)+" "+(y-y1);
            this.lineNode=svg.append("path").attr("d",path).attr("class","link");
        }
    }
}

class bubble{
    constructor(id,text,x,y,d){
        this.h=100*d/getTextWidth(text,100);
        this.d=d;
        this.x=x;
        this.y=y;
        this.textNode=svg.append("text").attr("id",id).text(text);
        this.circNode=svg.append("circle").attr("id",id).attr("fill-opacity",0);
    }
    transform(transition){
        var d=this.d;
        var x=this.x;
        var y=this.y;
        var textNode=this.textNode;
        var circNode=this.circNode;
        if(transition){
            textNode=textNode.transition();
            circNode=circNode.transition();
        }
    }
}

function getTextWidth(text,h){
    var testNode=svg.append("text").attr("id","test").attr("font-size",h).text(text);
    var bbox=document.getElementById("test").getBBox();
    testNode.remove();
    return bbox.width;
}


// function constructNodes(x,y){
//     var arbx=150;
//     var arby=100;
//     var h=50;
//     nodes.push(new textNode(primaryNode[0],primaryNode[1],h,x,y));
//     var w=nodes[0].width/2;
//     nodes[0].transform(0);

//     h=20;
//     for(i in childNodes){
//         index++;
//         nodes.push(new textNode(childNodes[i][0],childNodes[i][1],h,x+(w+arbx),y+i*(h+arby)/2));
//         nodes[index].x+=nodes[index].width/2;
//         nodes[index].transform(0);
//     }
//     for(i in parentNodes){
//         index++;
//         nodes.push(new textNode(parentNodes[i][0],parentNodes[i][1],h,x-(w+arbx),y+i*(h+arby)/2));
//         nodes[index].x-=nodes[index].width/2;
//         nodes[index].transform(0);
//     }
// }