---
title: Daily Algorithm Practice - Valid Parentheses
date: "2019-10-25"
description: Todays algorithm practice problem looks at using a stack to check whether a passed in string contains a closing parenthesis for each opening parenthesis.
---
## Problem Statement
Given a string containing just the characters '(', ')', '{','}', '[', ']', determine if the input string is valid. An input string is valid if:
* Open brackets must be closed by the same type of bracket.
* Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

## Description of Algorithm
For this implementation, we will be sacrificing some memory space to speed up our algorithm. The basic logic of the algorithm is:
* For each character in the string
    * We check if it is in a dictionary of closing parentheses.
        * If so, we then remove the top item from a stack if present, or use a  placeholder value
        * We then check if the pair value of the current character in our dictionary is the same as what we removed from the stack.
            * If it is not, we return False because there is one closing parenthesis that does not have a matching opening one.
    * If the item is not a closing parenthesis, we then push it to our stack
* After reviewing each item in the string, we return whether the stack is empty, which will tell us whether there were any spare opening parenthesis.

## Algorithm in Code
```python
def isValid(s: string) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "[" }

    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)

    return not stack
```
## Walkthrough of Algorithm
Starting at the top of our code, we have:
```python
stack = []
mapping = {")":"(", "}": "{", "]":"["}
```
This section just creates our extra data structures we will use to store our opening parentheses as we progress through and the dictionary mapping our closing parentheses to the correct opening one.
```pythong
for char in s:
```
This sets up our iteration through the string.
```python
if char in mapping:
    top_element = stack.pop() if stack else '#'
    if mapping[char] != top_element:
        return False
```
This code chunk is the logic that looks up each char to see if it is a key in our dictionary of closing parentheses. If it is, we remove the top element of our stack, if there is any, or create a placeholder value if the stack is empty. If this top_element is not the same as the value corresponding to the char key in our dictionary, we know there is one closing parenthesis that does not have a matching opening parenthesis. So we return False.
```python
else:
    stack.append(char)
```
Here, we know that the char is an opening parenthesis so we add it to our stack.
```python
return not stack
```
This line can be tricky, the logic for it is below:
* First check if there is anything left on the stack.
    * If there is, we get a True value
    * If there is not, we get a False value
* We then take that True or False value and negate it with the not keyword.
* Finally we return that negation.
This process works because, if there is anything on the stack we know that there was at least one opening parenthesis that did not have a corresponding closing parenthesis. This means our string was not valid, so returning not True gives us the correct evaluation.
## Conclusion
This algorithm is efficient in time, as we only need to make one pass through the entire string to determine if it is valid. We also will require, at worst, n space if we push all elements onto our stack. In this case, the trade off in space for less time complexity is a benefit.