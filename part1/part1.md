Part 1a
- 1: values added: 20
- 2: final result: 20
- 3: values added: 20
- 4: error. line 30 is outside of the if block, hence, result is not defined.
- 5: error. line 7 tries to modify a constant variable.
- 6: error. line 7 tries to modify a constant variable.
  
Part 1b
 - 1: It will print the value of `i` after the for loop to console, which is 3. 
 - 2: It will print the value of `discountedPrice` after the for loop to console, which is 150. 
 - 3: It will print the value of `finalPrice` after the for loop to console, which is also 150. 
 - 4: The function will return `[50,100,150]`, an array containing discounted prices by the input discount value. 
 - 5: error. line 12 tries to call `i`, but `i` is not defined outside of the for loop. 
 - 6: error. line 13 tries to call `discountedPrice`, but `discountedPrice` is undefined outside of the for loop. 
 - 7: error. line 14 tries to call `finalPrice`, but `finalPrice` is undefined outside of the for loop. 
 - 8: the function will still return `[50,100,150]`, an array containing discounted prices by the input discount value. Although discount is declared using `let`, it is inside the function block.
 - 9: error. line 11 tries to call `i`, but `i` is not defined outside of the for loop. 
 - 10: 3. Input array length is 3, and `length` is declared using `const`. Therefore, length will always be 3 and stay unchanged. 
 - 11: the function will still return `[50,100,150]`, an array containing discounted prices by the input discount value. Although `discountedPrice` is declared using `const`, every iteration a new `discountedPrice` is defined and pushed into `discount`. Therefore, it still functions correctly.
 - 12: 
