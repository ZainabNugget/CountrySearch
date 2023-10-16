import React, { useState } from 'react';
import './App.css';

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
      console.log(data)
    } catch (error) {
      console.error('Error:', error); //print out any occuring errors :)
    }
  };

  function cleanse(data) {
      data.replaceAll('{',' ').replaceAll('}',' ').replaceAll('"',' ');
  }

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
      <p>We found {countryData.length} result(s)</p>
      {Array.isArray(countryData) && countryData.length > 0 ? (
        (countryData.map((data, index) => (
          <article id='info-page'  key={index} >
          <section id='info-header'>
            <h1>{data.name.common}</h1>
            <img alt='flag of country' src={data.flags["png"]}/>
          </section>
          <section id='general-info'>
            <p>The capital of {data.name.common} is {data.capital}</p>
            <p>with a population of: {data.population}</p>
            <p>It is located in {data.region}</p>
            <p>In the subregion {data.subregion}</p>
            <p>Other ways of naming this country: {data.altSpellings+ " "}</p>
            <p>{data.flags["alt"]}</p>
            <p>The week starts on a {data.startOfWeek}</p>
            <p>The currencies of this country: {JSON.stringify(data.currencies)}</p>
            <p>Languages that this country speak, </p>
            {data.independent ? (
                <p>This country is independent</p>
            ):(
              <p>This country is not independent</p>
            )}
          </section>
        </article>
      )))
      ):(
        <p>Try searching for a country!</p>
      )}
      
    </div>
  );
}

export default App;
