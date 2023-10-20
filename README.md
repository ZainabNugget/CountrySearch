# CountrySearch
This project allows a user to search up a country, if valid, information about the country will display on the screen.

## Link to the Website
[CountrySearch](https://countrysearch-8033619c0be6.herokuapp.com/)
-Used Heroku to deploy website.

## Frameworks used
React, Node.js, Express
Languages used: HTML, CSS and JS

## Table of Contents:
- [Installation](README.md#Installation)
- [Running it locally](README.md#Running-it-locally)
- [Usage](README.md#Usage)

## Installation
- Download this zip folder
- Open in Visual Studio Code.
- Open the terminal:
  - To start up the server, type in these commands:
    ```
    cd backend
    node index.js
    ```
  - To start up the application on the browser:
  - ```
    cd frontend
    npm start
    ```
    
## Running it locally:
- You need to have Node.js installed on your device.
- If you find trouble running the website, there might be a server issue:
  ``` Error: SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data ```
  - This means its not connecting to the server. Make sure you add a ``` "proxy": "http://localhost:5001" ``` to the package.json file in the frontend folder.
  - Remove the .gitignore file from the backend folder.

## Usage
- When the browser runs successfully,
- Simply type in a valid country (for example Italy)
- The website will then display information about italy.



