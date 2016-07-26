var pageLoaded=true, numLines=42, prevNode;

function query(callback,subid,type,objid,relation){
    $.post("reader.php", {
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
    for(i in data){
        obj=data[i];
        if(obj.objid!=0){
            var nodeText=getRelTo(obj,0);
            appendDiv(nodeText, obj.objid, "h"+(r-Math.ceil(r0/2)));
            // recurse to children of processed node
            if(r){insertHTML(obj.synapses,r-1,r0);}
        } 
    }
}

function setEvents(node){
    //box shadow hovering
    node.hover(function(){if(!editing){$(this).css("box-shadow", "0px 0px 2px #888888")}}, function(){$(this).css("box-shadow", "none")});

    node.on("click keydown", function(e){
        if((this!=prevNode)&&(editing)){ update(prevNode); }
        switch(e.which){
            case 13: //enter
            e.preventDefault();
            //set caret to end of line, then insert new node
            var sel=window.getSelection();
            var range=sel.getRangeAt(0);
            var node=range.commonAncestorContainer;
            range.setStart(node,node.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
            appendDiv();
            break;
            case 8: //backspace
            if(caretAtStart()){
                e.preventDefault();
                if(!$(this).text().length&&(this.id)&&confirm("Would you like to delete "+this.id+"?")){
                    query(function(){},this.id,"del");
                    $(this).remove();
                }else{
                    if(!$(this).text().length){
                        $(this).remove();
                    }
                }
            }
            break;
        }
    });

    // MathJaX overwriting and page loading
    node.on("click", function(){
        if(!editing){ loadPage(this.id) }
        if(editing){
            if($(this).data("MathJax")&&this!=prevNode){
                //get caret position
                // var sel=window.getSelection();
                // var range=sel.getRangeAt(0);
                // var offset=range.startOffset;

                // CARET POSITIONING IS CURRENTLY BROKEN

                //insert new text, which sets caret position to 0
                renderMathJax(this);

                //set caret position back to what it was
                // range.setStart(this.childNodes[0],offset);
                // range.collapse(true);
                // sel.removeAllRanges();
                // sel.addRange(range);
            }
        }
        prevNode=this;
    });
}

function update(node){
    // writing to server and client
    if(pageLoaded&&node){
        var nodeText=$(node).text();
        // node exists in system
        if(node.id){
            query(function(){}, root, "rel", node.id, nodeText.replace(/\\/g,'\\'));
        }
        // node not in system yet
        else{
            // update server side, then client side from server side giving correct objid
            query(function(data){ $(node).attr("id",data); }, root, "rel", "", nodeText.replace(/\\/g,'\\'));
        }
        $(node).data("text",nodeText);
    }
}

function renderMathJax(node){
    // renders MathJax for all but node argument
    pageLoaded=false;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    MathJax.Hub.Queue(function(){
        pageLoaded=true;
        $(tbox.children()).data("MathJax",true);
        // .attr("contenteditable",false);
    });
    // might need to split pageLoaded into two vars here
    if(node&&node.id){
        MathJax.Hub.Queue(function(){
            $(node).text($(node).data("text")).data("MathJax",false);
        });
    }
    // node.attr("contenteditable",editing);
}