{"use strict"}
//question 1


 function max( x, y){
     
 if(x>y){
     console.log("The largest number is: " + x);
     
 }
 else{
    console.log("The largest number is: " + y);
 }
 }
 max(7,28)


 //question 2
 function max( x, y,z){
    "use strict"
if(x>y && x>z){
    console.log("The largest number is: " + x);
    
}
else if(y> x && y>z){
   console.log("The largest number is: " + y);
}
else{
    console.log("The largest number is: " + z);
}
}
max(12,4,2)

//question 3
function isVowel(x){
if(x.toLowerCase()=='a' || x.toLowerCase()=='e' || x.toLowerCase()=='i' || x.toLowerCase()=='o' || x.toLowerCase()=='u'){
    console.log(Boolean(1))
}
else
{
    console.log(Boolean(0))
}
}
isVowel('A')

//question 4
//sum
function sum(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
     sum=sum+number[i];
    }
    console.log(sum)
}
sum([1,2,3,4]) 
//multiply
function multiply(number){
    let multiply=1;
    for(let i=0;i<number.length;i++){
     multiply=multiply*number[i];
    }
    console.log(multiply)
}
multiply([1,2,3,4]) 

//question 5
function reverse(str){
    let revString='';
    for(let i=0;i<str.length;i++){
        revString=revString+ str.charAt(i);
    }
    console.log(revString)
}
reverse("jag testar") 

//question 6
function findLongestWord(arrayWords){
    let longWord=arrayWords[0];
    for(let i=1;i<arrayWords.length;i++){
        if(arrayWords[i].length>longWord.length){
            longWord=arrayWords[i]
        }
    }
    console.log(longWord)
}
findLongestWord(['priya','prabhat','puja'])


//question 7
function filterLongWords(arrayWords,intValue){
    let filterWord=[];
    let j=0;
    for(let i=0;i<arrayWords.length;i++){
        if(arrayWords[i].length>intValue){
            filterWord[j]=arrayWords[i];
            j=j+1;
        }
    }
    console.log(filterWord)
}
filterLongWords(['prabhat','ram','gitanjali','ashika'],4)

//question 8
function computeSumOfSquares(arrayValue){
    

const squareSum=arrayValue.reduce((a,b)=> a+ b*b,0);
console.log(" The square sum of array is: " +squareSum)
    
}
computeSumOfSquares([1,2,3]) 


//question 9
function printOddNuberOnly(numberArray){
    for(let i=0;i<numberArray.length;i++){
        if(numberArray[i]%2!=0){
            console.log(numberArray[i])
        }
    }
}
printOddNuberOnly([3,6,21,3,4,8,9])

//question 10
function computeSumOfSquaresOfEvensOnly(numberArray){
    let sum=0;
    for(let i=0;i<numberArray.length;i++){
        if(numberArray[i]%2==0){
          sum=sum+numberArray[i]*numberArray[i];
        }
    }
    console.log(sum);
}
computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) 

//question 11
function sum1(arrayNumber){
   const result= arrayNumber.reduce((a,b)=>a+b,0);
   console.log(" The sum of elements in the array is: "+ result);

}
 sum1([1,2,3]);
 function multiply1(arrayNumber){
    const result= arrayNumber.reduce((a,b)=>a*b,1);
    console.log(" The multiplication of elements in the array is: "+ result);
 
 }
  multiply1([1,2,3,4]);



//question 12
function findSecondBiggest(arrayNumber){
    if(arrayNumber <=1){
        throw new console.error("must have atleast 2 elements");
    }
    let secondBiggest=arrayNumber[0];
    let biggest=arrayNumber[1];
    if(secondBiggest>biggest){
        let temp=biggest;
        biggest=secondBiggest;
        secondBiggest=temp;
    }
    for(let i=2;i<arrayNumber.length;i++){
        if(arrayNumber[i]>biggest){
            secondBiggest=biggest;
            biggest=arrayNumber[i];
        }
        else{
            if(arrayNumber[i]>secondBiggest){
                secondBiggest=arrayNumber[i];
            }
        }
    }
    console.log("second biggest number from array list is: "+secondBiggest);
}
findSecondBiggest([4,38,5,0,6,67])

//question 13
function printFibo(lengthForPrint,firstValue,secondValue){
    if(lengthForPrint==1){
        console.log(firstValue);

    }
    else{
        console.log(firstValue);
        console.log(secondValue);
    }
  
    for(let i=2;i<lengthForPrint;i++){
    let c=firstValue+secondValue;
    firstValue=secondValue;
    secondValue=c;
    console.log(secondValue);
    }

}
; printFibo(6,0,1);

//class
const sumArrays =function(){
   return Object.values(arguments).reduce((a,b)=>a+b);
}
console.log(sumArrays(1,2,3,4,5))


   

