arr= [1,2,3,4,5];
function sverka(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

alert (sverka(arr))