---
title: Developing Microservices
date: "2019-11-20"
description: Microservices are all the rage right now, especially as companies migrate more and more workflows to the cloud. But what exactly is a microservice?
---

*Recently I was having a conversation with some junior developers at work focused around what, exactly, is a microservice. They had read some Medium articles focused on building a single microservice, but no one had told them what it meant to be a "microservice." So I wanted to write up a quick description based on the conversation we had.*

### What is a microservice?

In plain speak, a microservice is a single piece of functionality within a larger application. To illustrate, say we are building a data visualization tool. We can decompose the entire application down into discrete pieces of functionality that all work together, such as a data upload function, data transformation function and then the data visualization function.

When we look at these individual pieces, we can start to identify what some of our microservices will be. To upload data, we will need a service that can take in a file (probably csv), convert the data to a different format and then persist that data somewhere. For data transformation, we will need a service that can apply 