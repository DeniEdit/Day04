function main(numOne, numTwo){

    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
        //Only change code below this line

        //Only change code below this line
        quotient = numOne/numTwo;

    }

    return quotient;
    }

    console.log(main(15,3)); //change this line
    console.log(main(25,5));  
    console.log(main(420,10));    
    console.log(main(55,0));    
    module.exports = main;