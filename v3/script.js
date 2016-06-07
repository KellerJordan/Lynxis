var headings,branches,nodeData;
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
        callback(JSON.parse(data));
    });
}

function constructPage(id){
    $("text,rect,circle,.relation_container,.graph_container").remove();
    headings=[];
    branches=[];
    index=0;
    query(function(data){
        display(data,0);
    },"get",id);
}

function display(data,i){
    var synapse=data.synapses[i];
    switch(synapse.relation){
        // case "contains":
        // bubbleDisplay(synapse);
        // headingDisplay(synapse);
        // break;
        default:
        headingDisplay(synapse);
    }
    if(i==data.synapses.length-1){
        setEvents();
        drawSelections();
    }else{
        display(data,i+1);
    }
}

function headingDisplay(synapse){
    query(function(data){
        var relDiv=div.append("div").attr("class","relation_container");
        relDiv.append("div").text(synapse.relation).attr("class","relation_name");
        var objDiv=relDiv.append("div").attr("class","object");
        objDiv.append("div").attr("id",synapse.relid).attr("class","object_relation").text("\u21d2");
        objDiv.append("div").attr("id",synapse.objid).attr("class","object_name").text(data);
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

function setEvents(){
    $("circle,.object_name,.object_relation").click(function(){
        if(mode=="view"){
            var id=parseInt(this.id);
            if(Number.isInteger(id)){
                if(this.class=="object_relation"){
                    query("get_rel",id);
                }else{
                    constructPage(id);
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