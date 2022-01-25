var anss1 = "0";
var anss2 = "0";
document.getElementById("buttonn").onclick = function() {
    var random1 = Math.random() * 6;
    random1 = Math.floor(random1) + 1;
    var random2 = Math.random() * 6;
    random2 = Math.floor(random2) + 1;


    if (random1 == 1) {
        document.getElementById("img1").src = "images/dice1.png";
    } else
    if (random1 == 2) {
        document.getElementById("img1").src = "images/dice2.png";


    } else if (random1 == 3) {
        document.getElementById("img1").src = "images/dice3.png";


    } else if (random1 == 4) {
        document.getElementById("img1").src = "images/dice4.png";


    } else if (random1 == 5) {
        document.getElementById("img1").src = "images/dice5.png";


    } else if (random1 == 6) {
        document.getElementById("img1").src = "images/dice6.png";


    }

    if (random2 == 1) {
        document.getElementById("img2").src = "images/dice1.png";
    } else if (random2 == 2) {
        document.getElementById("img2").src = "images/dice2.png";


    } else if (random2 == 3) {
        document.getElementById("img2").src = "images/dice3.png";


    } else if (random2 == 4) {
        document.getElementById("img2").src = "images/dice4.png";


    } else if (random2 == 5) {
        document.getElementById("img2").src = "images/dice5.png";


    } else if (random2 == 6) {
        document.getElementById("img2").src = "images/dice6.png";


    }



    if (random1 > random2) {
        document.getElementById("result").innerHTML = " 🚩player1 won!";
        anss1++;

    } else if (random1 < random2) {
        document.getElementById("result").innerHTML = " player2 won!🚩";
        anss2++;



    } else {
        document.getElementById("result").innerHTML = "draw!";
    }
    document.getElementById("ans1").innerHTML = "player 1 points :" + anss1;
    document.getElementById("ans2").innerHTML = "player 2 points :" + anss2;










}
document.getElementById("buttonnn").onclick = function() {
    location.reload();
}