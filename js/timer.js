let secondRemaining;
let intervalHandler;

function resetPage(){
    document.getElementById("timer").style.display = "block";
}

function tick(){
    let timeDisplay = document.getElementById("timer");

    let min = Math.floor(secondRemaining / 60);
    let sec = secondRemaining - (min * 60);
    
    if (sec < 10){
        sec = "0" + sec;
    }

    let messages = min.toString() + ":" + sec;
    timeDisplay.innerHTML = messages;

    let break_name = document.getElementById("brack_Name").value;
    document.getElementById("Break").innerHTML = break_name + " Break "


    if (secondRemaining === 0){
        alert("Done!");
        clearInterval(intervalHandler);
        resetPage();
    }
    secondRemaining--;
}




function startCountdown(){
    function resetPage(){
        document.getElementById("minutes").style.display = "block";
    }

    let minutes = document.getElementById("minutes").value;
  
    if (isNaN(minutes)){
        alert("Please Enter a number");
        return;
    }
    secondRemaining = minutes * 60;
    intervalHandler = setInterval(tick,1000);
    document.getElementById("minutes").style.display = "none";

}



function Timer(){
    let inputMinutes = document.getElementById("minutes").value;
    console.log("AAQ");
    startCountdown();
}

