var headings,branches,bubbles,nodeData;
var selected=[];
var selectTimeout=true;
var viewHistory=[];

function query(callback,type,subid,objid){
    root=subid;
    viewHistory.unshift(root);
    $.post("reader.php",{
        type:type,
        subid:subid,
        objid:objid,
    },function(data,status){
        callback(data);
    });
}

function constructPage(id){
    query(function(data){
        nodeData=JSON.parse(data);
        $("text,rect,circle,.relation_container,.graph_container").remove();
        headings=[];
        branches=[];
        bubbles=[];
        var bubbleStructure=[];
        index=0;

        for(var i=0;i<nodeData.synapses.length;i++){
            var synapse=nodeData.synapses[i];
            switch(synapse.relation){
                case "contains":
                // bubbleDisplay(synapse);
                headingDisplay(synapse);
                break;
                default:
                headingDisplay(synapse);
            }
        }
        $("#bubble_container").toggle();
        setEvents();
        drawSelections();
    },"get",id)
}

function headingDisplay(synapse){
    var relDiv=div.append("div").attr("class","relation_container");
    relDiv.append("div").text(synapse.relation).attr("class","relation_name");
    var objDiv=relDiv.append("div").attr("class","object");
    objDiv.append("div").attr("id",synapse.relid).attr("class","object_relation").text("\u21d2");
    query(function(data){
        objDiv.append("div").attr("id",synapse.objid).attr("class","object_name").text(JSON.parse(data));
    },"get_rel",synapse.objid,0);
}

function graphDisplay(relations){
    var set=nodeData["relations"]["contains"];
    if(set){
        var container=d3.select("#inner_container").append("div").attr("class","graph_container");
        var table=container.append("table");
        for(var i=0;i<set.length;i++){
            var tr=table.append("tr");
            tr.append("td").text(getText(Object.keys(set[i]["relations"]))[0]);
            for(var j=0;j<relations.length;j++){
                tr.append("td").text(getText(set[i]["relations"][relations[j]]));
            }
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
        var text=getText(Object.keys(array["relations"])[0]);
        if(getTextWidth(text,font)>myR*2){
            branches.push(new branch(array["id"],text,getTextHeight(text,myR*2),myX,myY));
        }else{
            branches.push(new branch(array["id"],text,font,myX,myY));
        }
    }

    if(array["relations"][relation]){
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
        }
        if(mode=="edit"&&selectTimeout){
            selectNode(this.id);
        }
    });
}

function selectNode(id){
    selectTimeout=false;
    setTimeout(function(){selectTimeout=true;},10);
    if(aDown){
        selected.push(id);
    }else{
        selected=[];
        selected[0]=id;
    }
    drawSelections();
}

function drawSelections(){
    $("circle").css("fill","white");
    for(i in selected){
        $("#"+selected[i]).css("fill","#ADD8E6");
    }
}