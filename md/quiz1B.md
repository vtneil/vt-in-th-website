# Quiz 1 Part B (50 pts)

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

## 1. (5 pts) Anagram

Write a function that takes 2 strings as inputs.
The function should determine if one string can be formed by rearranging another string.
If so, the function should `return True`, otherwise `return False`.

Hint: You don't have to use any loop, one line should be enough.

**Template (Copy and paste)**

```python
# Template for Q12B 1
# Do not change anything else!

def compare(s1, s2):
    # write your code here
    
    return False

exec(input().strip())
```

**Example 1**

```text
--- Input ----
print(compare('hello', 'oehll'))
--- Output ---
True
```

**Example 2**

```text
--- Input ----
print(compare('hello', 'hollo'))
--- Output ---
False
```

**Example 3**

```text
--- Input ----
print(compare('hello', ''))
--- Output ---
False
```

**Example 4**

```text
--- Input ----
print(compare('e', 'e'))
--- Output ---
True
```

## 2. (10 pts) 3 or 5

Write a function that takes a list as an input.
The function should return a new list of integers *x* in the list *y* that are:

* *x* is divisible by 3 or 5, **but not both**.

**Template (Copy and paste)**

```python
# Template for Q12B 2
# Do not change anything else!

def check(y):
    y_new = []
    
    # write your code here
    
    return y_new

exec(input().strip())
```

**Example 1**

```text
--- Input ----
print(check([1, 2, 3, 5, 7, 7, 7, 8, 9, 10, 15, 30, 35]))
--- Output ---
[3, 5, 9, 10, 35]
```

## 3. (15 pts) Palindrome

Write a program that check if the string that user inputs is a palindrome or not.
If you don't know about palindrome, you can ask **M.James**.

A palindrome is a string that is symmetrical. For example,

* `ABCDCBA` is palindrome.
* `ABBA` is palindrome.
* `123321` is palindrome.
* `U` is palindrome
* `HELLO OLLEH` is palindrome.
* An empty string is palindrome.
* `EARTH` is NOT palindrome.
* `AXAX` is NOT palindrome.

The user should input a string, the program should output the result.

**Input (Each Line)**

1. A string `s`

**Output (Each Line)**

1. `PALINDROME` or `NOT PALINDROME`

## 4. (20 pts) Longest Common Substrings

Write a program that prints all the longest common substring of 2 strings.
A substring is a string contained within a string.
For example, `mme` is one of substrings of `Symmetra` because `Symmetra` contains `mme`.

A common substring is a substring that is in both strings.
For example, `supermarket` and `ketamine` has `ket` as one of all common substrings.

Your goal is to fine the **LONGEST** common substrings.

If two strings does not contain any common substrings, then print `NO LCS`.

You shall print them in alphabetical order.

**Input (Each Line)**

1. A string `s1`
2. A string `s2`

**Output (Each Line)**

1. Substring in each line

**Example 1**

```text
--- Input ----
abcdef
bcdefgh
--- Output ---
bcdef
```

**Example 2**

```text
--- Input ----
abcdef
defabc
--- Output ---
abc
def
```

**Example 3**

```text
--- Input ----
sassass
s
--- Output ---
s
```

**Example 4**

```text
--- Input ----
bucky
salamander
--- Output ---
NO LCS
```
