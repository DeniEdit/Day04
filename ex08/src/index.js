function main(numOne,numTwo){
    //only change code below this line

    var myX=12 ,myY=19,myZ=24;
    
    myX+=3;
    myY+=17;
    myZ-=20;

    //Only change code above this line

    return {
        myX,
        myY,
        myZ
    };
}

console.log(main()); //Change line this
module.exports=main;