
//Udacity Course
//JavaScript Testing
//Lecsson 1, Section 6: Refactoring add function

function add(x,y){
  return x + y;
}
//call function, pass arguments 2 and 5
add(2,3) ;

//print result to console
//console.log(add(2,5));

/*Expectations

1.) Expect, 2 + 3 = 5
2.) Expect, error
3.  Expect, 0.1 + 0.2 = 0.3 

Tests for Expectations
function add(x,y){
  var result =5;
    //test to check if parameter enter is data type number
  if(typeof x && typeof y) ! =='number'{
  //if data type for parameter isn't a number, throw error
  throw new Error('Params must be a number');
  } 
  //test if 2 + 3 = 5
  result = x + y;
  //test for floating point and rounds it to tenth decimal point using toFixed method
  if parseInt(result)! == result{
  result = parseFloat(result.toFixed(1));
  } 
    return result;
}
console.log(add(2,3));


*/