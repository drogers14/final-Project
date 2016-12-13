var famousPerson;
var adjective;
var number;
var adjective2;
var noun1;
var noun2;
var color;
var adjective3;
var noun;
var bodyPart;
var food;
var bodyPart2;
var noun3;
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
 famousPerson = document.getElementById("celebrity").value;
 adjective = document.getElementById("adj").value;
 number = document.getElementById("numb").value;
 adjective2 = document.getElementById("adj2").value;
 noun1 = document.getElementById("nouN").value;
 noun2 = document.getElementById("nouN2").value;
 color = document.getElementById("colour").value;
 adjective3 = document.getElementById("adj3").value;
 noun3 = document.getElementById("nouN3").value;
 bodyPart = document.getElementById("body").value;
 food = document.getElementById("animal").value;
 bodyPart2 = document.getElementById("body").value;
 noun3 = document.getElementById("nouN3").value;
    console.log(famousPerson);
    console.log(adjective);
    console.log(number);
    console.log(adjective2);
    console.log(noun1);
    console.log(noun2);
    console.log(color);
    console.log(adjective3);
    console.log(noun3);
    console.log(bodyPart);
    console.log(food);
    console.log(bodyPart2);
    console.log(noun3);
    
    if(famousPerson==""||adjective==""||number==""||adjective2==""||noun1==""||
  noun2==""||color==""||adjective3==""||noun3==""||bodyPart==""||food==""||
  bodyPart2==""||noun3==""){
      window.alert("Input is blank. Please write something")
    }
  setCookie("fuckThis" , famousPerson , 30);
  setCookie("fuckThis2", adjective, 30);
  setCookie("fuckThis3", number, 30);
  setCookie("fuckThis4", adjective2, 30);
  setCookie("fuckThis5" , noun1, 30);
  setCookie("fuckThis6", noun2, 30);
  setCookie("fuckThis7", color, 30);
  setCookie("fuckThis8", adjective3, 30);
  setCookie("fuckThis9", noun3, 30);
  setCookie("fuckThis10", bodyPart, 30);
  setCookie("fuckThis11", food, 30);
  setCookie("fuckThis12", bodyPart2, 30);
  setCookie("fuckThis13", noun3, 30);
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
  var nounInput3 = getCookie("fuckThis");

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
    console.log(nounInput3);

document.getElementById("input1").innerHTML=animalInput;
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
document.getElementById("input13").innerHTML=nounInput3;
}
