---
title: Developing Microservices
date: "2020-02-08"
description: Microservices are all the rage right now, especially as companies migrate more and more workflows to the cloud. But what exactly is a microservice?
---
### What is a microservice?

In plain speak, a microservice is a single piece of functionality within a larger application. To illustrate, say we are building a data visualization tool. We can decompose the entire application down into discrete pieces of functionality that all work together, such as a data upload function, data transformation function and then the data visualization function (this is an overly simplified model, but you get the picture).

When we look at these individual pieces, we can start to identify what some of our microservices will be. To upload data, we will need a service that can take in a file, read through the file line by line and then move that file somewhere. From this, we can see the next logical microservice would be one that does some transformation of that file data. Depending on what data store technology you are using, this service would probably convert each line of data into json to be stored in a NoSQL database such as Mongo or Cloudant.

Where you draw the line between microservices is an architectural decision. The main point is that you are breaking down the entire application into smaller pieces that run independently of each other. Once you have the smaller pieces, you can assign small project teams to focus on each one, this way they can improve each service independently.

Microservices are an important evolution in software architecture and development practices. When applications are broken down into smaller pieces of functionality, teams are able to deliver value faster. They can focus on their piece of the application and work to make it the best it can be, independant of where other teams are at in their development. This is one of the biggest benefits of moving applications to the cloud, as well. Being able to continuously drive value creation in your products allows users to gain the benefits rapidly.