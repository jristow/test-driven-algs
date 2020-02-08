---
title: Visualizing Housing Affordability
date: "2019-10-14"
description: 
---

*As part of my Masters program, I was required to design and build a software system. It was a very generic assignment and I had a lot of freedom to decide what I wanted to build. Since I have been interested in personal finance, real estate and data visualization, I decided to merge the three of them together and create an interactive data visualization depcting housing affordability across the US. Here I give a little background on what I did and how I did it. This write up was adapted from a presentation I gave at Pacific Northwest National Lab in February of this year.*

### What is Housing Affordability?

We often hear about how certain cities are unaffordable for people to live in, usually whoever is talking about it is referring to New York or San Francisco. But these are always very vague terms, few articles actually dive into defining what affordable housing really means. So I wanted to explore it and see if I could create an app that could help other people understand what people mean when they say housing is unaffordable. You can take a look at the deployed version [here](https://ristowcapstoneproject.herokuapp.com/), be patient on loading as it's hosted on Heroku's free tier which means it may be asleep.

### How did I build this visualization?
#### Data sourcing and cleaning
When I set out to build this, I was hopeful there would be a nice dataset that contained all the information I needed to create my visualization. Things like zip code, median household income for that zipcode, median home sales price etc. Unfortunately, as is usual in most data analysis projects there was no such data set. I had to go out and find what information I could. I started at Zillow, thinking they would have an API I could tap into and pull data from but all they offered was a central location to download home sales datasets as excel files. This was a great start as they had all of the sales data organized by zipcode.

Armed with sales data, I then found a data set that contained zipcodes and the latitude and longitude coordinates of the center of that zipcode, which would allow me to feed D3.js to build out a map with dots of each zipcode. The final piece I needed I was able to find at [data.gov](https://data.gov) from the Census Bureau's annual American Housing Survey.

With all of this data, I set out to transform each dataset into the format I needed it in. I was able to write quite a few Python utility functions to handle a lot of the data transformation work for me. For the transforms, I needed to calculate the monthly payment of the median sales price of homes for each zip code and then use that payment amount to calculate the income required to qualify for that house. This model isn't necessarily perfect. It assumes people have saved up a 20% down payment for the house, which can be unattainable for a lot of people at the median salary. But it was the industry accepted model, so I didn't want to arbitrarily make changes.

> Formulas used:
> - Monthly payment: MedianPrice * .8 (IR/12)/(1-(1/(1+IR/12)^360))
>   - IR = Interest rate, pulled in November 2018.
> - Qualifying income: PMT * 4 * 12
>   - PMT = Monthly payment
> - Housing Affordability index: (MedianIncome)/(QualifyingIncome) * 100
>   - Values less than 100 are less affordable; greater than 100 more affordable.

Once I made all the calculations, I was able to merge each data set into one JSON data set.

#### Technical Stack
Once I finalized my data set, I set out to build the web application. Since I was deploying this into a cloud environment, I wanted to keep the backend lightweight which is why I turned to Python's Flask framework for the service layer. Since I had a dataset in JSON, I decided to use MongoDB as a data store. Doing this allowed me to treat each zipcode as a separate document, which cut down on the amount of processing I had to do within the API after pulling the records from MongoDB.

To build the frontend, I turned to the powerful D3.js library, which has built in functions to create maps and then overlay datapoints onto the map. As someone who is interested in data visualization, I was very impressed with how powerful this library is. For each zipcode, I used the calculated affordability index to apply a color gradient ranging from red to yellow for least affordable to most affordable.

### Lets make it interactive
So besides simply displaying the color coded dots, I wanted people to be able to enter a zipcode and see what the affordability index is and what income is necessary to qualify for a house in that zipcode. To do this, I wrote a function that watches for key strike events on the number keys. When five digits were entered, the application automatically searched the database for an entry with that zipcode and returned the relevant fields. These were then displayed on the visualization dynamically.

### Conclusion
This was a high level overview of how I created my Housing Affordability Application. If you are interested in the specific implementation details, the github repository can be found [here](https://github.com/jristow/CapstoneServiceLayer). If you have any detailed questions, feel free to reach out to me. If you are interested in data visualization, follow along as I plan on creating more projects and writing them up.