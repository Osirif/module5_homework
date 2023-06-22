let nan = 'nan';
let num=+prompt('Введите значение');
if(typeof num == 'number' &&!isNaN(num)){
    if((num%2)==0){
        alert('чётное')
    }
    else{
        alert('нечётное')
    }
}
else{
    alert('Упс, кажется, вы ошиблись')
}