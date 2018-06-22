var names = ["secrettunnel", "ihaveabadfeelingaboutthis", "sogood"];
var codes = ["1515175", "74656", "132213","1515175210", "74656439", "132213678"];

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var stateData = Cookies.get('progress');
if (stateData == undefined){
  stateData='000';
  Cookies.set('progress', stateData,  { expires: 365 });
}

function setClue() {
  if (stateData=="100") {
    document.getElementById("line1").innerHTML="The URL for this website is not...";
  }
  if (stateData=="010") {
    document.getElementById("line2").innerHTML="...only the answer to a riddle but also a clue...";
  }
  if (stateData=="001") {
    document.getElementById("line3").innerHTML="...about the location of the final prize.";
  }
  if (stateData=="011") {
    document.getElementById("line2").innerHTML="...only the answer to a riddle but also a clue";
    document.getElementById("line3").innerHTML="about the location of the final prize.";
  }
  if (stateData=="110") {
    document.getElementById("line1").innerHTML="The URL for this website is not";
    document.getElementById("line2").innerHTML="only the answer to a riddle but also a clue...";
  }
  if (stateData=="101") {
    document.getElementById("line1").innerHTML="The URL for this website is not...";
    document.getElementById("line3").innerHTML="...about the location of the final prize.";
  }
  if (stateData=="111") {
    document.getElementById("line1").innerHTML="The URL for this website is not";
    document.getElementById("line2").innerHTML="only the answer to a riddle but also a clue";
    document.getElementById("line3").innerHTML="about the location of the final prize.";
  }
}

function checkInput() {
  var currentName = document.getElementById("name").value;
  currentName = currentName.replace(/\s/g,'');
  currentName = currentName.toLowerCase();
  var nameIndex = names.indexOf(currentName);
  if(nameIndex==-1){
    document.getElementById("name").style.color = "black";}
  else {
    document.getElementById("name").style.color = "green";}
  var currentCode = document.getElementById("code").value;
  var codeIndex = codes.indexOf(currentCode);
  if (codeIndex == -1){
    document.getElementById("code").style.color = "black";}
  else if (codeIndex == nameIndex){
    document.getElementById("code").style.color = "green";}
  else {document.getElementById("code").style.color = "black";}
}

function validateSubmit(){
  var currentName = document.getElementById("name").value;
  currentName = currentName.replace(/\s/g,'');
  currentName = currentName.toLowerCase();
  var nameIndex = names.indexOf(currentName);
  var currentCode = document.getElementById("code").value;
  var codeIndex = codes.indexOf(currentCode);
  if (codeIndex>2){
    nameIndex = nameIndex+3}
  if ((nameIndex==codeIndex) && nameIndex != -1){
    switch(nameIndex){
      case 0:
        window.open('https://eduobusunum.github.io/hmb.png', '_blank');
        stateData = stateData.replaceAt(0,"1");
        break;
      case 1:
        window.open('https://eduobusunum.github.io/pmb.png', '_blank');
        stateData = stateData.replaceAt(1,"1");
        break;
      case 2:
        stateData = stateData.replaceAt(2,"1");
        window.open('https://eduobusunum.github.io/gcb.jpg', '_blank');
        break;
      case 3:
        window.open('https://eduobusunum.github.io/hmg.png', '_blank');
        break;
      case 4:
        window.open('https://eduobusunum.github.io/pmg.png', '_blank');
        break;
      case 5:
        window.open('https://eduobusunum.github.io/gc2.jpg', '_blank');
        break;}
    Cookies.remove('progress');
    Cookies.set('progress',stateData,  { expires: 365 });
    setClue();
    }
  else{
    if (nameIndex==-1){
      document.getElementById("name").style.color = "red";}
      document.getElementById("code").style.color = "red"}
}
