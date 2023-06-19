let odd;
let even;
let another;

odd=0;
even=0;
another=0;
arr= [1,2,3,4,5,6];
function cycle(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i]%2==0) {
            even++;
        }

        else if (array[i]%2==1||0.5){
            odd++;
        }

        else{
            another++;
        }
    }
    alert (even);
    alert (odd);
    alert (another);
}

alert(cycle(arr));