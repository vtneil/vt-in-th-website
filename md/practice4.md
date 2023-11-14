# Practice Problems for Week 4: Loop and Iteration

## Guide (Please read!!!)

There are 3+1 levels of difficulty of practice problems which will help
guide you on how you do the assignment. 1.-3. are mandatory. If it is too easy,
try speed-running the easy ones.

1. **Concept** (💀) will help you recheck yourself whether you understood the content.
2. **Apply** (💀💀) will step up some difficulty where you have to apply several concepts.
3. **Technique** (💀💀💀) is more challenging.
4. **Real-world Examples** (😈) are optional.

The problems will state inputs and outputs of the program.
Inputs and outputs can be more than one, one each, see examples for more details.

## Special instructions for this and further problems

Keep in mind that in Python, there is `print('x', end='')` which removes the newline character
when printing on the screen. Further problems may require that.

## Problems

### (💀) 1. Print from *m* to *n*

Write a program that prints integers from *m* to *n*

**Input:**

1. Integer *m*
2. Integer *n*

**Output:**

1. Integers from *m* to *n* separated by space

**Examples**

```text
Input:  4
        10
-----
Output: 4 5 6 7 8 9 10
```

### (💀) 2. Print capped

Write a program that prints *k* `*` characters per line with total of *n* `*`.

**Input:**

1. Integer *n*
2. Integer *k*

**Output:**

1. Stars (See examples)

**Examples**

```text
Input:  30
        8
-----
Output: * * * * * * * *
        * * * * * * * *
        * * * * * * * *
        * * * * * *

Because: print k stars per line with total of n stars
```

### (💀) 3. Sum until *n*

Write a program that finds maximum *k* such that sum of 1..*k* is strictly less than *n*.

**Input:**

1. Integer *n*

**Output:**

1. Integer *k*
2. Sum of 1..*k* (1 + 2 + 3 + ... + *k*)

**Examples**

```text
Input:  20
-----
Output: 5
        15
```

### (💀) 4. Is it prime?

A prime number *p* is a number that only *p* and 1 can divide while *p* > 1.
Write a program that check if the integer that user inputs is a prime or not.

**Input:**

1. Integer *n*

**Output:**

1. PRIME or NOT PRIME

**Examples**

```text
Input:  7
-----
Output: PRIME
```

### (💀) 5. Sum of *n* numbers as the user wishes

Write a program that takes *n* as an input. Then, for the next *n* lines,
user can input integer in each line. The program should output the sum of
that list of numbers by user.

**Input:**

1. Integer *n*
2. Next *n* lines: integers to be summed

**Output:**

1. Sum of those integers

**Examples**

```text
Input:  5
        2
        4
        5
        9
        9
-----
Output: 29
```

### (💀) 6. Multiplication Table

Write a program that prints the multiplication table of *n* from 1 to 12:

```text
n x 1 = ...

n x 2 = ...

...

n x 12 = ...
```

**Input:**

1. Integer *n*

**Output:**

1. Multiplication Table of *n*

**Examples**

```text
Input:  13
-----
Output: 13 x 1 = 13
        13 x 2 = 26
        13 x 3 = 39
        13 x 4 = 52
        13 x 5 = 65
        13 x 6 = 78
        13 x 7 = 91
        13 x 8 = 104
        13 x 9 = 117
        13 x 10 = 130
        13 x 11 = 143
        13 x 12 = 156
```

### (💀) 7. Find maximum and minimum

Write a program that takes *n* as an input. Then, for the next *n* lines,
user can input integer in each line. The program should output the max and min of
that list of numbers by user. Do it however you want to do.

**Input:**

1. Integer *n*
2. Next *n* lines: integers to be summed

**Output:**

1. Minimum number in the list
2. Maximum number in the list

**Examples**

```text
Input:  5
        4
        2
        5
        9
        9
-----
Output: 2
        9
```

### (💀) 8. Count Odd-even

Write a program that takes *n* as an input. Then, for the next *n* lines,
user can input integer in each line. The program should output the count of
odd numbers in the list.

**Input:**

1. Integer *n*
2. Next *n* lines: integers to be summed

**Output:**

1. Number of odd numbers

**Examples**

```text
Input:  5
        4
        2
        5
        8
        9
-----
Output: 2
```

### (💀) 9. Selected sum

Write a function that takes a list as a parameter, then returns a sum of
that list with condition that the number is even.

**Template (copy and fill code)**

```python
# Your code begin
def f(inp):
    ...
# Your code end

print(f([1, 2, 3, 4, 5, 6, 7]))
print(f([1, 1, 2, 3, 5, 8]))
print(f([]))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 12
        10
        0
```

### (💀💀) 10. Cycle the list

Write a function that takes a number *n* and a list as parameters.
The function shall cycle the first element to the back for *n* times.
The function should return the new list and should not change anything in
the list from parameter.

**Template (copy and fill code)**

```python
# Your code begin
x = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def f(n, inp):
    ...
# Your code end

print(f(0, x))
print(f(1, x))
print(f(3, x))

print(x)
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]  # cycle 0 times
        [2, 3, 4, 5, 6, 7, 8, 9, 1]  # cycle 1 times
        [4, 5, 6, 7, 8, 9, 1, 2, 3]  # cycle 3 times
        [1, 2, 3, 4, 5, 6, 7, 8, 9]  # print x
```

### (💀💀) 11. Split the list

Write a function that takes a list as a parameter.
The function shall split the list into 3 lists.
Each result list will have the member from the original list every 3 members.
See examples for more details.

E.g.,

```python
list1 = [x[0], x[3], x[6], ...]
list2 = [x[1], x[4], x[7], ...]
list3 = [x[2], x[5], x[8], ...]
```

**Template (copy and fill code)**

```python
# Your code begin
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def f(inp):
    list1 = []
    list2 = []
    list3 = []

    ...
    
    return list1, list2, list3
# Your code end

for e in f(x):
    print(e)
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: [1, 4, 7, 10]
        [2, 5, 8]
        [3, 6, 9]
```

### (💀) 12. Factorial

Write a *n* factorial function.

**Template (copy and fill code)**

```python
# Your code begin

def factorial(n):
    ...

# Your code end

print(factorial(0))
print(factorial(3))
print(factorial(5))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 1
        6
        120
```

### (💀💀) 13. Binomial Coefficient

Write a program that print binomial coefficients of order *n*.

Lookup on how you can use combinatorial formula to calculate the coefficient.

Use the factorial function from the problem above.

**Input:**

1. Integer *n*

**Output:**

1. Binomial coefficients of order *n*

**Examples**

```text
Input:  1
-----
Output: 1 1

=====

Input:  2
-----
Output: 1 2 1

=====

Input:  3
-----
Output: 1 3 3 1

=====

Input:  5
-----
Output: 1 5 10 10 5 1

=====

Input:  0
-----
Output: 1
```

### (💀) 14. Print Square *n*

Write a program that prints a square dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Square

**Examples**

```text
Input:  5
-----
Output: * * * * *
        * * * * *
        * * * * *
        * * * * *
        * * * * *
```

### (💀) 15. Print Rectangle *m* x *n*

Write a program that prints a rectangle dimension *m* x *n* from stars `*`.

**Input:**

1. Integer *m* (width)
2. Integer *n* (height)

**Output:**

1. Rectangle

**Examples**

```text
Input:  7
        3
-----
Output: * * * * * * *
        * * * * * * *
        * * * * * * *
```

### (💀) 16. Print Symmetrical Triangle *n*

Write a program that prints a triangle dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: *
        * *
        * * *
        * * * *
        * * * * *
```

### (💀) 17. Print Upside-down Symmetrical Triangle *n*

Write a program that prints a triangle dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Upside down Triangle

**Examples**

```text
Input:  5
-----
Output: * * * * *
        * * * *
        * * *
        * *
        *
```

### (💀) 18. Print Symmetrical Triangle *n* with column number

Write a program that prints a triangle dimension *n* x *n* from column number.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: 1
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5
```

### (💀) 19. Print Symmetrical Triangle *n* with row number

Write a program that prints a triangle dimension *n* x *n* from row number.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: 1
        2 2
        3 3 3
        4 4 4 4
        5 5 5 5 5
```

### (💀) 20. Print Symmetrical Triangle *n* with increasing number

Write a program that prints a triangle dimension *n* x *n* from increasing number.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: 1
        2 3
        4 5 6
        7 8 9 10
        11 12 13 14
```

### (💀) 21. Print Double Triangle

Write a program that prints a triangle with stars `*`. (See examples.)

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: *
        * *
        * * *
        * * * *
        * * * * *
        * * * *
        * * *
        * *
        *
```

### (💀) 22. Print Symmetrical Triangle (Flipped) *n*

Write a program that prints a flipped triangle dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output:         *
              * *
            * * *
          * * * *
        * * * * *
```

Hint: try replacing space `' '` with `'-'` so you can see what's going on.

### (💀) 23. Print Symmetrical Triangle (Flipped) *n* with numbers

Write a program that prints a triangle with numbers. (See examples.)

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  4
-----
Output: 1
        2 3
        4 5 6
        7 8 9 10
        9 8 7
        6 5
        4
```

### (💀) 24. Print Hollow Square *n*

Write a program that prints a hollow square dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Hollow Square

**Examples**

```text
Input:  5
-----
Output: * * * * *
        *       *
        *       *
        *       *
        * * * * *
```

### (💀) 25. Print Hollow Symmetrical Triangle *n*

Write a program that prints a hollow triangle dimension *n* x *n* from stars `*`.

**Input:**

1. Integer *n*

**Output:**

1. Hollow Triangle

**Examples**

```text
Input:  5
-----
Output: *
        * *
        *   *
        *     *
        * * * * *
```

### (💀) 26. Print Diamond

Write a program that prints a diamond with stars `*`. (See examples.)

**Input:**

1. Integer *n*

**Output:**

1. Diamond

**Examples**

```text
Input:  4
-----
Output:       *
            * * *
          * * * * *
        * * * * * * *
          * * * * *
            * * *
              *
```

### (💀💀) 27. Print X

Write a program that prints an X with stars `*`. (See examples.)

**Input:**

1. Integer *n*

**Output:**

1. X

**Examples**

```text
Input:  4
-----
Output: *           *
          *       *
            *   *
              *
            *   *
          *       *
        *           *
```

### (💀💀) 28. Print Pyramid

Write a program that prints a pyramid with stars `*`. (See examples.)

**Input:**

1. Integer *n*

**Output:**

1. Pyramid

**Examples**

```text
Input:  4
-----
Output:    * 
          * * 
         * * * 
        * * * *
```

### (💀) 29. Harmonic sum *n*

Write a program that finds the harmonic sum 1..*n*.

**Input:**

1. Integer *n*

**Output:**

1. Harmonic sum of 1..*n* (1/1 + 1/2 + 1/3 + ... + 1/*n*)

**Examples**

```text
Input:  5
-----
Output: 2.283333333333333
```

### (💀) 30. Print Symmetrical Triangle *n* with alternating binary

Write a program that prints a triangle dimension *n* x *n* from binary.

The leftmost element is always 1.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: 1
        0 1
        1 0 1
        0 1 0 1
        1 0 1 0 1
```

### (💀) 31. Series sum

Write a program that finds the series sum of 1 + 11 + 111 + 1111 + ... ; *n* terms.

**Input:**

1. Integer *n*

**Output:**

1. Series sum

**Examples**

```text
Input:  5
-----
Output: 12345

Because 1 + 11 + 111 + 1111 + 11111
```

### (💀) 32. Perfect Square

Write a program that check if the number *n* is the perfect square or not.

**Input:**

1. Integer *n*

**Output:**

1. YES or NO

**Examples**

```text
Input:  88
-----
Output: NO

Because 88 is not a perfect square.
```

### (🍍) 33. Fibonacci Sequence

Write a program that print first *n* Fibonacci numbers.

Fibonacci sequences can be defined as:

`F(n) = F(n - 1) + F(n - 2); F(0) = 1, F(1) = 1, n >= 0 and is integer.`

**Input:**

1. Integer *n*

**Output:**

1. Fibonacci sequence

**Examples**

```text
Input:  8
-----
Output: 1 1 2 3 5 8 13 21
```

### (💀💀) 34. Print Symmetrical Triangle *n* from alphabets

Write a program that prints a triangle dimension *n* x *n* from alphabets.

**Input:**

1. Integer *n*

**Output:**

1. Triangle

**Examples**

```text
Input:  5
-----
Output: A
        A B
        A B C
        A B C D
        A B C D E
```

### (💀💀💀) 35. GCD

Write a program that find the Greatest Common Divisor (GCD) of two integers.

**Input:**

1. Integer *a*
2. Integer *b*

**Output:**

1. GCD(a, b)

**Examples**

```text
Input:  6
        21
-----
Output: 3

=====

Input:  6
        5
-----
Output: 1

=====

Input:  20000
        20002
-----
Output: 2
```

### (💀💀💀) 36. List Sliding

Write a function that takes a list as a parameter.
The function shall return the maximum sum of 3 consecutive numbers in the list.

**Explanation**

```text
[1, 2, 3, 4, 5, 6, 7, 8, 99, 10, 11, 12, 13]
 ~~~~~~~        -> 1 + 2 + 3 = 6
    ~~~~~~~     -> 2 + 3 + 4 = 9
       ~~~~~~~  -> 3 + 4 + 5 = 12
 ...
```

**Template (copy and fill code)**

```python
# Your code begin
x = [1, 2, 3, 4, 5, 6, 7, 8, 99, 10, 11, 12, 13]
y = [1, 1, 1, 1, 1, 1, 1]

def f(inp):
    ...
# Your code end

print(f(x))
print(f(y))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 120      # 99 + 10 + 11 is maximum
        3        # 1 + 1 + 1 is maximum
```

### (💀💀) 37. Pair Sum

Write a function that takes a list as a parameter.
The function shall return the maximum sum of 2 numbers from the list.

E.g., the list `[1, 2, 3, 4]` can have a pair sum of:

```text
1 + 2
1 + 3
1 + 4
2 + 3
2 + 4
3 + 4
```

**Template (copy and fill code)**

```python
# Your code begin
x = [1, 2, 3, 4, 5, 6, 7, 8, 99, 10, 11, 12, 13]
y = [1, 1, 1, 1, 1, 1, 1]

def f(inp):
    ...
# Your code end

print(f(x))
print(f(y))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 112      # 99 + 13 is maximum
        2        # 1 + 1 is maximum
```

### (💀💀💀) 38. Value Pairs

Write a function that takes 2 lists as parameters.
The function shall **print** every combination of cartesian product of
`list1` X `list2`.

**Explanation**

```text
list1 = [1, 2, 3]
list2 = [a, b]

The function should print:
1 a
1 b
2 a
2 b
3 a
3 b

```

**Template (copy and fill code)**

```python
x = [1, 2, 3]
y = [8, 9, 0]

# Your code begin

def f(list1, list2):
    ...
# Your code end

f(x, y)
```

**Input:**

1. None

**Output:**

1. Next `len(list1) * len(list2)` lines: Cartesian product's elements in each line

**Examples**

```text
Input:  -
-----
Output: 1 8
        1 9
        1 0
        2 8
        2 9
        2 0
        3 8
        3 9
        3 0
```

### (😈😈😈) 39. Closest distance

Write a program that finds a pair of coordinates that are closest to each other.

**Template (copy and fill code)**

```python
n = int(input())
coords = [list(map(float, input().strip().split())) for i in range(n)]

# Your code begin

...

# Your code end
```

Tips: You can iterate through 2 values at the same time in for loop:

```python
for x, y in coords:
    # you can use value x and y here now.
```

Tips: You can iterate through value in the list and counting at the same time in for loop with `enumerate`:

```python
for i, x in enumerate(inp):
    # i will be the index 0, 1, 2, ... , len(inp)-1
    # x will be the value in inp list
```

Tips: Combining with above two, you get:

```python
for i, (x, y) in enumerate(coords):
    # i will be the index 0, 1, 2, ... , len(inp)-1
    # you can use value x and y here now.
```

**Input:**

1. Integer *n* indicating number of coordinates
2. Next *n* lines: coordinate x, y separated by space.

**Output:**

1. (x1, y1) (x2, y2) that are closest to each other
2. distance between those two coordinates

**Examples**

```text
Input:  3
        3.0 4.0
        9.4 5.5
        6.7 -10.9
-----
Output: (3.0, 4.0) (9.4, 5.5)
        6.573431371817919
```

### (😈😈) 40. Collatz Conjecture

Write a function that prints a sequence satisfying Collatz Conjecture.

<a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Read more about this on Wikipedia</a>

In short, it is defined as:
<img src="files/collatzeq.png">

**Template (copy and fill code)**

Do it on your own.

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  12
-----
Output: 12 6 3 10 5 16 8 4 2 1
```

### (💀💀) 41. Insert Sorted

Write a function that takes a list and an element *k* to be inserted as parameters.
The function will insert an element into the list without returning anything.
The order of list after insertion will be sorted in ascending order.

**Explanation**

```python
list1 = []

insert(list1, 5)  # list1 becomes [5]
insert(list1, 9)  # list1 becomes [5, 9]
insert(list1, 10)  # list1 becomes [5, 9, 10]
insert(list1, 10)  # list1 becomes [5, 9, 10, 10]
insert(list1, 2)  # list1 becomes [2, 5, 9, 10, 10]
insert(list1, 3)  # list1 becomes [2, 3, 5, 9, 10, 10]
```

**Template (copy and fill code)**

```python
x = []

# Your code begin

def insert(list1, k):
    ...

# Your code end

print(x)
for e in [5, 9, 10, 10, 2, 3]:
    f(x, e)
    print(x)
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: []
        [5]
        [5, 9]
        [5, 9, 10]
        [5, 9, 10, 10]
        [2, 5, 9, 10, 10]
        [2, 3, 5, 9, 10, 10]
```

### (💀) 42. Insert if not exist

Write a function that takes a list and an element *k* to be inserted as parameters.
The function will insert an element into the list without returning anything.
If *k* already exists, in the list, the function should not do anything.

In Python, you can use expression `x in y` to check if an
element `x` is in the collection `y` or not. This expression is either
`True` or `False`.

**Explanation**

```python
list1 = []

insert(list1, 5)  # list1 becomes [5]
insert(list1, 9)  # list1 becomes [5, 9]
insert(list1, 10)  # list1 becomes [5, 9, 10]
insert(list1, 10)  # list1 becomes [5, 9, 10]
insert(list1, 2)  # list1 becomes [5, 9, 10, 2]
insert(list1, 3)  # list1 becomes [5, 9, 10, 2, 3]
insert(list1, 3)  # list1 becomes [5, 9, 10, 2, 3]
```

**Template (copy and fill code)**

```python
x = []

# Your code begin

def insert(list1, k):
    ...

# Your code end

print(x)
for e in [5, 9, 10, 10, 2, 3, 3]:
    f(x, e)
    print(x)
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: []
        [5]
        [5, 9]
        [5, 9, 10]
        [5, 9, 10]
        [5, 9, 10, 2]
        [5, 9, 10, 2, 3]
        [5, 9, 10, 2, 3]
```
