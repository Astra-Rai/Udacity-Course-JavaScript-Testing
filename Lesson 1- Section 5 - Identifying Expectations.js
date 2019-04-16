//Udacity Course
//JavaScript Testing
//Lecsson 1, Section 5: Identifying Expectations

//function defined
function add(x,y){

  //return x + y
  return x + y;

}

//test function, output result to console
//add(2,3); // this is how function is called
//console.log(add(2,3)); // 5

/*
Code Testing | Expectations
1.) expect the add()function has been defined and already exists
2.) expect the function to accomplish task intended
example, if add(2,5) // 6, this does not accomplished
what's intended meaning code logic doesn't follow intention
3.) expect functin to be called in numbers, 
not string
example add('2','3');
the plus operator will concatenate 2 and 3, 23, not add it
typeof should be number not string, we have to test for this







*/