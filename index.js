
var r = Math.floor(Math.random() * 6) + 1;
var name = "images/dice" + r + ".png";
document.querySelectorAll("img")[0].setAttribute("src", name);
var r1 = Math.floor(Math.random() * 6) + 1;
var name1 = "images/dice" + r1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", name1);

if (r>r1){
    document.querySelector("h1").innerHTML = "Player 1 wins!!!";
}
else if(r===r1){
    document.querySelector("h1").innerHTML = "Draw Match";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!!!"
}
