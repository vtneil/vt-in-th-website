# Practice Problems 5: Map, Filter, Reduce, Enumerate, Zip

This practice problems set will guide you through Python's useful functions
`map`, `filter`, `reduce`, `enumerate` and `zip`.

## Map

1. Use `map` to convert a list of strings into a list of their lengths. For example, `['cat', 'window', 'defenestrate']`
   should become `[3, 6, 12]`.
2. Given a list of Cartesian coordinates represented by a list `[x, y]`. Use `map` to convert them into a list
   of Polar coordinates represented by `[r, theta]`.
   [How to convert X, Y to Polar](https://www.mathematics-monster.com/lessons/how_to_convert_cartesian_to_polar_coordinates.html).
   For example, `[[3, 4], [1, 1]]` becomes `[[5, 53.1...], [1.414..., 45]]`.
3. Write a function that takes a list of functions and a list of values and uses map to apply each function to the
   corresponding value.

## Filter

1. Use `filter` to remove all the numbers in a list that are not multiples of 3.
2. Given a list of strings, use `filter` to return only those strings that are palindromes.
3. Use `filter` to implement a simple text censor function that takes in a list of words and a list of offensive words
   and returns the list of words not in the offensive list.

## Reduce

Note: For using reduce, make sure to write `from functools import reduce` in the header of the file.

1. Use `reduce` to compute the product of a list of numbers.
2. Use `reduce` to implement your own version of Python's max function.
3. A 3D vector is represented by a list `[x, y, z]`. Given a list of 3D vectors, write a function that uses `reduce` to
   produce a sum of all vectors in the list. For example, `[[1, 2, 3], [3, 1, 5], [0, -1, 0]]` produces `[4, 2, 8]`.

## Enumerate

1. Use `enumerate` to modify the elements of a list to include their index. For example, ['a', 'b', 'c']
   becomes ['0: a', '1: b', '2: c'].
2. Given a string, use `enumerate` to print indices of lowercase characters.
3. Write a function that takes a list of numbers and returns a list of only those numbers that have an even index.
   Implement this using `enumerate`.

## Zip

1. Given two lists, use `zip` to create a new list of lists where each list contains the elements of the original lists
   at the corresponding positions. For example, given the lists `['a', 'b', 'c']` and `[1, 2, 3]`, your code should
   produce the list `[['a', 1], ['b', 2], ['c', 3]]`.
2. Use `zip` and `map` to compute the element-wise product of two lists of numbers. For example, given the
   lists `[1, 2, 3, 4]` and `[5, 6, 7, 8]`, your code should produce the list `[5, 12, 21, 32]`.
3. Given 2 lists representing 2 coordinate vectors, e.g., `[w1, x1, y1, z1]` and `[w2, x2, y2, z2]`. Use `zip` to
   compute a dot product of 2 vectors. In this case `w1*w2 + x1*x2 + y1*y2 + z1*z2`.
4. From the last problems, try to do it without loop. Hint: use `reduce`.
5. Given a matrix represented by a list of lists. Use `zip` to help you write a transpose function.
   You need only 1 loop.
