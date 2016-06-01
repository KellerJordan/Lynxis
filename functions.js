//constants
var golden=(1+Math.sqrt(5))/2;
var wWidth=$(window).width()-16;
var wHeight=$(window).height()-16;
var sWidth=626;
var sHeight=500;

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