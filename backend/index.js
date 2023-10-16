//init express and app
const express = require('express');
const app = express();
//Set the port to 5001
const PORT = process.env.PORT || 5001;
//Place url into a const variable
//Changing the api url to be more specific
const url ='https://restcountries.com/v3.1/name/' 
//I will use the async/await fetch method to fetch api data
app.get(`/api/:name`, async (req, res) => { //Adding name into the target, will specify country :)
    try { //try catch to see if theres any errors that happen
        //we need to request the name from the client side.
        //We need to change it to string for it to work :0
        const countryName = String(req.params.name)
        const api_url = url +countryName;
        const response = await fetch(api_url) //Get api data :)
        const json = await response.json() //Get the response in json
        res.json(json); //This will send the response to the client side
    } catch (error) {
        res.status(500).json({ error: 'There has been an Internal Error' }) // to handle errors and send an error response
    }
});

//Check if the port is working (and it does)
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});