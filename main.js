

// Question number1
for(let i=0; i <= 25 ; i++){
    // console.log(i)
}


// Question number2
for(let i=0; i <= 10 ; i++){
    if(i % 2 != 0){
        // console.log(i)
    }
  
}

// Question number3
for(let i=0; i <= 10 ; i++){ 
    // console.log(i * i)
}


// Question
for (let i = 1 ; i <= 9 ; i++){
    for(let j=1 ; j <= 5 ; j++){
        // console.log(i*1)
        // console.log(i*2)
        // console.log(i*3)
    }
}


let num1 = 0;
let num2 = 1;
for (let i = 1; i <= 10; i++) {
    // console.log(num1);
    result = num1 + num2;
    num1 = num2;
    num2 = result;
}

// add function 

function addTwoNumber(numOne , numTwo){
    return numOne + numTwo
}
console.log(addTwoNumber(5,8))

// adddivNumber
function addDivNumber(numOne , numTwo){
    return numOne / numTwo
}
console.log(addDivNumber(10,2))

// function to sub two number

let resultSubTwoNumer = function (fristNum , secondNum){
    return fristNum - secondNum
}
console.log(resultSubTwoNumer(10,2))

let resultMultiTwoNumer = function (num , num ){
    return num * num
}
console.log(resultMultiTwoNumer(4,5))

function numbers(num){
    if(num % 3 == 0 && num % 5 ==0){
       return `fuzz , Buzz`
    }
    else if (num % 3 == 0 ){
      
        return ` Buzz`
    }
    else if (num % 5 == 0 ){
       return `fuzz`
    }
    else {
       return ` not fuzz , Buzz`
    }


}
console.log(numbers(20))


