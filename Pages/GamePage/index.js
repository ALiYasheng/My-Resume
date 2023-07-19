var randomNUmber1=Math.floor(Math.random()*6)+1;

document.querySelector("img,img1").setAttribute("src", "./images/dice"+randomNUmber1+".png");


var randomNUmber2=Math.floor(Math.random()*6)+1;
document.querySelector("img.img2").setAttribute("src", "./images/dice"+randomNUmber2+".png");

var h1= document.querySelector("h1");
if (randomNUmber1>randomNUmber2){
    h1.innerHTML="Player 1 wins !";
    }else if
        (randomNUmber1<randomNUmber2){
    h1.innerHTML="player 2 wins !";
    }else
    {
        h1.innerHTML="Draw !"
    }
    