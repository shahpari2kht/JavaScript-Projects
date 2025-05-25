'use strict'

var num = 9;

switch (num) {
    case 10 :
    case 9 :
        console.log('print yes');
        break;
    case 8 : 
        console.log('print 8');
        break;
    default:
        console.log('it's wrong');
        break;
}

var num2 = 11;

switch (false) {
    case (num2 == 10 || num2 == 9):
        console.log('print yes')
        break;
    case (num2 >= 11):
        console.log('print 11+')
        break;
    default:
        console.log('it's wrong');
        break;
}
