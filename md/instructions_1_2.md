# Assignment 1.2: Self-study

## Python functions

1. What do you think this piece of code do?

```python
def add(a, b):
    return a + b
```

2. What do you think is the output?

```python
s = add(10, 30)
print(s)
```

3. What do you think is the output?

```python
print( add(10, 30) )
```

4. What do you think is the output?

```python
print( add(10, add(20, 30) ) )
```

5. What do you think this piece of code do?

```python
def prod(*args):
    result = 1
    for number in args:
        result = result * number
    return result
```

6. In 5., When you write `result = result * number`, is `result` on the LHS the same with on the RHS?

* LHS = left hand side
* RHS = right hand side
