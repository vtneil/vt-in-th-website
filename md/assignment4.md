# Assignment 4: Branching (Loop & Iteration)

## About Assignment's Difficulty

* This assignment's difficulty level is around 1 and 3 💀, and 2 😈
  (above average, do-able).

* It will not be too hard for you to finish it in time and
  not too easy that it is not challenging.

* This assignment measures these concepts: range-based loop, nested loop.

* This assignment has 4.5 tasks, each has different difficulty level.
  I recommend you to do it in order of 1, 2, 3, 3.5, 4.

## Rules on Internet Searching for Fairness

You can use the internet to search for information you want.
You should not use the internet to find the solution to the assignment.

Try building up your base of knowledge a little by little.

**Please do it yourself or collaborate with your friends,
please don't look up for solutions on the internet.**

## On this Assignment

In Python, a list of a list can be referred as a matrix.

For example,

```python
mat = [ [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12] ]
```

is a 3 row by 4 column (3 x 4) matrix.

**In this assignment, inputs are guaranteed that they are valid matrices.**

**You can use WolframAlpha or matrix calculator to help testing your code.**

## Task 1: Matrix Addition (💀, 5 pts)

Write a function that adds 2 matrices (element-wise addition).

The function should input 2 matrices, then return a new matrix.

C = A + B.

If the dimension (row, column) of two matrices are not equal, the
matrices can't be added together, return an empty 2D list: `return [[]]`.

**Template (copy and fill code)**

```python
A = [ [-1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, -10, -11, 12] ]
      
B = [ [4, 4, 4, -4],
      [-5, -6, 6, 8],
      [9, 9, -11, 0] ]

# Your code begin

def add(matA, matB):
    ...
    
# Your code end

C = add(A, B)

for row in C:
    for col in row:
        print(col, end=' ')
    print()
```

**Examples of output when called the function**

```text
3 6 7 0
0 0 13 16
18 -1 -22 12
```

## Task 2: Matrix Transpose (💀💀, 10 pts)

Write a function that transposes the matrix, you should know what transposing is.
It is "flipping matrix by its diagonal" or "swapping row and column".

The function should input a matrix, then return a new transposed matrix.

**Template (copy and fill code)**

```python
A = [ [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12] ]

# Your code begin

def transpose(mat):
    ...
    
# Your code end

B = transpose(mat)

for row in B:
    for col in row:
        print(col, end=' ')
    print()
```

**Examples of output when called the function**

```text
1 5 9
2 6 10
3 7 11
4 8 12
```

## Task 3: Matrix Multiplication (💀💀💀, 15 pts)

Write a function that multiplies 2 matrices together.

The function should input 2 matrices, then return a new multiplied matrix.

Matrix C = AB: A and B can be multiplied if A's column equals B's row.

If two matrices cannot be multiplied, return an empty 2D list: `return [[]]`.

**Template (copy and fill code)**

```python
A = [ [1, 2, 3, 4],
      [5, 6, 7, 8] ]

B = [ [3, 3, 1],
      [-1, 2, 4],
      [5, 7, -1],
      [10, 5, 2] ]
        
# Your code begin

def matmul(matA, matB):
    ...
    
# Your code end

C = matmul(A, B)

for row in C:
    for col in row:
        print(col, end=' ')
    print()
```

**Examples of output when called the function**

```text
56 48 14
124 116 38
```

## Task 3.5: Power of Matrix (💀💀, 10 pts)

Write a function that multiplies the matrix *n* times.
The operation is also called matrix exponentiation.

The function should input a matrix, then return a new powered matrix.

Matrix B = A^*n*: A can be powered with scalar *n* if A is a square matrix.

If the matrix is not square, return an empty 2D list: `return [[]]`.

Use the function `matmul` from Task 3.

**Template (copy and fill code)**

```python
A = [ [1, -2, -3, 4],
      [-5, 6, -7, 8],
      [2, -1, 2, -1],
      [1, -1, 5, -3] ]
      
n = 5
        
# Your code begin

def matpow(mat, n):
    ...
    
# Your code end

B = matpow(A, n)

for row in B:
    for col in row:
        print(col, end=' ')
    print()
```

**Examples of output when called the function**

```text
5241 -6528 2983 -3582
-15593 19134 -6931 9020
4018 -4967 1788 -2291
3973 -4789 1637 -2187
```

## Task 4: Bubble Sort (😈😈, 10 pts)

Write a function that sort the input list by method called "Bubble Sorting".

**Bubble Sort** is the simplest sorting algorithm that works by repeatedly
swapping the adjacent elements if they are in the wrong order.

You can watch the animation here:
<a href="https://www.youtube.com/watch?v=9I2oOAr2okY">Click here</a>.

**DO NOT** use builtin `sorted(...)` or `.sort()` method.

**The function should return the new sorted list without modifying the input list.**

**Template (copy and fill code)**

```python
lst = [1, -2, -3, 4, 8, 9, 10, 15, 2, 1]
        
# Your code begin

def sort(inp):
    ...
    
# Your code end

s = sort(lst)

for e in lst:
    print(e, end=' ')
print('\n')

for e in s:
    print(e, end=' ')
```

**Examples of output when called the function**

```text
1 -2 -3 4 8 9 10 15 2 1

-3 -2 1 1 2 4 8 9 10 15
```
