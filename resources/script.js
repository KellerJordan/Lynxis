var pageLoaded = true, prevNode;

function query(callback, subid, type, objid, relation){
    $.post("resources/reader.php", {
        type:type, 
        subid:subid, 
        objid:objid, 
        relation:relation
    }, function(data,status){
        callback(JSON.parse(data))
    });
}

function loadPage(id){
    if(pageLoaded){
        pageLoaded = false;
        tbox.html('');
        root = id;
        query(function(data){
            insertHTML(data, 3, 3);
            if(!tbox.children().length){ appendDiv() }
            prevNode = undefined;
            renderMathJax();
            pageLoaded = true;
        }, id, "get");
    }
}

function insertHTML(data, r, r0){
    var first = true;
    r--;
    for(i in data){
        obj = data[i];
        if(obj.objid != 0){
            appendDiv(getRelTo(obj,0), obj.objid, "t" + (1 - Math.ceil(r0 / 2) + r), first);
            first = false;
            if(r){ insertHTML(obj.synapses, r, r0) }
        } 
    }
}

function setEvents(node){
    //box shadow hovering
    node.hover(function(){ if(!editing){ $(this).css("box-shadow", "0px 0px 2px #888888") } }, function(){ $(this).css("box-shadow", "none") });

    node.on("click keydown", function(e){
        if(editing){
            // click
            if(this != prevNode){
                update(prevNode);
                if(e.shiftKey && this.id && prevNode){ insert(this.id, prevNode.id) }
                else{ if($(this).data("MathJax")){ renderMathJax(this,window.getSelection().getRangeAt(0).startOffset) } }
            }
            // keypress
            switch(e.which){
                case 8: //backspace
                if(caretAtStart()){
                    e.preventDefault();
                    if (confirm("Would you like to delete " + this.id + "?")) {
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
        }else{ loadPage(this.id) }
        prevNode = this;
    } );
}

function update(node){
    // writing to server and client
    if(pageLoaded && node){
        var nodeText = $(node).text();
        // node exists in system: update serverside
        if(node.id){ query(function(){}, node.id, "rel", "0", nodeText.replace(/\\/g,'\\')) }
        // node not in system yet: update serverside, then clientside with return from serverside
        else{
            query(function(data){
                $(node).attr("id", data);
                query(function(){}, data, "rel", "0", nodeText.replace(/\\/g,'\\'));
            }, root, "new");
        }
        $(node).data("text", nodeText);
    }
}

function renderMathJax(node, offset){
    // renders MathJax for all but node argument
    pageLoaded = false;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    MathJax.Hub.Queue(function(){
        pageLoaded = true;
        $(tbox.children()).data("MathJax", true);
    });
    // might need to split pageLoaded into two vars here
    if(node && node.id){
        MathJax.Hub.Queue(function(){ $(node).text($(node).data("text")).data("MathJax", false) });
    }
    // set caret position to approximation of what the user wants -- this function needs improvement (detect MathJax before cursor and add to offset?)
    if(offset){
        MathJax.Hub.Queue(function(){
            var sel = window.getSelection();
            var range = sel.getRangeAt(0);
            range.setStart(node.firstChild, offset);
            range.setEnd(node.firstChild, offset);
            sel.removeAllRanges();
            sel.addRange(range);
        });
    }
    // add something that puts a ":" after every set name other than viewed
}

// creates relation of contains between subid and objid
function insert(subid, objid){
    if(subid != "0" && objid != "0"){
        query(function(){
            query(function(){
                loadPage(root);
            }, subid, "rel", objid, "contains");
        }, objid, "delrel");
    }
}