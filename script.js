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
        if(type=="del"){query("get",oroot);}
    });
}

function constructPage(){
    $("text,rect,circle,.relation,.object").remove();
    headings=[];
    branches=[];
    bubbles=[];
    index=0;
    var h=20;

    //creation of heading structure
    for(var relation in nodeData["relations"]){
        var nodes=nodeData["relations"][relation];
        headings.push(new heading("noid",relation,"relation"));
        for(var i in nodes){
            headings.push(new heading(nodes[i]["id"],function(){
                //return _ if object has no relationships, indicates to user that this node needs naming
                    if(!Object.keys(nodes[i]["relations"])[0]){
                        return "_";
                    }else{
                        return Object.keys(nodes[i]["relations"])[0];
                    }
                }
                ,"object"));
        }
    }

    //creation of branch structure


    //creation of bubble structure
    addBubble(nodeData,0,0,250);
    for(var i in nodeData["relations"]["contains"]){
        node=bubbles[parseInt(i)+1];
        text=function(){
                    if(!Object.keys(nodes[i]["relations"])[0]){
                        return "_";
                    }else{
                        return Object.keys(nodes[i]["relations"])[0];
                    }
                }
        branches.push(new branch(node.id,text,50,node.x,node.y));
    }

    $("text,div,circle").click(function(){
        var id=parseInt(this.id);
        if(Number.isInteger(id)){
            query("get",id);
        }
    });
}

function addBubble(array,myX,myY,myR,firstLevel){
    bubbles.push(new bubble(array["id"],Object.keys(array["relations"])[0],myX,myY,myR));
    bubbles[bubbles.length-1].transform(false);

    if(array["relations"]["contains"]){
        var n=array["relations"]["contains"].length;
        var cR=relR(myR,n);
        for(var i=0;i<n;i++){
            var cT=(Math.PI/2-Math.PI/n)+i*2*Math.PI/n;
            var cX=(myR-cR)*Math.cos(cT)+myX;
            var cY=(myR-cR)*Math.sin(cT)+myY;
            if(n==1){cX=myX;cY=myY;cR=myR/golden;}
            addBubble(array["relations"]["contains"][i],cX,cY,cR,false);
            // if(firstLevel){
            //     text=function(){
            //         if(!Object.keys(nodes[i]["relations"])[0]){
            //             return "_";
            //         }else{
            //             return Object.keys(nodes[i]["relations"])[0];
            //         }
            //     }
            //     branches.push(new branch(node.id,text,50,node.x,node.y));
            // }
        }
    }
}

function relR(r,n){return(r*(Math.sin(Math.PI/n))/(1+Math.sin(Math.PI/n)));}

class bubble{
    constructor(id,text,x,y,r){
        this.id=id;
        this.text=text;
        this.r=r;
        this.x=x;
        this.y=y;
        this.circNode=svg.append("circle").attr("id",id);
    }
    transform(transition){
        var r=this.r;
        var x=this.x+sWidth/2;
        var y=this.y+sHeight/2;
        var circNode=this.circNode;
        if(transition){circNode=circNode.transition();}
        circNode.attr("cx",x).attr("cy",y).attr("r",r);
    }
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
        this.y=y;
        this.id=id;
        this.index=index;

        this.rectNode=svg.append("rect").attr("stroke","grey");
        this.textNode=svg.append("text").attr("id",id).text(text);
        this.transform(false);
    }
    transform(transition){
        var w=this.width;
        var h=this.height;
        var x=this.x-w/2+sWidth/2;
        var y=this.y+h/4+sHeight/2;
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