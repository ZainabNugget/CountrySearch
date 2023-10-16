import React, { useState } from 'react';
import './App.css';

function App() {
  const [userString, setUserString] = useState(''); //set the string from the user into variable
  const handleChange = (event) => { //When the user inputs a string i will add it to the userString const
    setUserString(event.target.value)
    console.log(userString)//to check if it works 
  };
  //put endpoint into variable
  const api_url = `/api/`;

  //Getting the data from the api and set into a const
  const [countryData, setCountryData] = useState(null);
  //Call this method to get API data
  const fetchData = async () => {
    try { //try fetching api response
      const response = await fetch(api_url);
      if (!response.ok) { //if its not fetching respond with error
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); //put all data into this variable
      setCountryData(data); //set it into this data variable

    } catch (error) {
      console.error('Error:', error); //print out any occuring errors :)
    }
  };

  return (
    <div id='page'>
      {/* Below this will be the search bar, where the user will input the country */}
      <section className="searchBar">
        <h3 id='greetings'>Greetings! Search your country!</h3>
        <input
          id='search'
          type='text'
          value={userString}
          onChange={handleChange}
          placeholder="Type Your Country" />
      </section>
      {/* After this button is pressed, the country will be processed, then the information will be displayed */}
      <button id='btn' onClick={fetchData}>Search</button>
      {/* Below here, in the article section, info about the country will be placed */}
      <article id='info-page'>
        <section id='info-header'>
          <h1>Country Name</h1>
          <img alt='flag of country' />
        </section>
      </article>
    </div>
  );
}

export default App;
