var objectList, pageLoaded=true, numLines=42;

function query(callback,subid,type,objid,relation){
    $.post("reader.php",{
        type:type,
        subid:subid,
        objid:objid,
        relation:relation,
    },function(data,status){
        data=JSON.parse(data);
        callback(data);
    });
}

function loadPage(id){
    if(pageLoaded){
        pageLoaded=false;
        if(objectList){compareHTML()}
        tbox.html('');
        query(function(data){
            root=id;
            parse_SQL(data);
            objectList=parse_HTML();
            if(!tbox.children().length){tbox.append("<div><br></div>");}
            setResponses();
            pageLoaded=true;
        },id,"get");
    }
}

function parse_HTML(){
    var data={};
    for(var i=0;i<tbox.children().length;i++){
        var node=$(tbox.children()[i]);
        data[node.attr("id")]=node.text();
    }
    return data;
}

function compareHTML(){
    for(var i=0;i<tbox.children().length;i++){
        var node=tbox.children()[i];
        if(objectList[node.id]!=$(node).text()&&$(node).text()){query(function(){},root,"rel",node.id,$(node).text().replace(/\\/g,'\\'))}
        delete objectList[node.id];
    }
    for(var i in objectList){query(function(){},i,"del")}
}

function parse_SQL(data){
    r=1;
    while(count(data,r+1)<numLines&&!(count(data,r+1)==count(data,r))){r++;}
    insertHTML(data,r,r);
}

function count(data,r){
    var num=0;
    for(i in data){
        if(data[i].objid==0){num++;}
        if(data[i].synapses&&r){num+=count(data[i].synapses,r-1);}
    }
    return num;
}

function insertHTML(data,r,r0){
    for(i in data){
        obj=data[i];
        if(obj.objid!=0){
            var div=$('<div></div>');
            div.attr("id",obj.objid);
            div.css("font-size",14.666666);
            if(r==r0){div.css("font-weight","bold").css("padding-top","20px")}
            if(obj.relation=="property"){div.css("margin-left","40px")}
            if(obj.synapses&&obj.synapses[0]){div.text(obj.synapses[0].relation);}else{div.text("_");}
            tbox.append(div);
            if(r){insertHTML(obj.synapses,r-1,r0);}
        } 
    }
}

function setResponses(){
    $(tbox.children()).hover(function(){
        if(mode=="view"){
            $(this).css("box-shadow", "0px 0px 2px #888888");
        }
    }, function(){
        $(this).css("box-shadow", "none");
    });
    $(tbox.children()).on("click", function(){
        if(mode=="view"){
            loadPage(this.id);
        }
    });
}