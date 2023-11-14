# Assignment 2: Strings, Lists & Functions

## Tasks

### Task 1

Study a string method that split each word in a string into list of words.
Then, write a function that takes two strings as an input, one is a word `s`,
one is delimiter `d`.

Delimiter is the repeating characters separating words, e.g., comma.
See examples for more details.

```python
# Example 1
'hello world this is the test message' -> ['hello', 'world', 'this', 'is', 'the', 'test', 'message']

# Example 2
'1,2,3,4,5,,' -> ['1', '2', '3', '4', '5', '', '']
```

<details>
    <summary>Show Hint</summary>

    See .split(...)

</details>

<hr>

### Task 2

Write a function that takes a string `s` and two integers: `a` and `b` as inputs
and returns a new string.
The new string comes from concatenating two strings:

1. First `a` characters from the left of the string in reversed order.

2. Last `b` characters from the right of the string in the same order.

Guarantee that `len(s) >= a + b` always.

```python
# Example 1
s = 'javascript is a weird language.'
a = 6
b = 4
f2(s, a, b) -> 'csavajage.'
```

<hr>

### Task 3

Study a string method that join each string from a list of strings.
See examples for more details.

Write a function that takes a string `d` and a list of strings `c` as inputs.
The string `d` will be the delimiter joining every string in `c` in reversed order.

```python
# Example 1
s = '58'
c = ['Som', 'Wang', 'Coke', 'James']
f3(s, c) -> James58Coke58Wang58Som
```

<details>
    <summary>Show Hint</summary>

    See .join(...)

</details>

<hr>

### Task 4: Conversion

Write a function that takes two **integers** `a`, `b` as inputs.
The function returns a digit-concatenated integers.

```python
# Example 1
n1 = 59
n2 = 2678

f4(n1, n2) -> 592678  # in integer, not string
```

<details>
    <summary>Show Hint</summary>

    See str(...) and int(...)

</details>


<hr>

### Task 5: *n*-Tuple

A tuple is an immutable data type in Python, it works almost like the list,
but you can't add or remove elements from it.
It is useful when you have *n*-dimensional data, e.g., 3D coordinate.

You can create a tuple in Python with parentheses:

```python
new_tuple = (2.5, 0.0, 6.8)
# This is called '3-tuple' because it has 3 elements.
# Sometimes, you might see it be called as '3-vector'.
```

You can access, index, slice it like lists and strings.
Tuples are data types in Python, so you can put them in the list, which
will make it *"a list of tuples"*

Try creating a function that takes a list of 3-tuples and return a sorted version of it.
Try both sorting in ascending order (default) and descending order.

When Python sorts a tuple, it compares the leftmost element of each first.
If they are equal, then it compares the next pair of element and so on.

Try sort this as an example.

```python
# A list of 3D coordinates
[(1, 2, 3), (9, 8, 9), (60, 5, 5), (1, 7, 8), (1, 2, 2), (1, 1, 1), (-9, 0, 0)]
```

<hr>

## Template

```python
# Task 1
def f1(s, d):
    # do something
    # return something

# Task 2
def f2(s, a, b):
    # do something
    # return something
    
# Task 3
def f3(d, c):
    # do something
    # return something

```
