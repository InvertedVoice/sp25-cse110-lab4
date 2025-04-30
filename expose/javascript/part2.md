# Part2. A Little More of a Challenge... (Answers)

## discountprices functions

1. Answer: 3 <br>
In the *discountPrices* function, there is a *for* loop, which has a variable *i* that starts at 0, and every time the loop is performed whenever i is smaller than the array size of the prices, it is increased by 1. And note that the *i* is defined by a VAR, and not LET, which means that it is once again function-scoped, meaning the value of *i* will still exist outside of the loop. Since the size of the prices array is 3 [100, 200, 300], the loop will stop performing once i becomes 3. Thus, the loop will be performed 3 times, increasing the value of i by 1 a total of 3 times, which will give us a final value of i = 3.

2. Answer: 150 <br>
The line will print out the value of *discountedPrice*, which will be equal to "prices[2] * (1 - 0.5)", with prices[2] in this case being 300. Thus, final value will be "300 * (1-0.5) = 150".

3. Answer: 150 <br>
The line will print out the value of *finalPrice*, which will be equal to the rounded value of "discountedPrice * 100" with is then divided by 100. So in this case, we get "Math.round(150*100)/100 = 15000/100 = 150".

4. Answer: [50, 100, 150] <br>
This line basically shows you the value for *discounted* that we get from *finalPrice*, for every loop iteration. So it will print out discounted price of each value in the array and output it, which in this case is just [50, 100, 150].

5. Answer: Error <br>
Because we are creating an i variable using *let* instead of *var*, the variable i exists ONLY inside the loop code, which means that the console.log(i) is unable to find a variable *i*, giving us an error.

6. Answer: Error <br>
Because we are creating an discountedPrice variable using *let* instead of *var*, the variable exists ONLY inside the loop code, similar to question 5. Thus, console.log(discountPrice) will give us an error.

7. Answer: 150 <br>
Since finalPrice is in the scope, it is able to print the value of the variable, which in this case is 150 once again, similar to question 3. 

8. Answer: [50, 100, 150] <br>
Similar to question 7, discounted will still be part of the scope, so it is able to obtain the values of discounted, in this case being 50, 100, 150, same as in question 4.

9. Answer: Error <br>
Once again, because we are using *let* to creat the variable i, it only exists inside the scope of the loop function. Thus, the console.log(i) is unable to find the variable, giving us an error.

10. Answer: 3 <br>
prices.length is inside the scope of the console.log line, so it would be perfectly fine for output. In this case, it just looks at the size of the prices array and makes it the value for length, which is 3.

11. Answer: [50, 100, 150] <br>
In this case, discounted is a const *array*, which means while it cannot be changed from being an array, the values INSIDE the array can still be pushed. This means that we are able to add values inside the array itself, so the code would run as usual, and just like we saw in the previous questions. Once again, it would output [50, 100, 150].

## Data Types

12. Answers:
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

## Basic Operators and Type Conversion

13. Answers:
    A. '32', since '3' is a string, it converts 2 to a string as well, and adding them together makes 32. <br>
    B. 1, since we have a minus sign, it converts '3' into an int, giving us 3 - 2 = 1. <br>
    C. 3, since 3 is an int, we convert null into an int that is 0, giving us 3 + 0 = 3. <br>
    D. '3null', since '3' is a string, it turns null into a string as well, giving us '3null'. <br>
    E. 4, since we have an int 3, we convert true into an int value of 1, giving us 1 + 3 4. <br>
    F. 0, since the plus sign converts them both into ints, false becomes 0 and null becomes 0, giving us a total of 0. <br>
    G. '3undefined', since '3' is a string, it turns 'undefined' into a string as well, giving us '3undefined'.
    H. NaN, the minus sign converts '3' into a number 3, however, because undefined will be turned into a NaN, we will get a     result of NaN. <br>
14. 
15. Answer:
16. Answer:
17. Answer:

## Functions
18. Answer:

## setInteraval(), setTimeout(), clearTimeout()

19. Answer:
20. Answer:
