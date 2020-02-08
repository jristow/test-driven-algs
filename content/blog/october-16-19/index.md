---
title: Daily Algorithm Practice - Merge Sorted Lists
date: "2019-10-16"
description: Todays algorithm practice focuses on merging two sorted lists into one in constant space.
---
# Problem Statement
Given two sorted number arrays, nums1 and nums2, merge nums2 into nums1 as one sorted array.

We are given m and n which represent the initialized elements in nums1 and nums2 respectively. We may assume that nums1 was initialized with enough space to fit all values from nums2.

Example input:
* nums1 = [1,2,3,0,0,0] m = 3
* nums2 = [2,5,6]       n = 3

# Description of Algorithm
One method of doing this is to brute force our way through the arrays. The pseudocode would look like:
* Look at first item in nums1
* compare to first item in nums2
* if smaller, go to next item in nums1
* if larger, move nums1 item one to the right, insert nums2 item one.

This would progress through each item in each list until they are all in place. This is extremely inefficient however.

A better algorithm would use the fact that they are already sorted smallest to largest and that we know the total length nums1 will be after merging, m+n. With this, we can start at the end of both lists, comparing values and replacing values as we go. Pseudocode:
* Look at last sorted element in nums1
* compare to last element in nums2
* if larger, move to end of nums1 array
* if smaller, remove nums2 element and place in last spot of nums1
* decrease size of m and n

# Algorithm in Code
```python
def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    if nums2:
        while nums2:
            if m>0 and nums1[m-1] > nums2[n-1]:
                nums1[m+n-1] = nums1[m-1]
                m -= 1
            else:
                nums1[m+n-1] = nums2.pop()
                n -= 1

```
# Code Walkthrough
Diving into our algorithm line by line (skipping the function definition) we have:
```python
if nums2:
```
Here we are checking to make sure there is an initial value in nums2.
```python
while nums2:
```
This sets up our iterative loop that lasts as long as there is a value left in nums2.
```python
if m>0 and nums1[m-1] > nums2[n-1]:
    nums1[m+n-1] = nums1[m-1]
    m -= 1
```
This portion checks to make sure m is greater than zero and compares the last sorted value in nums1 to the final value in nums2. If the final sorted value of nums1 is larger than the final value in nums2, we know that that value is the largest value in the final array. So we move that value to the end of nums1 and leave the final value of nums2 in place. Finally we decrement m by 1.
```python
else:
    nums1[m+n-1] = nums2.pop()
    n -= 1
```
This branch of our if-else statement means the last value of nums2 is larger than the last sorted value of nums1, which means it is the largest value of our final sorted array. So we pop it off nums2 and assign it to the final position in nums1. We then decrement n by 1.

This will continue looping until we pop off the final value of nums2.

# Conclusion

This algorithm is a great example of how we can leverage some of the extra knowledge we may have about a problem to come up with a more efficient solution to algorithm problems. In this case, we knew that each array was already sorted and that the first array had zeroes for the last n elements.

Thanks for following along. Please reach out to me via social with any questions or comments.