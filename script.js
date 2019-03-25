var first;
var last;
var age;
var date;
var eye;


var katia = {
    firstName: "",
    lastName: "",
    age: 0,
    date: 0,
    eye: "",
    lola: function(){
        if (age <16 ) {
            alert("not acceptable");
            }
           else if (age ===16) {
                alert("get permit");
                }
            else{ alert ("can drive");}
        }, 
    kate: function() {
        document.getElementById("para").innerHTML = first +" "+ last + " " + age + " " + date + " " + eye;
        }
    };

var formInput = document.getElementById("numberForm");
document.getElementById('btn').addEventListener('click', function() {
  eye = formInput.eyes.value;
  alert(eye);
  first=document.querySelector(".first").value;
  last=document.querySelector(".last").value;
  age=parseInt(document.querySelector(".old").value);
  date=document.getElementById("date1").value;
  console.log(first +" "+ last + " " + age + " " + date + " " + eye);
  katia.lola();
  katia.kate();
});

