---
title: Daily Algorithm Practice - Remove Elements From a Linked List
date: "2019-10-23"
description: Todays algorithm looks at how we can remove a specific value from a linked list, if it is present.
---
## Problem Statement
Remove all elements from a linked list of integers that have value **val**.

Example:

Input = 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6

val = 6

Output = 1 -> 2 -> 3 -> 4 -> 5

*Node definition for singly linked lists*
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```
## Description of Algorithm
In this problem we will have two separate portions of the algorithm. The first will check if the head of our list is the value we need to remove. The second portion will walk through the list to find and remove any other elements with the value we are looking for. To do this, we will always check the value of element.next. This way we won't lose our place in the list.
## Algorithm in Code
```python
def removeElements(head, val):
    while head and head.val == val:
        head = head.next
    cur = head
    while cur:
        while cur.next and cur.next.val == val:
            cur.next = cur.next.next
        cur = cur.next
    return head
```
## Walkthrough of Algorithm
Let's walk through this code and see what it's doing.

```python
while head and head.val == val:
    head = head.next
```
Here, we look at the head element of our list and if the value of it is equal to the value we are looking for, we skip the element and move to the next item in the list.
```python
cur = head
while cur:
```
Here, we create a new variable, cur and assign the value of head to it. Then, as long as there is a value assigned to cur we iterate through the next portion of our code.
```python
while cur.next and cur.next.next.val == val:
    cur.next = cur.next.next
```
This section is where we check if there is a value in the next node and if the value in the node after that is equal to the value we are excluding. If both of those conditions are true, we skip the item after the next node.
```python
cur = cur.next
```
Here we are simply advancing to the next node in our list.
```python
return head
```
Finally, we return the head element of our linked list.
## Conclusion
With this algorithm, we simply have to make one pass through our linked list to remove any nodes with our target value. Additionally, we do not require any extra memory to do this, as we are using the existing nodes and simply changing which node is stored as the next node for any nodes preceding ones with the target value.