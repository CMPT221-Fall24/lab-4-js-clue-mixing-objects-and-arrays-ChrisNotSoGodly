let suspectsArray = ["Oscar","Luis","Mark","Chris","Megan","Kate"];
let weaponsArray = ["a knife","a gun","a bat","a rifle","a computer","poison","a flip-flop","bad dad jokes"];
let roomsArray = ["bedroom","bathroom","livingRoom","kitchen","porch","patio","backyard","attic","basement","office"];

function randomNumber(min,max){
    let count = Math.round(Math.random() * [max - min] + min);
    return count;
}
            
function selectRandom(array){
    if (array == suspectsArray) {
        suspect = array[randomNumber(0,5)];
        return suspect;
    }
    else if (array == weaponsArray) {
        suspect = array[randomNumber(0,7)];
        return suspect;
    }
    else if (array == roomsArray) {
        suspect = array[randomNumber(0,9)];
        return suspect;
    }
    else
        return ("This didn't work");
}

function pickMystery(){
    let mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return mystery;
}

function revealMystery(){
    mystery = pickMystery();
    document.getElementById("Display").innerHTML = mystery.suspect + " killed the victim with " + mystery.weapon + " in the " + mystery.room;
}
