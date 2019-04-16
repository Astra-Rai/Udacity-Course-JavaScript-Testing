//Udacity Course
//JavaScript Testing
//Lecsson 1, Section 6: Defining Expectations

//function defined
function add(x,y){
 //return x + y
  return x + y;

}

//test function, output result to console
//add(2,3); // this is how function is called
//console.log(add(2,3)); // 5

/*
Code Testing | Defining Expectations

1.) Expect 2  + 3 = 5

2.) Expect error if non-numbers are used

3.) Expect 0.1 + 0.2 = 0.3


*/

//console.log(add (0.1, 0.2)); //expected 0.3
//output actuall is: 0.30000000000000004
//error relates to how computers perform floating point math
//read this for more information: https://stackoverflow.com/questions/588004/is-floating-point-math-broken
//defined expectation #3, test fails
//definitive proof that functionis not working correctly
//failing of test is corrected in Lesson 1 Section 7