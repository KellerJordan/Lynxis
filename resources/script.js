//constants
var golden = (1 + Math.sqrt(5))/2, wWidth = $(window).width() - 16, wHeight = $(window).height() - 16;
var pageLoaded = true, prevNode;

function query(callback, subid, type, objid, relation){
	$.post("resources/writer.php", {
		type: type, 
		subid: subid, 
		objid: objid, 
  		relation: relation
	}, function(data,status){
		callback(JSON.parse(data));
	});
}

function loadPage(id){
	if(pageLoaded){
		pageLoaded = false;
		tbox.html('');
		root = id;
		$.post("resources/reader.php", {type: "tree", id: id}, function(data, status){
			data = JSON.parse(data);
			for(var i in data){ appendNode(data[i]); }
			if(!tbox.children().length){ appendNode() }
			prevNode = undefined;
			renderMathJax();
			pageLoaded = true;
		});
	}
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

function appendNode(node){
	// creating node
	if(!node){ node = '<div class = t0><br></div>'}
	node = $(node);
	node.attr("contenteditable", editing)
		.data("MathJax", true)
		.data("text", node.text());
	tbox.append(node);

	// setting appropriate responses
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
				case 8: // backspace
				var range = window.getSelection().getRangeAt(0);
				if(range.collapsed && range.endOffset == 0){
					e.preventDefault();
					if(confirm("Would you like to delete " + this.id + "?")){
						if(this.id){ query(function(){}, this.id, "del") }
						$(this).remove();
					}
				}
				break;

				// increasing node primarity
				case 38: // uparrow
				query(function(){ 
					// loadPage(root); 
				}, this.id, "rel", 10, 0);
				break;

				// decreasing node primarity
				case 40: // downarrow
				query(function(){ 
					// loadPage(root); 
				}, this.id, "rel", 10, -1);
				break;
			}
			// MathJaX overwriting and page loading
		}else{ loadPage(this.id) }
		prevNode = this;
	});

	node.focus();
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

function toggleEditing(){
	update();
	editing = !editing;
	$(tbox.children()).attr("contenteditable", editing);
	$("#editing").text("Editing: " + editing);
	tbox.focus();
}