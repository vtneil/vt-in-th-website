# Practice Problems for Week 3: Branching (Conditional Statements)

## Guide (Please read!!!)

There are 3 levels of difficulty of practice problems which will help
guide you on how you do the assignment.

1. Concept (★☆☆) will help you recheck yourself whether you understood the content.
2. Apply (★★☆) will step up some difficulty where you have to apply several concepts.
3. Technique (★★★) is more challenging.

The problems will state inputs and outputs of the program.
Inputs and outputs can be more than one, one each, see examples for more details.

## Problems

### (★☆☆) 1. Odd-Even

Write a program that checks whether an integer is odd or even.

**Input:**

1. An integer `n`

**Output:**

1. **Odd** or **Even**

**Examples**

```text
Input:  0
-----
Output: Even
=====

Input:  -999999
-----
Output: Odd
```

### (★☆☆) 2. Absolute Value

Write a program that output the absolute value of an input number
<ins>**without**</ins> using Python's builtin `abs(...)` function.

Absolute value is defined by:

<img src="../teachings/comp101/practice3/files/absolute_value.svg" alt="Definition of Absolute Value">

**Input:**

1. A number `x`

**Output:**

1. An absolute value of a number `x`

**Examples**

```text
Input:  -234324.55
-----
Output: 234324.55
```

### (★☆☆) 3. Divisible? *(1. revised)*

Write a program that check whether the integer `a` is divisible by `b` (*b* | *a*) by
outputting a **Yes** or a **No**.

E.g., 25 is divisible by 5, 36 is not divisible by 7.

Hint: Divisible means that when divides, the remainder is zero,
what arithmetic operation finds the remainder?

**Input:**

1. Non-negative integer `a`
2. An integer `b`

**Output:**

1. Is *b* | *a*?: **Yes** or **No** but if `b == 0`, display **Zero Division**

**Examples**

```text
Input:  45
        9
-----
Output: Yes
=====

Input:  45
        7
-----
Output: No
```

### (★☆☆) 4. BMI (revised)

Write a BMI calculator program which prompt
user to input their height and weight.

First, the program will ask the user **"Enter your height in meters: "**.

Second, the program will ask the user **"Enter your weight in kg: "**.

Then, the program will show **"Your BMI is: "** followed by BMI index.

The BMI of a person can be calculated using formula `weight / (height ** 2)`

Then, the program shall input whether the user is underweight, normal, overweight, or obese.

**Ranges of BMI values corresponding to result**
<table>
    <tr>
        <th>BMI Range</th>
        <th>Print these results</th>
    </tr>
    <tr>
        <td>< 18.5</td>
        <td>Underweight</td>
    </tr>
    <tr>
        <td>18.5 - 24.9</td>
        <td>Normal weight</td>
    </tr>
    <tr>
        <td>25.0 - 29.9</td>
        <td>Overweight</td>
    </tr>
    <tr>
        <td>>= 30</td>
        <td>Obese</td>
    </tr>
</table>

**Input:**

1. Height in meters
2. Weight in kg

**Output:**

1. BMI Index (2 decimal points: use builtin `round(number, dec)`)
2. Result of BMI calculation

**Examples**

```text
Input:  1.76
        55.62
-----
Output: 17.96
        Underweight
```

### (★☆☆) 5. Attendance Check

Write a program that check whether the student is allowed to sit in exam
based on percentage of attendance of that student.

If student attend `x` classes out of `y` classes, the student can
sit in the exam if and only if `x / y >= 75%`

**Input:**

1. Number of classes student attend `x`
2. Number of classes in total `y`

**Output:**

1. **Yes** or **No**

**Examples**

```text
Input:  5
        7
-----
Output: No
=====

Input:  8
        10
-----
Output: Yes
```

### (★☆☆) 6. Attendance Check but I'm sick!

Modify Question 5. to allow the student to sit in the exam if they have
medical causes.

**Input:**

1. Does student have medical causes? Input **Yes** or **No**
2. Number of classes student attend `x`
3. Number of classes in total `y`

**Output:**

1. **Yes** or **No**

**Examples**

```text
Input:  Yes
        5
        7
-----
Output: Yes
=====

Input:  No
        8
        10
-----
Output: Yes
```

### (★☆☆) 7. Grading

In most schools and institutions, grade is calculated by
classifying ranges of score. Write a program that calculate
the grade of the user based on their score out of 100.

**Grading Criteria**
<table>
    <tr>
        <th>Score</th>
        <th>Letter Grade</th>
    </tr>
    <tr>
        <td>> 100</td>
        <td>ERROR</td>
    </tr>
    <tr>
        <td>80 - 100</td>
        <td>A</td>
    </tr>
    <tr>
        <td>70 - 79</td>
        <td>B</td>
    </tr>
    <tr>
        <td>60 - 69</td>
        <td>C</td>
    </tr>
    <tr>
        <td>50 - 59</td>
        <td>D</td>
    </tr>
    <tr>
        <td>0 - 49</td>
        <td>F</td>
    </tr>
    <tr>
        <td>< 0</td>
        <td>ERROR</td>
    </tr>
</table>

**Input:**

1. Score in number format `a`

**Output:**

1. Letter grade according to the criteria

**Examples**

```text
Input:  59.5
-----
Output: D
```

Tips: Floor the input into integer first (See `floor(...)`).

### (★☆☆) 9. Life without `max(...)`

Write a function that find the maximum of two numbers
without using builtin `max(...)` function.

**Template (copy and fill code)**

```python
# Your code begin
def f(x, y):
    ...
# Your code end

print(f(50, 10))
print(f(10, 50))
print(f(10, 10))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 50
        50
        10
```

### (★☆☆) 10. Life without `max(...)` with a catch

Write a function that find the maximum of two numbers
without using builtin `max(...)` function.

**Maximum means "Magnitude" of the Numbers**
If the magnitudes of two numbers are equal, display the positive number.

**Template (copy and fill code)**

```python
# Your code begin
def f(x, y):
    ...
# Your code end

print(f(-50, 10))
print(f(-10, -50))
print(f(10, -10))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: -50
        -50
        10
```

### (★☆☆) 11. Life without `max(...)` with catch*ES*

Write a function that find the maximum of three numbers
without using builtin `max(...)` function.

**Template (copy and fill code)**

```python
# Your code begin
def f(x, y, z):
    ...
# Your code end

print(f(-50, 10, 30))
print(f(-10, 40, 9))
print(f(10, -10, 0))
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 30
        40
        10
```

### (★★☆) 12. Odd-Even (revised)

Write a function that check if the input `x` is even or odd or invalid

The input is valid if it is integer.
The input is invalid if it is other than integer, e.g., string, float, etc.

* If it is invalid, output -1.
* If it is even, output 0.
* If it is odd, output 1.

Tips: Try using builtin `isinstance(i, int)` to check whether `i` is integer or not.

**Template (copy and fill code)**

```python
# Your code begin
def f(x):
    ...
# Your code end

print(f(50))
print(f(-99))
print(f('79'))
print(f(33.45))
print(f(33.0))  # Tricky, huh?
```

**Input:**

1. None

**Output:**

1. None

**Examples**

```text
Input:  -
-----
Output: 0
        1
        -1
        -1
        1
```

Hint: For the last case or any cases that the input `x` is float,
try `x % 1` and see what happens.

### (★★★) 13. Leap Year?

Write a program that check whether the year is the leap year.

A leap year is exactly divisible by 4 except for century years (years ending with 00).
The century year is a leap year only if it is perfectly divisible by 400.

For example,

* 2017 is not a leap year
* 1900 is a not leap year
* 2012 is a leap year
* 2000 is a leap year

**Input:**

1. Year `year` (in A.D. format, e.g., 2020, 2023, ...)

**Output:**

1. **`year` is a leap year** or **`year` is not a leap year**

**Examples**

```text
Input:  1904
-----
Output: 1904 is a leap year
```

### (★★★) 14. ATM Machine 1

Write a program that calculate types of banknote that will be output
based on amount of money that user inputs.

This ATM has these banknote: *1000*, *500*, *100*, *50*, *1*

**Input:**

1. Amount of money in positive integer `n`

**Output:**

1. Amount of each banknote (see examples for more details)

**Examples**

```text
Input:  2670
-----
Output: 1000 -> 2
        500  -> 1
        100  -> 1
        50   -> 1
        1    -> 20
        
Because 1000*2 + 500*1 + 100*1 + 50*1 + 1*20 == 2670.
```

### (★★★) 15. ATM Machine 2

Write a program that calculate types of banknote that will be output
based on amount of money that user inputs.

If the machine is unable to output a banknote because
it will have residue money, output **Invalid** to the user.

This ATM has these banknote: *1000*, *500*, *100*

**Input:**

1. Amount of money in positive integer `n`

**Output:**

1. Amount of each banknote (see examples for more details)

**Examples**

```text
Input:  7900
-----
Output: 1000 -> 7
        500  -> 1
        100  -> 4
=====

Input:  2670
-----
Output: Invalid

Because ATM only has banknote 1000, 500, and 100.
There is residue money amount of 70.
```
