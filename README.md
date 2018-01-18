M7011E - Design of Dynamic Web Systems

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[CodiZ]

The main purpose of the project is offer a quiz platform about programming. In this one, the user should introduce a nickname to start the quiz. All the questions will be stored in a database and when the quiz starts the platform will choose 10 different questions. Each correct question will give 1 point and, at the end of the quiz, he will be able to see his punctuation. That will be the main functionality, but in new versions we would like to introduce new questions and tools.

Technologies

To the front-end and back-end development we will use ReactJS and Java Spring respectively. MariaDB for the database and Heroku to deploy the app.

Software Description

Front End: All the front end is designed with ReactJS, that is in charge to handle the routes and render the pages in function of the user interactions. CSS is used to design how the elements are rendered.

Back End: With the REST API provided by the server, and using Hibernate, basically the BackEnd performs the operations between the FrontEnd and the Database. It works as a bridge that simplifies everything in the frontend and gives a decent security level to our application.

DataBase: This web uses MariaDB for the database. Simply stores the data. We implemented one of the bonus parts here, which was the webpage to check everything in the database (we installed PHPMyAdmin). Can be accessed at http://test.castiello.tk/datos using the database credentials provided.

Hosting: We deploy the app using Heroku directly from this GitHub repository.

Deploy instructions

First, the user needs to download the source code from the GitHub of the project using the next link: https://github.com/LuleaUniversityOfTechnology/m7011e17-codiz. All the front end code is in the master branch of the GitHub repository.

Once you have the code downloaded, you can launch the code from your own computer. But first you need to install Node.js. All the node modules from the package.json file  can be installed using the “npm install” command from the terminal of your computer. After all the dependencies are installed you can run the program from local typing “npm start” on your terminal. The website will be opened in http://localhost:3000/ direction.

From this point, we highly recommend use Heroku App to deploy the app, because Heroku has a tool to deploy the app directly from the repository introduced, which makes this process in an easy way. First, you need to create the app from the home page: https://www.heroku.com/. Once your Heroku app is created, you need to connect your GitHub with Heroku. In the “Deploy” section you can introduce the repository where the code is located and deploy the app directly. Finally, pressing the button “Deploy” or enabling the automatic deploy feature the app will be uploaded.


URL at the app: https://luleacodiz.herokuapp.com/
URL at the API documentation https://test.castiello.tk:8443/swagger-ui.html 
