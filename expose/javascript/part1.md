# Part 1. A Quick Introduction (Answers)

## var declaration

1. Answer: values added: 20 <br>
At first, it will look for the value of *add*, which in our case is equal to true. Since *add* = true, it creates a variable *result* equal to 0, and then adds *num1* and *num2* to the *result*, in this case being 10 + 10 = 20. Thus, line 9 will output the console log function, which will be *'values added: '* with the value of *result*.

2. Answer: final result: 20 <br>
Notice that for this code, we created result using var, and not let. Since var is *function scoped* and not block-scoped, the variable and value of *result* exists in the entire function for *sumValues*, even if *result* is just declared in the *if (add)* part. Thus, line 13 is going to output *'final results: '* with the value of *result*, which will still be 20.

3. Answer: As we saw in the second question, var is *function-scoped* instead of being block-scoped, which means that it can lead to unexpected access or overwriting of the variables, even if they're outside bracket blocks that require a condition to be first met, like the one in the code with *if(add)*. Instead of using *var*, we should use *let*, which also assigns variables that are *block-scoped*, meaning they exist inside the declared {} blocks.

4. Answer: values added: 20 <br>
The answer is similar to the answer for 1, since the *result* variable is stored inside the *if (add)* block. Thus, even if we changed the *result* variable from *var* to *let*, the *values added* line would still work as it did for the first question. Thus, it would output *'values added: '* with the value of *result*, which will again be 20.

5. Answer: ReferenceError: result is not defined <br>
We established that *let* is a block-scoped function, unlike *var*. This means that *result* only exists INSIDE the brackets of our *if (add)* block. This means that the code would not be able to output the final result, as the *result* variable does not exist outside of *if (add)*. Thus, the program would output an error code.

## const declaration

6. Answer: Code returns an error. <br>
The line *const result = 0;* establishes the variable *result* to be a constant. This means that it's values cannot be changed and WILL be 0 the entire time for the code. However, because the *result = num1 + num2* tries changing the value of *result* to be 20, it would lead to an error, as it's trying to change the value of a defined constant. Thus, it will output an error and it will never output line 9.

7. Answer: Code returns an error. <br>
We already mentioned in question 6 that the code would lead to an error, due to trying to change the value of a constant variable. Since the code would output an error due to line 7, it would not even be able to reach line 9, let alone line 13. Thus, it would return an error, much like the answer to question 6. 
