# Lexicon Digital Challenge

### Purpose

* To design a web app that solves the problem currently faced by Prince's Theatre. The app allows customers to see what movies are available and which movie provider (cinemaWorld or filmWorld) is streaming it at a lower price. 

### Technologies Used

* Developed on the macOS Catalina Version 10.15.6 using Visual Studio Code
* Postman to verify API endpoints

### Dependencies Needed

* Axios (Promise based HTTP client for the browser and node.js)
* React-Router-Dom (Used to implement routing)
* Jest (Inbuilt with create-react-app)

### How to use

1. Clone the project from my personal GitHub account
2. Change directory into the project folder
3. Install all node packages
4. Start the local server 

OR IN CODE:

```
git clone https://github.com/shaneperera/lexicondigitalchallenge.git
cd lexicondigitalchallenge
npm install
npm start
```

### Design Implementation

Using the wireframe provided by Lexicon Digital as reference, I initially decided to break down the UI into a component hierarchy, where each component had a single responsibility (ideally). From here, each component was designed using functional components. When I found myself requiring lifecycle or state hooks, mainly for API calls, I created another function to fetch the data. The caller function would then destructure the response and present the information using JSX. The styling of each page is done manually using CSS and can be found in the App.css file. 

### Assumptions

1. Both movie providers stream the same movies
2. Movies are organised in the same order for each provider