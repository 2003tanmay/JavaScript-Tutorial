/*********************JavaScript Execution Context ******************/

/*
When we create a file and click on run firstly "global execution context" made and we refer that into "this".
Different execution environment has different execution context. eg Browser has "window" bun, node dino has different GEC.
We have mainly 3 EC :-
1. Global EC
2. Function EC
3. Eval EC

Code is executed in 2 phase :-
1. Memory Creation Pahse => in this only the memory is allocated to the variables and all stuffs.
2. Execution Phase => in this code is executed.
*/

/******************** Example **************************/

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)

/*
1. Global Executon Context made and we refer this into "this" keyword.

2. Memory Phase
    val1 -> undefined
    val2 -> undefinec
    addNum -> defination of function
    result1 -> undefined
    result2 -> undefined

3. Execution Phase
    val1 <- 10
    val2 <- 5
    result1 <- addNum <- -------------------------
      ^                  | New Execution Context |
      |                  |  of addNum Function   |
      |                  | --------------------- |
      |                  |    new variable       |
      |                  |    environment        |
      |                  |        +              |
      |                  |     Execution         |
      |                  |      thread           |
      |                  -------------------------
      |                  1. Memory Phase of addNum
      |                         val1 -> undefined 
      |                         val2 -> undefined
      |                         total -> undefined
      |
      |                  2. Execution Context of addNum
      |                         num1 <- 10
      |                         num <- 5
      |                         total <- 15
      |
      |--------------------------addNum has return of total so valu of total return back to global execution context

                         3. Now new execution context get deleted
*/


/************************** CallStack ***********************/

// it is same as resursion call stack