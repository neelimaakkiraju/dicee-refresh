var RandomNumber  = Math.floor(Math.random() * 6) + 1;
var RandomImage = "images/" + "dice" + RandomNumber + ".png";
var Image1 = document.querySelectorAll("img")[0].setAttribute("src",RandomImage);
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
var RandomImage2 = "images/" + "dice" + RandomNumber2 + ".png";
var Image2 =  document.querySelectorAll("img")[1].setAttribute("src" , RandomImage2);

if (RandomNumber > RandomNumber2){
    document.querySelector("h1").textContent = "PLAYER 1 WINS";
}
else if (RandomNumber2 > RandomNumber){
    document.querySelector("h1").textContent = "PLAYER 2 WINS";
}
else{
    document.querySelector("h1").textContent  = "DRAWN";

}
