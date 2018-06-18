var codes = ["1515175", "74656", "123213"];
var codesIndicies = [1,2,3];

var names = ["Secret Tunnel", "SecretTunnel", "secrettunnel", "secret tunnel",
"Ihaveabadfeelingaboutthis", "ihaveabadfeelingaboutthis", "I have a bad feeling about this", "i have a bad feeling about this",
"So Good", "so good", "sogood", "SoGood"];
var namesIndicies = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];


//on edit name -> check name validity - if good make green, if not keep black
//on edit code -> check code validity and match to names - if good make green, if not keep black
//on click submit -> check name & code validity; match; - if good open new page and create cookie, if not make both red

function checkName() {
  var currentName = document.getElementById("name").value;
  id = "name";
  validateValue(id,currentName, names);
}


function checkCode() {
  var currentCode = document.getElementById("code").value;
  id = "code";
  console.log(codes);
  var a = currentCode.indexOf(codes);
  console.log(currentCode);
  console.log(a);
  console.log(id);
  if (a == -1){
    document.getElementById(id).style.color = "black";}
  else{
    document.getElementById(id).style.color = "green";}
 }


function validateValue (id, input, storedArray){
  console.log(storedArray);
  var a = input.indexOf(storedArray);
  console.log(input);
  console.log(a);
  console.log(id);
  if (a == -1){
    document.getElementById(id).style.color = "black";}
  else{
    document.getElementById(id).style.color = "green";}
 }

function validateCode(currentCode) {
  console.log(codes);
  var a = codes.indexOf(currentCode);
  console.log(currentCode);
  console.log(a);
  if (a == -1){
    document.getElementById("code").style.color = "black";}
    else {
      document.getElementById("code").style.color = "green";
    }
}

function validateSubmit(){};
