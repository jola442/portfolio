import {v4 as uuidv4} from "uuid";
export const projects = 
[
    {
        id: uuidv4(),
        title:"Movie Database Platform",
        imglink:"https://user-images.githubusercontent.com/51683551/200951609-039049b7-1d93-4802-aee4-7e900a7a2212.png",
        description: "Movie Database Platform",
        gitHubLink: "https://github.com/jola442/movie-database",
        // videoLink: "N/A",
        tools: [{id:uuidv4(), name:"Github"}, {id:uuidv4(), name:"HTML"}, {id:uuidv4(), name:"CSS"}, {id:uuidv4(), name:"Nodejs"}, {id:uuidv4(), name:"MongoDB"}, {id:uuidv4(), name:"Mongoose"}, {id:uuidv4(), name:"Pug"}, {id:uuidv4(), name:"Express"},]
    },

    {
        id: uuidv4(),
        title:"Cranial Electrical Stimulation Device Simulation",
        imglink:"https://user-images.githubusercontent.com/51683551/203725522-bda4f9f6-0c13-40a0-b2fe-212babf1f2f0.png",
        description: "Cranial Electrical Stimulation Device Simulation",
        gitHubLink: "https://github.com/jola442/cranial-electrical-stimulation-device-simulation",
        videoLink: "https://user-images.githubusercontent.com/51683551/208214202-be5ba9e8-78d2-4aaa-81ae-288e74bfd72f.mp4",
        tools: [{id:uuidv4(), name:"Qt C++"}, {id:uuidv4(), name:"Github"}]
    },

    {
        id: uuidv4(),
        title:"Robot Collision Simulator",
        imglink:"https://user-images.githubusercontent.com/51683551/200935670-e896deb0-3d45-461b-b5be-67952d9fd1c7.gif",
        description: "Robot Collision Simulator",
        gitHubLink: "https://github.com/jola442/robot-collision-simulator",
        // videoLink: "https://user-images.githubusercontent.com/51683551/200935670-e896deb0-3d45-461b-b5be-67952d9fd1c7.gif",
        tools: [{id:uuidv4(), name:"C"}, {id:uuidv4(), name:"Github"}]
    },

    {
        id: uuidv4(),
        title:"Electronics Store Application",
        imglink:"https://user-images.githubusercontent.com/51683551/202927498-984c8a1c-fc4f-4b3b-a2eb-71bac75b104e.png",
        description: "Electronics Store Application",
        gitHubLink: "https://github.com/jola442/electronic-store-app",
        videoLink: "https://user-images.githubusercontent.com/51683551/208212163-90bf984d-f966-43dc-92e8-d11d8f1deca6.mp4",
        tools: [{id:uuidv4(), name:"JavaFX"}, {id:uuidv4(), name:"Github"}]
    },
]