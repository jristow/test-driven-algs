---
title: Daily Algorithm Practice - Merge Sorted Linked Lists
date: "2019-10-18"
description: Todays algorithm practice focuses on merging two sorted linked lists into one.
---
## Problem Statement
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

This problem has us exploring the properties of linked lists and how we can leverage them to efficiently merge two already sorted linked lists given each lists first element.

## Description of Algorithm
Our general algorithm is structured as below:
* Compare first values of each list to determine which is smaller
* Set that item as the first item of our new linked list
* Progress to the next item on that list and compare it to the item on the other list.
* Set the smaller one as the next value of our first item
* Repeat this procedure until we are out of items on both lists.

*Node definition for singly linked lists:*
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

## Algorithm in Code
```python
def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1:
            return l2
        elif not l2:
            return l1
        dummy = ListNode(None)
        curr = dummy
        while l1 or l2:
            if l1 and (not l2 or l1.val < l2.val):
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        return dummy.next
```
## Code Walkthrough
Let's dive in and explore the code line by line.

```python
if not l1:
    return l2
elif not l2:
    return l1
```
These first few lines of code are checking that both l1 and l2 have values in them. If either of them are empty, we simply return the first node of the other list.

```python
dummy = listNode(None)
curr = dummy
```
This block sets up some placeholder variables we will use later on in our algorithm. We create an empty Node called dummy and then set curr equal to that empty Node.

```python
while l1 or l2:
```
This portion sets up our loop which will continue processing until l1 and l2 have no more values.

```python
if l1 and (not l2 or l1.val < l2.val):
    curr.next = l1
    l1 = l1.next
```
This if statement is a little tricky so I am going to attempt to write it out as plainly as possible. The logic for it follows:
* If l1 has a value
    * And l2 has a value
        * And value of l1 is less than value of l2
            * We set the next node of curr equal to l1 node and then replace l1 with the next node on list1.

```python
else:
    curr.next = l2
    l2 = l2.next
```
If l1 has no value or l2 value is greater than l1 value, we make the next node of curr equal to l2 and then advance l2 to the next node on list2.

```python
curr = curr.next
```
We then advance the value of curr to the next node we just added to the list.

```python
return dummy.next
```
Finally, we return dummy.next which is the first value of our newly created linked list.

## Conclusion
This algorithm is an intuitive method for iteratively building up a linked list based on two separate, sorted linked lists. We used the built in features of storing the next node of our list to make a linear time complexity algorithm and only had to compare the current node values to ensure our sort was correct.

Thanks for reading along and feel free to reach out via social if you want to chat!