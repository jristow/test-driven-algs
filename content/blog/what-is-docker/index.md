---
title: What is Docker and how do I use it?
date: "2019-10-19"
description: It seems like Docker is all over the place in software engineering job postings. As I've been working to grow my skillset I wanted to dive in and explore what Docker is and how to use it.
---
### What is Docker?
The book answer is that Docker is a containerization platform for software. Which leads to the next question of what is a containerization platform and why do we need one for software?

A great analogy for this comes from the shipping world, where the shipping container revolutionized how items were moved across the globe. Instead of having to load individual items on a ship, companies would simply pack their items into shipping containers which would then be loaded onto trains or ships for further transport. This standard size container made it much more efficient and easy to move goods around the world. It's one of the things that drove greater economic expansion.

In software, when we are delivering a product to consumers or users, we can never be certain what services and software will already be installed on our server when we deploy the application. When most software was delivered as desktop programs, this wasn't as much of an issue as we could bundle all of our required software into the installer users would execute. But as we moved to running software as remote services accessed via the internet, this meant engineers had to spend more time making sure all dependencies were available on the machine software was deployed to.

Docker is to software what the shipping container was to shipping goods. It is a way to standardize deployments of software by packaging code and dependencies together. This way you can define a Docker image and then use that image to actually run your application anywhere.

### How can I use Docker?
Over the next few weeks I want to work on building out an application that leverages Docker, but on a high level using Docker is fairly simple. You need to define a Dockerfile inside your applications directory. This file is simply a description of what the Docker image is and what commands need to be run to build the image. Beyond the Dockerfile, you can build out different yaml files for Kubernetes or Docker Swarm support. These files are used to manage different containers that may be required for your overall application. Check back over the next few weeks to see how we can leverage Docker when building applications.