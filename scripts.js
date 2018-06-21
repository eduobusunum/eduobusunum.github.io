var codes = ["1515175", "74656", "123213"];
var names = ["secrettunnel", "ihaveabadfeelingaboutthis", "sogood"];

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

//on click submit -> check name & code validity; match; - if good open new page and create cookie, if not make both red
//make the cookie
var stateData = Cookies.get('progress');
console.log(stateData);
if (stateData == undefined){
  stateData='000';
  console.log('a');
  Cookies.set('progress', stateData);
}

function setClue() {
  console.log(stateData)
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
    console.log("I'm here");
    document.getElementById("line2").innerHTML="only the answer to a riddle but also a clue";
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
  if ((nameIndex==codeIndex) && nameIndex != -1){
    switch(nameIndex){
      case 0:
        window.open('https://eduobusunum.github.io/hmb.jpg', '_blank');
        stateData = stateData.replaceAt(0,"1");
        break;
      case 1:
        window.open('https://eduobusunum.github.io/pmb.jpg', '_blank');
        stateData = stateData.replaceAt(1,"1");
        break;
      case 2:
        stateData = stateData.replaceAt(2,"1");
        window.open('https://eduobusunum.github.io/safePart.jpg', '_blank');}
    console.log(stateData);
    Cookies.remove('progress');
    Cookies.set('progress',stateData);
    setClue();
    }
  else{
    if (nameIndex==-1){
      console.log('this');
      document.getElementById("name").style.color = "red";}
    document.getElementById("code").style.color = "red"}
}
