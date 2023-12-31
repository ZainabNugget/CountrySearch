import React, { useState } from 'react';
import './App.css';
import InformationPage from './components/InformationPage';

function App() {
  const [userString, setUserString] = useState(''); //set the string from the user into variable
  const handleChange = (event) => { //When the user inputs a string i will add it to the userString const
    setUserString(event.target.value)
  };
  //put endpoint into variable
  //add into the api url 
  const api_url = `/api/` + userString;
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
      <section id="searchBar">
        <h3 id='greetings' className='flex-row'>Greetings! Search your country!</h3>
        <div id='earth'></div>
        <input
          id='search'
          type='text'
          value={userString}
          onChange={handleChange}
          className='z99'
          placeholder="Type Your Country" />
        {/* After this button is pressed, the country will be processed, then the information will be displayed */}
        <button id='btn' onClick={fetchData}>Search</button>
      </section>
      {/* Below here, in the article section, info about the country will be placed */}
      {(countryData === null ? (
        <p></p>
      ) : (
        <p className='flex-row'>we found {countryData.length} results</p>
      ))}
      
      <div id='slider'>
      {Array.isArray(countryData) && countryData.length > 0 ? (
        (countryData.map((data, index) => (
          <article id='info-page' className='flex-row'  key={index}>
          <InformationPage
           index = {index}
            name={data.name.common}
            capital={data.capital}
            region={data.region}
            subregion={data.subregion}
            population={data.population}
            coatOfArms={data.coatOfArms["png"]}
            flags={data.flags["png"]}
            alt={data.flags["alt"]}
            official={data.name.official}
            currencies ={data.currencies}
            languages = {data.languages}
            altSpellings = {data.altSpellings}
            startOfWeek={data.startOfWeek}
          />
          </article>
        )))
      ) : (
        <p className='flex-row'></p>
      )}
    </div>
    </div>
  );
}

export default App;
