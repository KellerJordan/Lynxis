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

function constructPage(){
    $("text,rect,circle,.relation_container").remove();
    headings=[];
    branches=[];
    bubbles=[];
    index=0;
    var h=20;

    bubbleDisplay("contains");
    headingDisplay();
    setEvents();
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

function headingDisplay(){
    for(var relation in nodeData["relations"]){
        var nodes=nodeData["relations"][relation];
        var relDiv=div.append("div").attr("class","relation_container");
        relDiv.append("div").text(relation).attr("class","relation_name");
        for(var i in nodes){
            objDiv=relDiv.append("div").attr("class","object");
            var text=function(){if(!Object.keys(nodes[i]["relations"])[0]){return "_";}else{return Object.keys(nodes[i]["relations"])[0];};}
            objDiv.append("div").attr("id",nodes[i]["relid"]).attr("class","object_relation").text("\u21d2");
            objDiv.append("div").attr("id",nodes[i]["id"]).attr("class","object_name").text(text);
        }
    }
}

function bubbleDisplay(relation){
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

function setEvents(){
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