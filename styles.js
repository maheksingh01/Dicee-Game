var randomnumber1= Math.floor(Math.random()*6) + 1;  //1-6


var randomdiceimage1 =  "dice" + randomnumber1+".png"; //dice1.png-dice6.png image

var randomImageSource1 = "images/" + randomdiceimage1;


var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);



var randomnumber2= Math.floor(Math.random()*6) + 1;  //1-6

var randomdiceimage2 =  "dice" + randomnumber2 + ".png"; //dice1.png-dice6.png image

var randomImageSource2 = "images/" + randomdiceimage2;

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 WINS";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}