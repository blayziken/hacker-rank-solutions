function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (var i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                leftDiagonal += arr[i][j];
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        for (let j = 100; j >= 0; j--) { 
            // take note of the constrainst in the problem code
            if (arr.length - 1 - i === j) {
                rightDiagonal += arr[i][arr.length - 1 - i];
            }
        }
    }

    return Math.abs(leftDiagonal - rightDiagonal);
}