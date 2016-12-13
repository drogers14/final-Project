var name;
var number;
var verb;
var liquid;
var meal;
var adjective;
var place;
var occupation;
var famousPerson;
var adjective2;
var oldCelebrity;
var friendName;

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

  name = document.getElementById("userName").value;
 number = document.getElementById("numb").value;
 verb = document.getElementById("userVerb").value;
 liquid = document.getElementById("userLiquid").value;
 meal = document.getElementById("userMeal").value;
 adjective = document.getElementById("adj").value;
 place = document.getElementById("userPlace").value;
 occupation = document.getElementById("job").value;
 famousPerson = document.getElementById("fame").value;
 adjective2 = document.getElementById("adj2").value;
 oldCelebrity = document.getElementById("oldCeleb").value;
 friendName = document.getElementById("friend").value;

    console.log(name);
    console.log(number);
    console.log(verb);
    console.log(liquid);
    console.log(meal);
    console.log(adjective);
    console.log(place);
    console.log(occupation);
    console.log(famousPerson);
    console.log(adjective2);
    console.log(oldCelebrity);
    if(name==""||number==""||verb==""||liquid==""||meal==""||adjective==""||place==""||
    occupation==""||famousPerson==""||adjective==""||oldCelebrity==""){
      window.alert("Input is blank. Please write something.")
    }
  setCookie("fuckThis", name, 30);
  setCookie("fuckThis2", number, 30);
  setCookie("fuckThis3", verb, 30);
  setCookie("fuckThis4", liquid, 30);
  setCookie("fuckThis5" , meal, 30);
  setCookie("fuckThis6", adjective, 30);
  setCookie("fuckThis7", place, 30);
  setCookie("fuckThis8", occupation, 30);
  setCookie("fuckThis9", famousPerson, 30);
  setCookie("fuckThis10", adjective2, 30);
  setCookie("fuckThis11", friend, 30);
  setCookie("fuckThis12", oldCelebrity, 30);
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
  var friendInput = getCookie("fuckThis12");


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

document.getElementById("input1").innerHTML=animalInput;
document.getElementById("input2").innerHTML=nounInput;
document.getElementById("input3").innerHTML=famousPersonInput;
document.getElementById("input4").innerHTML=vehicleInput;
document.getElementById("input5").innerHTML=friendsNameInput;
document.getElementById("input6").innerHTML=villainInput;
document.getElementById("input7").innerHTML=adjectiveInput;
document.getElementById("input8").innerHTML=adjectiveInput2;
document.getElementById("input9").innerHTML=pluralNounInput;
document.getElementById("input10").innerHTML=friendInput;
document.getElementById("input11").innerHTML=nounInput;
document.getElementById("input12").innerHTML=AdjectiveInput3;
}
