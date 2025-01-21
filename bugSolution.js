function foo(a, b) {
  //Explicit type checking and conversion
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b; 
  } else {
    return NaN; // Or throw an error for better error handling
  }
}

console.log(foo(1, '1')); // Output: NaN
console.log(foo(1,1)); // Output: 2