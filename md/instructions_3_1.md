# Assignment 3: Branching (Conditional Statements)

## About Assignment's Difficulty

* This assignment's difficulty level is around 1.5 ★ (average). It will not be too hard
  for you to finish it in time and not too easy that it is not challenging.

* This assignment measures these concepts: conditional statement, programming logic,
  arithmetic operations, and type.

## Task

Write a program to input electricity unit charge and calculate the total electricity
bill according to the given condition:

* For first 50 units THB 0.50/unit
* For next 100 units THB 0.75/unit
* For next 100 units THB 1.20/unit
* For units above 250 THB 1.50/unit

E.g., you used 130 units: The charge is `(50 * 0.50) + (80 * 0.75) = 85` because:

```text
(50 * 0.50) + (80 * 0.75) = 85
 ~~            ~~
 First 50      Next 80
```

An additional surcharge of 20% of subtotal charge above is always added to the bill.

E.g., the subtotal was 85, then the total cost is `85 * 1.20 = 102`

**Input:**

1. Amount of electricity units used (maybe string of integer or float)

**Output:**

1. Total cost with unit THB (precision of 2 decimal points)

**Examples**

```text
Input:  130
-----
Output: THB 102
```
