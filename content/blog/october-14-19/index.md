---
title: Array Plus One
date: "2019-10-14"
description: We are passed in an array of integers representing an integer i.e. [1, 2, 3] is 123. We want to add one to this larger integer.
---

## Problem Statement

We are passed in an array of numbers that represent an integer, [1, 2, 3, 4] represents 1,234. We must add one to the integer and return the array, [1, 2, 3, 4] returns [1, 2, 3, 5].

## Test Case Description

Let's start by thinking about the behavior we need from this function and see what test cases we can create. The key to this particular algorithm is remembering that we are representing an integer in this array, with this in mind we can think about some basic tests as well as a few edge cases. Right away, we can say we need to add one to the last element in the array that is passed in, a test case for this looks like:

```typescript
it('should add one to the final int in an array' () =>{
    const plusOne: PlusOne = TestBed.get(PlusOne);
    const newArray: number[] = plusOne.addOne([1, 2, 3]);
    expect(newArray).toEqual([1, 2, 4]);
});
```

This is our first, basic, test case. From here we can start to think about some edge cases, mainly what happens if we have 9 as the last digit? Or if we have an array ending in [..., 9, 9]? Writing some test cases for these we have:

```typescript
it('should add one to the number to the left of a nine' () =>{
    const plusOne: PlusOne = TestBed.get(PlusOne);
    const newArray: number[] = plusOne.addOne([1, 2, 9]);
    expect(newArray).toEqual([1, 3, 0]);
});

it('should return [2, 0, 0] if [1, 9, 9] is passed in' () =>{
    const plusOne: PlusOne = TestBed.get(PlusOne);
    const newArray: number[] = plusOne.addOne([1, 9, 9]);
    expect(newArray).toEqual([2, 0, 0]);
});

it('should add an element if an array of only 9 is passed in', () => {
    const plusOne: PlusOne = TestBed.get(PlusOne);
    const newArray: number[] = plusOne.addOne([9,9]);
    expect(newArray).toEqual([1,0,0]);
})
```

We could write more tests to check other behaviors, but these cases are enough to help us develop our algorithm.

## Description of Algorithm

There are a few ways we could handle this problem. One way is to convert our array into a string, then convert that into a number, add one to that number then convert the whole thing back into an array. We can run into problems with this if a very large number gets passed in and we didn't use a large enough number type.

A better solution is to start from the end of the array, check if the number at that position is a 9, if so we pop that number off and add 1 to a counter variable. We move to the next to last item in the array and check if that is a 9, and repeat that process. Once we hit a number that isn't 9, we add 1 to it and then fill the array with 0's based on our counter value.

## Algorithm in Code

```typescript
plusOne(digits: number[]): number[] {
    let carry = 0;
    while (digits.length > 0) {
      const last = digits.length - 1;
      if ( digits[last] === 9) {
        digits.pop();
        carry++;
      } else {
        digits[last]++;
        digits.push(...new Array(carry).fill(0));
        return digits;
      }
    }
    digits.push(1, ...new Array(carry).fill(0));
    return digits;
  }
```

## Walkthrough of Algorithm

Let's start breaking this algorithm down.

First, we define our variable to handle counting.

``` let carry = 0; ```

Next we set up our while loop, which will allow us to iterate through the array as many times as we need.

``` while (digits.length > 0) ```

Inside the while loop, we first declare a variable that represents the last element in the array.

``` const last = digits.length - 1; ```

Now we are at the important part of the algorithm, this if else statement is where we check what the value of the last element is. If it is 9, we pop the last element off and increase our counter.

``` typescript
if (digits[last] === 9) {
    digits.pop();
    carry++;
}
```

If the last digit is not 9, we increment the last element in the array by 1 and then add a zero for each increment of our counter (i.e. carry = 3 adds 3 zeros to the end of our array).

``` typescript
else {
    digits[last]++;
    digits.push(...new Array(carry).fill(0));
    return digits;
}
```

Finally, if every element of the array has been popped off, we push a new array starting with 1 and filled out with 0's for each element of the original array (i.e. [9,9,9] becomes [1,0,0,0]).

``` typescript
digits.push(1, ...new Array(carry).fill(0));
return digits;
```

## Conclusion

Since we do not create any new temporary arrays, this algorithm operates in constant space. Further, this algorithm only traverses through the original array once and at worst rebuilds the array, which gives it linear time performance.