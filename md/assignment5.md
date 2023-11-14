# Assignment 5: Multidimensional Lists

This assignment is about matrices represented by lists of lists in Python.
Your tasks are to solve the following problems about matrices.

## 0. Get the Diagonal

Write a function that returns a list of the
[main diagonal](https://en.wikipedia.org/wiki/Main_diagonal) of a rectangular matrix.

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

Do not modify the input matrix.

The function should return a new list.

**Template (copy and fill code)**

```python
# Your code begin

def diagonal(A):
    return []

# Your code end
```

**Example**
```text
# Input
A = [[1, 2],
     [3, 4],
     [5, 6],
     [7, 8]]

# Output
[1, 4]
```

```text
# Input
A = [[ 1,  2,  3,  4],
     [ 5,  6,  7,  8],
     [ 9, 10, 11, 12],
     [13, 14, 15, 16]]

# Output
[1, 6, 11, 16]
```

```text
# Input
A = [[ 1,  2,  3,  4],
     [ 5,  6,  7,  8],
     [ 9, 10, 11, 12]]

# Output
[1, 6, 11]
```

## 1. Geometrical Rotate

Write a function that rotates a matrix counterclockwise.

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

Do not modify the input matrix.

The function should return a new matrix.

**Template (copy and fill code)**

```python
# Your code begin

def rotate(A):
    return [[]]

# Your code end
```

**Example**
```text
# Input
A = [[1, 2],
     [3, 4],
     [5, 6],
     [7, 8]]

# Output
[[2, 4, 6, 8],
 [1, 3, 5, 7]]
```

## 2. To the Diagonal

Write a function that "sends" values down the [main diagonal](https://en.wikipedia.org/wiki/Main_diagonal) one step.

In another meaning, sends values in the first row and first column to the last row and last column.

The matrix in this problem is always a square matrix, including empty matrix `[[]]`.

Do not modify the input matrix.

The function should return a new matrix.

**Template (copy and fill code)**

```python
# Your code begin

def send(A):
    return [[]]

# Your code end
```

**Example**
```text
# Input
A = [[ 1,  2,  3,  4],
     [ 5,  6,  7,  8],
     [ 9, 10, 11, 12],
     [13, 14, 15, 16]]

# Output
[[ 6,  7,  8,  4],
 [10, 11, 12,  3],
 [14, 15, 16,  2],
 [13,  9,  5,  1]]
```

## 3. Reshape

Write a function that reshape the matrix `A` from *m* by *n* to *p* by *q*.

Note that *m* x *n* always equals *p* x *q*.

For example, you can convert matrix of size 3 x 4 to 6 x 2.

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

Do not modify the input matrix.

The function should return a new matrix.

**Template (copy and fill code)**

```python
# Your code begin

def reshape(A, p, q):
    return [[]]

# Your code end
```

**Example**
```text
# Input
A = [[ 1,  2,  3,  4],
     [ 5,  6,  7,  8],
     [ 9, 10, 11, 12]]

p = 6
q = 2

# Output
[[ 1,  2],
 [ 3,  4],
 [ 5,  6],
 [ 7,  8],
 [ 9, 10],
 [11, 12]]
```

## 4. Merge Matrices

Write a function that merges matrices `A`, `B`, `C` and `D` into one matrix.

![Merge Matrix](/md/assets/assignment5/eqn_merge_mat.svg)

Note that

1. *row(A) = row(B)*, 
2. *row(C) = row(D)*, 
3. *col(A) = col(C)*, and 
4. *col(B) = col(D)*

so that it is merge-able (you don't have to check).

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

Do not modify the input matrix.

The function should return a new matrix.

**Template (copy and fill code)**

```python
# Your code begin

def merge(A, B, C, D):
    return [[]]

# Your code end
```

**Example (Text)**
```text
# Input
A = [[ 1,  2,  3],
     [ 4,  5,  6]]

B = [[ 95],
     [ 30]]
     
C = [[ 9,  8,  7],
     [ 1,  1,  1],
     [ 0,  0,  0]]

D = [[ -1],
     [ -2],
     [ -3]]

# Output
[[ 1,  2,  3, 95],
 [ 4,  5,  6, 30],
 [ 9,  8,  7, -1],
 [ 1,  1,  1, -2],
 [ 0,  0,  0, -3]]
```

**Example (Graphical)**

![A](/md/assets/assignment5/A.svg)

![A](/md/assets/assignment5/B.svg)

![A](/md/assets/assignment5/C.svg)

![A](/md/assets/assignment5/D.svg)

![A](/md/assets/assignment5/G.svg)

## 5. Symmetric Matrix

Write a function that checks if a matrix is [Symmetric](https://en.wikipedia.org/wiki/Symmetric_matrix), 
[Antisymmetric](https://en.wikipedia.org/wiki/Skew-symmetric_matrix), or neither.

Returns
* `0` if the matrix is symmetric.
* `1` if the matrix is antisymmetric.
* `2` if the matrix is neither symmetric nor antisymmetric.

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

**Template (copy and fill code)**

```python
# Your code begin

def is_symmetric(A):
    return 0

# Your code end
```

**Examples**
```text
# Input
A = [[ 1,  2,  3,  4],
     [ 5,  6,  7,  8],
     [ 9, 10, 11, 12]]

# Output
2

# Explanation
A is 3 rows and 4 columns, which are not equal.
```

```text
# Input
A = [[ 1,  2,  3],
     [ 2,  6,  7],
     [ 3,  7, 11]]

# Output
0

# Explanation
A is symmetric.
```

```text
# Input
A = [[ 1,  2, -3],
     [-2,  6,  7],
     [ 3, -7, 11]]

# Output
1

# Explanation
A is antisymmetric.
```

## 6. Valid Sudoku

Given a sudoku board represented by a 9 x 9 matrix (list of lists).

Write a function that checks if the board is valid or not. 
If so, return `True`, else return `False`.

The board's properties are thr following:
1. Valid boards may not be solvable.
2. Board's square can be filled with a number `1-9`.
3. Board's square is empty if the value in `board[i][j] == 0`.

The board is valid if all these conditions are met:
1. Each row must contain the digits `1-9` without repetition. 
2. Each column must contain the digits `1-9` without repetition. 
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits `1-9` without repetition.

The matrix in this problem can be any valid matrix, including empty matrix `[[]]`.

**Template (copy and fill code)**

```python
# Your code begin

def is_valid(board):
    return False

# Your code end
```

**Examples**
```text
# Input
board = [[5, 3, 0, 0, 7, 0, 0, 0, 0], 
         [6, 0, 0, 1, 9, 5, 0, 0, 0], 
         [0, 9, 8, 0, 0, 0, 0, 6, 0], 
         [8, 0, 0, 0, 6, 0, 0, 0, 3], 
         [4, 0, 0, 8, 0, 3, 0, 0, 1], 
         [7, 0, 0, 0, 2, 0, 0, 0, 6], 
         [0, 6, 0, 0, 0, 0, 2, 8, 0], 
         [0, 0, 0, 4, 1, 9, 0, 0, 5], 
         [0, 0, 0, 0, 8, 0, 0, 7, 9]]

# Output
True
```

```text
# Input
board = [[8, 3, 0, 0, 7, 0, 0, 0, 0], 
         [6, 0, 0, 1, 9, 5, 0, 0, 0], 
         [0, 9, 8, 0, 0, 0, 0, 6, 0], 
         [8, 0, 0, 0, 6, 0, 0, 0, 3], 
         [4, 0, 0, 8, 0, 3, 0, 0, 1], 
         [7, 0, 0, 0, 2, 0, 0, 0, 6], 
         [0, 6, 0, 0, 0, 0, 2, 8, 0], 
         [0, 0, 0, 4, 1, 9, 0, 0, 5], 
         [0, 0, 0, 0, 8, 0, 0, 7, 9]]

# Output
False

# Explanation
There are two 8's in a sub-box.
There are two 8's in the first column.
```
