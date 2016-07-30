var pageLoaded=true, numLines=30, prevNode;

function query(callback,subid,type,objid,relation){
    $.post("resources/reader.php", {
        type:type, 
        subid:subid, 
        objid:objid, 
        relation:relation
    }, function(data,status){
        callback(JSON.parse(data));
    });
}

function loadPage(id){
    if(pageLoaded){
        pageLoaded=false;
        tbox.html('');
        query(function(data){
            root=id;
            parse_SQL(data);
            if(!tbox.children().length){ appendDiv() }
            prevNode=undefined;
            renderMathJax();
            pageLoaded=true;
        },id,"get");
    }
}

function insertHTML(data,r,r0){
    var first=true;
    r--;
    for(i in data){
        obj=data[i];
        if(obj.objid!=0){
            var nodeText=getRelTo(obj,0);
            appendDiv(nodeText, obj.objid, "h"+(1-Math.ceil(r0/2)+r),first);
            first=false;
            // recurse to children of processed node
            if(r){ insertHTML(obj.synapses,r,r0) }
        } 
    }
}

function setEvents(node){
    //box shadow hovering
    node.hover(function() { if(!editing){ $(this).css("box-shadow", "0px 0px 2px #888888") } }, function(){ $(this).css("box-shadow", "none") } );

    node.on("focusin click", function(e) {
        if (editing) {
            if (this != prevNode) { update(prevNode) }
            switch (e.which) {
                case 8: //backspace
                if (caretAtStart()) {
                    e.preventDefault();
                    if (confirm("Would you like to delete "+this.id+"?")) {
                        if (this.id) { query(function(){}, this.id, "del") }
                        $(this).remove();
                    }
                }
                break;
                case 9: //tab
                update(prevNode);
                renderMathJax();
                break;
                case 13: //enter
                e.preventDefault();
                appendDiv();
                break;
            }
            // MathJaX overwriting and page loading
            if ($(this).data("MathJax") && this != prevNode) {
                renderMathJax(this,window.getSelection().getRangeAt(0).startOffset);
            }
        } else { loadPage(this.id) }
        prevNode=this;
    } );
}

function update(node){
    // writing to server and client
    if(pageLoaded&&node){
        var nodeText=$(node).text();
        // node exists in system: update serverside
        if(node.id){ query(function(){}, node.id, "rel", "0", nodeText.replace(/\\/g,'\\')) }
        // node not in system yet: update serverside, then clientside with return from serverside
        else{
            query(function(data){
                $(node).attr("id",data);
                query(function(){}, data, "rel", "0", nodeText.replace(/\\/g,'\\'));
            }, root, "new");
        }
        $(node).data("text",nodeText);
    }
}

function renderMathJax(node,offset){
    // renders MathJax for all but node argument
    pageLoaded=false;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    MathJax.Hub.Queue(function(){
        pageLoaded=true;
        $(tbox.children()).data("MathJax",true);
    });
    // might need to split pageLoaded into two vars here
    if(node&&node.id){
        MathJax.Hub.Queue(function(){ $(node).text($(node).data("text")).data("MathJax",false) });
    }
    // set caret position to approximation of what the user wants -- this function needs improvement (detect MathJax before cursor and add to offset?)
    if(offset){
        MathJax.Hub.Queue(function(){
            var sel=window.getSelection();
            var range=sel.getRangeAt(0);
            range.setStart(node.firstChild,offset);
            range.setEnd(node.firstChild,offset);
            sel.removeAllRanges();
            sel.addRange(range);
        });
    }
    // add something that puts a ":" after every set name other than viewed
}

// creates relation of contains between subid and objid
function insert(subid, objid){
    if(subid!="0"&&objid!="0"){
        query(function(){}, objid, "delrel");
        query(function(){}, subid, "rel", objid, "contains");
    }
}