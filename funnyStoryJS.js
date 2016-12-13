var animal;
var noun1;
var famousPerson;
var vehicle1;
var friendsName;
var villain;
var adjective;
var adjective2;
var pluralNoun;
var adjective3;
var noun2;
var cousinName;
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }



  function myBitch() {

  animal = document.getElementById("animal").value;
 noun1 = document.getElementById("noun").value;
 famousPerson = document.getElementById("FamousPerson").value;
 vehicle1 = document.getElementById("vehicle").value;
 friendsName = document.getElementById("friendName").value;
 villain = document.getElementById("villainName").value;
 adjective1 = document.getElementById("adjective").value;
 adjective2 = document.getElementById("adj2").value;
 pluralNoun = document.getElementById("pluralNouns").value;
 adjective3 = document.getElementById("adj3").value;
 noun2 = document.getElementById("nounTwo").value;
 cousinName = document.getElementById("cousinsName").value;
 if(animal==""||noun1==""||famousPerson==""||vehicle1==""||friendsName==""||
 villain==""||adjective1==""||adjective2==""||pluralNoun==""||adjective3==""
 ||noun2==""||cousinName==""){
   window.alert("Input is blank. Please write something.")
 }

    console.log(noun1);
    console.log(animal);
    console.log(famousPerson);
    console.log(vehicle1);
    console.log(friendsName);
    console.log(villain);
    console.log(adjective1);
    console.log(adjective2);
    console.log(pluralNoun);
    console.log(adjective3);
    console.log(noun2);
    console.log(cousinName);
  setCookie("fuckThis" , animal , 30);
  setCookie("fuckThis2", noun1, 30);
  setCookie("fuckThis3", famousPerson, 30);
  setCookie("fuckThis4", vehicle1, 30);
  setCookie("fuckThis5" , friendsName, 30);
  setCookie("fuckThis6", villain, 30);
  setCookie("fuckThis7", adjective1, 30);
  setCookie("fuckThis8", adjective2, 30);
  setCookie("fuckThis9", pluralNoun, 30);
  setCookie("fuckThis10", adjective3, 30);
  setCookie("fuckThis11", noun2, 30);
  setCookie("fuckThis12", cousinName, 30);
  console.log(document.cookie);
  }

function generateStory(){
  var animalInput = getCookie("fuckThis");
  var nounInput = getCookie("fuckThis2");
  var famousPersonInput = getCookie("fuckThis3");
  var vehicleInput = getCookie("fuckThis4");
  var friendsNameInput = getCookie("fuckThis5");
  var villainInput = getCookie("fuckThis6");
  var adjectiveInput = getCookie("fuckThis7");
  var adjectiveInput2 = getCookie("fuckThis8");
  var pluralNounInput = getCookie("fuckThis9");
  var adjectiveInput3 = getCookie("fuckThis10");
  var nounInput2 = getCookie("fuckThis11");
  var cousinNameInput = getCookie("fuckThis12");

 console.log(document.cookie);
   console.log(animalInput);
   console.log(nounInput);
   console.log(famousPerson);
   console.log(vehicleInput);
   console.log(friendsNameInput);
   console.log(villainInput);
   console.log(adjectiveInput);
   console.log(adjectiveInput2);
   console.log(pluralNounInput);
   console.log(adjectiveInput3);
   console.log(nounInput2);
   console.log(cousinNameInput);

document.getElementById("animals").innerHTML=animalInput;
document.getElementById("input2").innerHTML=nounInput;
document.getElementById("input3").innerHTML=famousPersonInput;
document.getElementById("input4").innerHTML=vehicleInput;
document.getElementById("input5").innerHTML=friendsNameInput;
document.getElementById("input6").innerHTML=villainInput;
document.getElementById("input7").innerHTML=adjectiveInput;
document.getElementById("input8").innerHTML=adjectiveInput2;
document.getElementById("input9").innerHTML=pluralNounInput;
document.getElementById("input10").innerHTML=adjectiveInput3;
document.getElementById("input11").innerHTML=nounInput;
document.getElementById("input12").innerHTML=cousinNameInput;
}
