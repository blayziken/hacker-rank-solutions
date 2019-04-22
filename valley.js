
function countingValleys(){

    steps = "U,D,D,D,U,D,U,U";
    let seaLevel = 0;
    let down = 0;

    for (var i=0; i<steps.length; i++){
    if (steps.charAt(i) === "D" && seaLevel == 0){
        down++;
        seaLevel--;
    } else if (steps.charAt(i) === "D" && seaLevel !== 0){
        seaLevel--;
    } else if (steps.charAt(i) === "U") {
        seaLevel++;
    }
   
}
    return down;
}

console.log(countingValleys());