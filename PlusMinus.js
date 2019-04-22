function plusMinus(arr) {
    // arr = [-4, 3, -9, 0, 4, 1];

    var positiveValues= 0;
    var negativeValues= 0; 
    var zeroValues = 0;

    const ArrayLength = arr.length;

    for (var i=0; i < arr.length; i++) {
        if (arr[i] > 0){
            positiveValues++;
        } else if (arr[i] < 0) {
            negativeValues++;
        } else {
            zeroValues++;
        }
    }
    console.log(positiveValues/ArrayLength);
    console.log(negativeValues/ArrayLength);
    console.log(zeroValues/ArrayLength);
}