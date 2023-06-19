let num;
let type;
let number;
let string;
let nan;

nan = 'nan';
string = 'string';
number = 'number';
num=+prompt('Введите значение');
type=typeof num;
if(type == number){
    if((num%2)==0){
        alert('чётное')
    }
    else{
        alert('нечётное')
    }
}

else if(type == nan){
    alert('Упс, кажется, вы ошиблись')
}

else{
    alert('Упс, кажется, вы ошиблись')
}