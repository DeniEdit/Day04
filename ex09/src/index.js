function main(){
    //only change code below this line

    var firstNum=6 ,secondNum=1,thirdNum=5.2;
    
    firstNum*=9;
    secondNum/=5;
    thirdNum*=10;

    //Only change code above this line

    return {
        firstNum, 
        secondNum, 
        thirdNum 
    };
}

console.log(main()); //Change line this
module.exports=main;