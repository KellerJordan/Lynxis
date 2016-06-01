//constants
var golden=(1+Math.sqrt(5))/2;
var wWidth=$(window).width()-16;
var wHeight=$(window).height()-16;
var sWidth=626;
var sHeight=500;

var headings,branches,bubbles,nodeData;
var selected=[];
var selectTimeout=true;

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
        if(type=="get"){selectNode(subid.toString());}
    });
}

function selectNode(id){
    selectTimeout=false;
    setTimeout(function(){selectTimeout=true;},10);
    if(aDown){
        selected.push(id);
    }else{
        $("circle").css("fill","white");
        selected[0]=id;
    }
    $("#"+id).css("fill","#ADD8E6");
}

function constructPage(){
    $("text,rect,circle,.relation_container").remove();
    headings=[];
    branches=[];
    bubbles=[];
    index=0;
    var h=20;

    //creation of heading structure
    for(var relation in nodeData["relations"]){
        var nodes=nodeData["relations"][relation];
        var relDiv=div.append("div").attr("class","relation_container");
        relDiv.append("div").text(relation).attr("class","relation_name");
        for(var i in nodes){
            objDiv=relDiv.append("div").attr("class","object");
            var text=function(){
                //return _ if object has no relationships, indicates to user that this node needs naming
                    if(!Object.keys(nodes[i]["relations"])[0]){return "_";}
                    else{return Object.keys(nodes[i]["relations"])[0];};
                }
            objDiv.append("div").attr("id",nodes[i]["relid"]).attr("class","object_relation").text("\u21d2");
            objDiv.append("div").attr("id",nodes[i]["id"]).attr("class","object_name").text(text);
        }
    }

    addBubbleDisplay("contains");

    $("circle,.object_name,.object_relation").click(function(){
        if(mode=="view"){
            var id=parseInt(this.id);
            if(Number.isInteger(id)){
                if(this.class=="object_relation"){
                    query("get_rel",id);
                }else{
                    query("get",id);
                }
            }
            if(mode=="edit"&&selectTimeout){
                selectNode(this.id);
            }
        }
    });
}

function addBubbleDisplay(relation){
    addBubble(nodeData,0,0,250,1,relation);
    for(var i=branches.length;i>0;i--){
        branches[i-1].draw();
    }
}

function addBubble(array,myX,myY,myR,level,relation){
    bubbles.push(new bubble(array["id"],myX,myY,myR));

    if(level==2){
        var font=150/(level+3);
        text=function(){
            if(!Object.keys(array["relations"])[0]){
                return "_";
            }else{
                return Object.keys(array["relations"])[0];
            }
        }
        if(getTextWidth(text,font)>myR*2){
            branches.push(new branch(array["id"],text,getTextHeight(text,myR*2),myX,myY));
        }else{
            branches.push(new branch(array["id"],text,font,myX,myY));
        }
    }

    if(array["relations"]["contains"]){
        var n=array["relations"][relation].length;
        var cR=relR(myR,n);
        for(var i=0;i<n;i++){
            var cT=(Math.PI/2-Math.PI/n)+i*2*Math.PI/n;
            var cX=(myR-cR)*Math.cos(cT)+myX;
            var cY=(myR-cR)*Math.sin(cT)+myY;
            if(n==1){cX=myX;cY=myY;cR=myR/golden;}
            addBubble(array["relations"][relation][i],cX,cY,cR,level+1,relation);
        }
    }
}

function relR(r,n){return(r*(Math.sin(Math.PI/n))/(1+Math.sin(Math.PI/n)));}

class bubble{
    constructor(id,x,y,r){
        this.id=id;
        this.r=r;
        this.x=x;
        this.y=y;
        this.circNode=svg.append("circle").attr("id",id);
        this.transform(false);
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

class branch{
    constructor(id,text,h,x,y){
        this.width=getTextWidth(text,h);
        this.height=h;
        this.x=x;
        this.y=y;
        this.id=id;
        this.index=index;
        this.text=text;
    }
    draw(){
        this.rectNode=svg.append("rect").attr("stroke","grey");
        this.textNode=svg.append("text").attr("id",this.id).text(this.text);
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

function getTextHeight(text,w){
    var testNode=svg.append("text").attr("id","test").attr("font-size",1000).text(text);
    var bbox=document.getElementById("test").getBBox();
    testNode.remove();
    return 1000*w/bbox.width;
}