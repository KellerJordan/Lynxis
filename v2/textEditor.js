var oDoc, sDefTxt;

$(document).ready(function(){
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
});

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

//true unless html shown
function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

// if(validateMode()){oDoc.innerHTML=sDefTxt};

//changes between doc showing html or text
function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    oDoc.appendChild(oContent);
  } else {
    oContent = document.createRange();
    oContent.selectNodeContents(oDoc.firstChild);
    oDoc.innerHTML = oContent.toString();
  }
  oDoc.focus();
}

//prints only the text editing div rather than entire page
function printDoc() {
  if (!validateMode()) { return; }
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<html><body onload=\"print();\"><div style=\"padding: 50px\">" + oDoc.innerHTML + "<\/div><\/body><\/html>");
  oPrntWin.document.close();
}