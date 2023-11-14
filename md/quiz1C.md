# Quiz 1 Part C (80 pts)

<hr>

## README FIRST

### For each example of each question you will be given the following format:

**Example Format**

```text
--- Input ----
<Exact Input>
--- Output ---
<Exact Output>
```

**Example: Addition Program**

```text
--- Input ----
3
7
--- Output ---
10
```

**Code for Addition Program**

```python
# Python
a, b = int(input()), int(input())
print(a + b)
```

### Some question, there may be a template for you. Copy and paste it, then write your code in there.

<hr>

## For Part C

In Python, a list of a list can be referred as a 2D matrix.

For example,

```python
mat = [ [1,  2,  3,  4],
        [5,  6,  7,  8],
        [9, 10, 11, 12] ]
```

is a 3 row by 4 column (3 x 4) matrix.

If you want to get the first row:

```python
r = mat[0]  # [1, 2, 3, 4]
```

If you want to get the element in the second row, third column:

```python
v = mat[1][2]  # 7
```

## 1. (20 pts) Find Duplicates

Write a function that takes in a list of integers `x` and returns True if
the list contains any values that appear more than once (duplicates), otherwise returns False.

For example, `[1, 2, 3, 4, 5]` doesn't have duplicates, but `[1, 5, 5, 3, 4]` has a duplicate: `5`.

**Template (Copy and paste)**

```python
# Template for Q1C 1
# Do not change anything else!

def check_dupe(x):
    # write your code here
    
    return False

exec(input().strip())
```

## 2. (20 pts) Flatten

Write a function that "flatten" a list.

For example, we have a matrix:

```python
A = [ [1,  2,  3,  4],
      [5,  6,  7,  8],
      [9, 10, 11, 12] ]
```

After we apply the function `flatten(mat)`, we get:

```python
flatten(A) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

**Template (Copy and paste)**

```python
# Template for Q1C 2
# Do not change anything else!

def flatten(A):
    v = []
    
    # write your code here
    
    return v

exec(input().strip())
```

which turns a 2D matrix into 1D list (a vector).

## 3. (40 pts, KOUEN) Kronecker Product

Write a function that 2 matrices as inputs and compute their "Kronecker Product."

https://en.wikipedia.org/wiki/Kronecker_product

Examples:

![Kronecker Product Example](/md/assets/kronecker1.svg)
![Kronecker Product Example](/md/assets/kronecker2.svg)

The dimension of 2 matrices can be anything from 1 x 1 to *m* x *n* and does not have to be
equal like in matrix multiplication.

Hint: Flatten

**Template (Copy and paste)**

```python
# Template for Q1C 3
# Do not change anything else!

def kronecker(A, B):
    C = [[]]
    
    # write your code here
    
    return C

exec(input().strip())
```
