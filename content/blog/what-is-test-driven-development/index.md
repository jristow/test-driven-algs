---
title: What is Test Driven Development Anyway?
date: "2019-09-17"
description: You keep saying Test Driven Development, what does that actually mean? Why should you develop software that way? 
---

When we build software systems, it is difficult to "see" what is going on under the hood sometimes. Unlike in physical systems, we can't open up some panels and make sure the correct cog is turning the shaft it is supposed to turn. But we do need to verify classes are behving the way we expect them to. If a method is supposed to change the state of a variable under specific conditions, we want to make sure that happens.

Enter unit testing or just testing in general. Testing software systems allow us to confirm that methods are changing variable state when we expect them to and that the state gets changed to what we expect it to be. Unit tests fall at the bottom of what is commonly referred to as the testing pyramid, with integration/service testing in the middle and user interface testing at the top.

![alt text](/testPyramid.png "Test pyramid")

Unit testing focuses on individual units of code, typically single methods within a class, and emphasizes isolating these units through use of mocks, spies or stubs to "fake" external dependencies. We won't be diving in depth on mocks, spies or stubs since our focus will only be on testing single methods comprised of an algorithm.

With an understanding of unit tests, we can start looking at test driven development or TDD. TDD is a way of developing software where the first bit of code we write is a test. Typically this is the very base case our function should solve, i.e. sum should add two digits and return the correct answer. We know this test will fail initially, because we haven't even written the sum method yet. This is part of the TDD "red, green, refactor" cycle.

With red, green, refactor, we start out with a failing test (red), then write the minimal code necessary to make that test pass (green). We proceed to write another test case that will fail before refactoring our code to get that test to pass. Focusing on testing first allows us to build more secure and robust code from the start.

This is just a basic introduction to test driven development so you can understand what these test cases are that will be discussed under each algorithm write up. This is by no means a thorough tutorial on how to develop test cases or how to ensure you are exhaustively testing functions. Please explore other resources if you want to learn more about those topics.