# Practice Problems 6: Recursion

This practice problems set will guide you through recursion in programming.

Some problems shall be approached with recursion only. Direct approach is not allowed.
Loop is also not allowed.

1. Factorial Function `factorial(n)`
2. Power Function `pow(x, n)` computing `x ** n`.
3. Sum of a list `sum_list(x)` computing sum of every element in the list.
4. Reversing a string `reverse_string(s)`.
5. Sum up from 0 to *n* `sum_up(n)`.
6. Finding string length `str_len(s)`.
7. Counting down from *n* to 0 `count_down(n)`.
8. Nested List Sum `nested_sum(x)` computing sum of every element in a nested list. 
   For example, `nested_sum([1, [2, [3, 4], 5], 6])` shall yield 21.

In Python, how to check whether the variable is type `int`, `float`, `str`, `list`, or etc.
```python
x = 'Hello'
isinstance(x, str)  # True
isinstance(x, int)  # False

y = '50'
isinstance(y, str)  # True
isinstance(y, int)  # False
```