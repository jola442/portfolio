import {v4 as uuidv4} from "uuid";
export const projects = 
[

    {
        id: uuidv4(),
        title:"Crazy Eights Game",
        imglink:"https://user-images.githubusercontent.com/51683551/212390681-f4beadd3-217e-4c26-a91f-d494e2ea4981.png",
        description:"A web application that allows 4 players to play a game of Crazy 8's on four different browser tabs. Communication between browser clients is established through STOMP. The frontend of this application is made using React. The backend comprises Spring and Spring Boot. Dependency injection is used in conjunction with Selenium to facilitate automated testing of specific scenarios in the game that could ordinarily only happen by chance.",
        summary: "A web-based Crazy Eights game that supports 4 players on different browser tabs simultaneously.",
        gitHubLink: "https://github.com/jola442/Crazy8",
        videoLink: "https://youtu.be/toV59FuZVkk",
        date: "January 2023",
        tools: [{id:uuidv4(), name:"React"}, {id:uuidv4(), name:"Selenium"}, {id:uuidv4(), name:"JUnit5"}, {id:uuidv4(), name:"Cucumber"}, {id:uuidv4(), name:"Spring"}, {id:uuidv4(), name:"Spring Boot"}, {id:uuidv4(), name:"Github"}, {id:uuidv4(), name:"HTML"}, {id:uuidv4(), name:"CSS"}, {id:uuidv4(), name:"Nodejs"}]
    },

    {
        id: uuidv4(),
        title:"Movie Database Platform",
        imglink:"https://user-images.githubusercontent.com/51683551/200951609-039049b7-1d93-4802-aee4-7e900a7a2212.png",
        summary: "A website that allows users to view movie descriptions, similar movies, reviews and movie stars. Users are also given recommendations based on movies they reviewed and are able to follow their favourite celebrities and users.",
        description:"This is a web application designed to maintain a database of movie information, including movie title, release year, writers, actors, etc. This site provides registration and login functionality for users. Users can be regular or contributing users. Regular users can browse all information on the site, add movie reviews, and receive movie recommendations based on their past reviews. They are also able to follow other users and movie personnel. They then get notified when the user they follow edits the database or a movie personality they follow is added to the cast of a movie. In addition to this, contributing users are able to add new movies, movie personnel and edit existing records. The application also provides a way for users to view and manage information about their account, search for movies by title, name, and/or genre keyword, and view movie information and reviews. The main server code uses Node.js. The project's data is stored using MongoDB and Mongoose. The frontend is currently being reworked to use React.",
        gitHubLink: "https://github.com/jola442/movie-database",
        // videoLink: "N/A",
        date: "December 2020",
        tools: [{id:uuidv4(), name:"Github"}, {id:uuidv4(), name:"HTML"}, {id:uuidv4(), name:"CSS"}, {id:uuidv4(), name:"Nodejs"}, {id:uuidv4(), name:"MongoDB"}, {id:uuidv4(), name:"Mongoose"}, {id:uuidv4(), name:"Pug"}, {id:uuidv4(), name:"Express"},]
    },

    {
        id: uuidv4(),
        title:"CES Device Simulation",
        imglink:"https://user-images.githubusercontent.com/51683551/203725522-bda4f9f6-0c13-40a0-b2fe-212babf1f2f0.png",
        summary: "A simple GUI desktop application that simulates the use of the Oasis Pro, a Cranial Electrical Stimulation (CES) device developed by Mind Alive Inc.",
        description:"This is a desktop application that was developed for testing a simulator for embedded software used in a Cranial Electrical Stimulation (CES) device called the OasisPro. The OasisPro is a medical device that uses microcurrent delivered via an electrode through the earlobes to stimulate the brain for therapeutic intervention. The implementation and testing are done in C++ using the Qt framework. The simulator mimics features of the Oasis Pro such as power, battery level, session selection, connection test, and intensity adjustment as described in the manual (https://bio-medical.com/media/support/mind-alive-oasis-with-ces-users-manaul.pdf). The simulation also supports recording a therapy session and adding it to the treatment history. This feature is not supported by the original OasisPro. A demo of the original can be found here: https://www.youtube.com/watch?v=PDgN03Fx6fg&t=2s ",
        gitHubLink: "https://github.com/jola442/cranial-electrical-stimulation-device-simulation",
        videoLink: "https://user-images.githubusercontent.com/51683551/208214202-be5ba9e8-78d2-4aaa-81ae-288e74bfd72f.mp4",
        date: "April 2022",
        tools: [{id:uuidv4(), name:"Qt C++"}, {id:uuidv4(), name:"Github"}]
    },

    {
        id: uuidv4(),
        title:"Robot Collision Simulator",
        imglink:"https://user-images.githubusercontent.com/51683551/200935670-e896deb0-3d45-461b-b5be-67952d9fd1c7.gif",
        summary: "A simple GUI desktop application in which 'robots' collide against walls and other robots.",
        description:"This is a desktop application that simulates simple robots. The simulator uses threads and allows multiple robots to connect to it, with each robot running as its own process. The robots move forward or turn in fixed increments each time, and there is an environment containing up to a maximum number of robots. The line drawn through the center of each robot indicates what direction it is facing. On collision with the walls or other robots, the robots seek an alternative path that avoids subsequent collisions.",
        gitHubLink: "https://github.com/jola442/robot-collision-simulator",
        date: "December 2020",
        // videoLink: "https://user-images.githubusercontent.com/51683551/200935670-e896deb0-3d45-461b-b5be-67952d9fd1c7.gif",
        tools: [{id:uuidv4(), name:"C"}, {id:uuidv4(), name:"Github"}]
    },

    {
        id: uuidv4(),
        title:"Electronics Store Application",
        imglink:"https://user-images.githubusercontent.com/51683551/202927498-984c8a1c-fc4f-4b3b-a2eb-71bac75b104e.png",
        summary: "A simple GUI desktop application that simulates a customer buying products from an electronics store.",
        description:"This is a desktop application that simulates an electronics store. It is implemented using the Model/View/Controller paradigm with JavaFX. The simulation supports actions such as adding items to the cart, removing items from the cart and completing a sale. Users are able to see the interface being updated in real-time as these actions occur. The application also supports a feature that displays the store's most popular items (items that have been bought the most) in sorted order.",
        gitHubLink: "https://github.com/jola442/electronic-store-app",
        videoLink: "https://user-images.githubusercontent.com/51683551/208212163-90bf984d-f966-43dc-92e8-d11d8f1deca6.mp4",
        date: "April 2020",
        tools: [{id:uuidv4(), name:"JavaFX"}, {id:uuidv4(), name:"Github"}]
    },

    {
        id: uuidv4(),
        title:"Bookstore Database Application",
        imglink:"https://user-images.githubusercontent.com/51683551/200885696-84ab935e-71d0-40fe-97a3-62ae85feeb9f.png",
        summary: "A simple text-interface desktop application that simulates a customer buying products from a bookstore and an owner managing the bookstore.",
        description:"This is a text interface desktop application that allows clients to browse and purchase books. The system is implemented using Python and PostgreSQL. It provides different functionalities depending on whether the user is an owner or a customer. Owners can choose to exit the store, search books by various criteria, add new books, remove books, generate reports on sales and expenditure, and more. They can also manually input information about a new book or retrieve information from the Google Books API. Customers can also exit the store, search for books by various criteria, add books to their cart, and checkout. They can also track their orders after they have been placed. The entity-relationship diagram and normalized relation schemas can be found on the github page of this project.",
        gitHubLink: "https://github.com/jola442/bookstore",
        date: "December 2021",
        tools: [{id:uuidv4(), name:"Python"}, {id:uuidv4(), name:"PostgreSQL"}, {id:uuidv4(), name:"Github"}, ]
    },
]