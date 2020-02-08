---
title: Recursive Minimum Coins
date: "2019-10-28"
description: We need to find a minimum number of coins required to make change for a specified amount based on a list of existing coin values.
---
## Problem Statement
Write a function that uses recursion to find the minimum number of coins required to make change for a specified amount, using a list of coin values passed in to the function.

## Description of Algorithm
As the title states, we will use recursion to calculate our minimum amount of coins and to reduce the number of duplicative recursive calls, we will also include an array to store values we have already seen. We are assuming the knownResults array is passed in as a list of 0's, with a length of the required change amount. i.e. if we want to find the minimum number of coins for 64 cents, knownResults is a list of 64 zeroes. The basic outline of our algorithm is below:
* Check if the amount of change we need is in our known coin values list
    * We return 1 as we only need one coin to make that change.
* Then we check our known results array to see if that value of change has been seen.
    * If so, we return the value at that point in our known results array.
* At this point we start iterating through our coin value list and recursively call our function if the current value of the coin is less than or equal to our change amount.
* Once we have checked all the values in our coin value list, we check if the count of coins is less than the previous minimum number of coins, overwriting the old min coins value if it is.
* Finally, we return our minimum number of coins.

## Algorithm in Code
``` python
def recCoinChange(coinValueList, change, knownResults):
    
    minCoins = change
    if change in coinValueList:
        knownResults[change] = 1
        return 1
    elif knownResults[change] > 0:
        return knownResults[change]
    else:
        for i in [c for c in coinValueList if c <= change]:
            numCoins = 1 + recCoinChange(coinValueList, change-i, knownResults)
            
            if numCoins < minCoins:
                minCoins = numCoins
                knownResults[change] = minCoins
    return minCoins
```
This algorithm is more complex than most of the ones we have seen so far. Here we are starting to look at a concept known as dynamic programming. While this isn't true dynamic programming here, it is a version often used to prevent duplicate recursive calculations.



So let's get to it.

## Walkthrough
``` python
minCoins = change
```
Here, we are making the initial assumption that we only have coins in a denomination of one, therefore our minCoins will simply be the amount of change needed as single coins.

``` python
if change in coinValueList:
    knownResults[change] = 1
    return 1
```
This first conditional checks if the value we are looking for is in the coinValueList. If so, we assign the value at change index of knownResults a value of 1. We then return 1.
``` python
elif knownResults[change] > 0:
    return knownResults[change]
```
This next conditional checks our knownResults list at the index of change to see if it is greater than zero. If so, we return that value. This means we have already calculated the value of change.
``` python
else:
        for i in [c for c in coinValueList if c <= change]:
            numCoins = 1 + recCoinChange(coinValueList, change-i, knownResults)
            
            if numCoins < minCoins:
                minCoins = numCoins
                knownResults[change] = minCoins
```
This is the main portion of our algorithm, where we make our recursive call. Let's unpack what is going on here.
```python
for i in [c for c in coinValueList if c <= change]:
    numCoins = 1 + recCoinChange(coinValueList, change-i, knownResults)
```      
Here, we are using Pythons list comprehension syntax to iterate through the coinValueList, check if the coin value is less than change and if so, we add it to our list. We then iterate through that list, accumulating the number of coins required to make change for our change value.
``` python
if numCoins < minCoins:
    minCoins = numCoins
```
This final step checks if our current value of numCoins is less than minCoins, if so we assign that value to minCoins.
``` python
return minCoins
```
Finally, after we have iterated through each value of coinValueList less than or equal to change, we have our final minCoin count.

## Analysis
The complexity of this is slightly confusing, as we have a comprehension nested within a for loop, which should make it O(n^2). However, our coinValueList is a constant, and relatively small number of denominations. So the average complexity of this algorithm should be O(n), with the value of change driving the overall complexity.

Thank you for following along and please reach out with comments or questions.