# Map App

## A simple full-stack App that places markers on a map.

### Timeframe

Time: 3 hours

## Technologies used

* JavaScript - React
* HTML5
* CSS - SCSS
* GitHub
* Web APIs - Nominatim
* Maps - Mapbox GL JS

## Installation

1. Clone or download the repo
1. Add a .env file with your own MAPBOX_TOKEN 
1. ```Yarn``` to install packages
1. ```Yarn run serve``` to start the frontend
1. ```nodemon``` to start the backend
1. Open your local host on port 8000

### Instructions

1. Type a location in the search bar and press ```Search```
2. A marker for that location will appear on the map with a place label.

![image](https://user-images.githubusercontent.com/34242042/64956018-94c79780-d881-11e9-8c9f-0ff24e1145fd.png)

### Process
#### Frontend
I built this project using Mapbox as I am familiar with it and have used it on previous projects. 

I built a Search and Map React components. Inititally I built these as Hooks but I found that the map was being re-rendered too often and I didn't know how to stop it, so I rebuilt them as classes. 

I then realised the re-rendering was caused by by forgetting to use the preventDefault() function on the search button click!

I finished building out the classes, then rebuilt them as hooks. ( I have kept both class and hook versions for comparison)

It's interesting to see how much less code is needed to write the components this way.

I styled the search form and button using SCSS.

#### Backend
For the backend, I copied the set up I have been using for another full stack project.

I removed all the un-needed routes and database models. 

I created a new route for the search function and passed the query parameters to the Nominatim api then sent the response from their API to the frontend.

I added a logger using Node.js' file system. This records the search term and the data (for the top result) returned from the API into a text file.

#### Conclusion
This was a nice little project to become re-aquainted with the Mapbox API and to practice writing Components as Hooks.

Given more time I would have attempted to build the back end in C#, but due to the amount of time it took to set up such a simple project in a language I already knew, I felt trying to write this in C# would have taken a lot more time than I had available.