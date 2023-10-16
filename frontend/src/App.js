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
    } catch (error) {
      console.error('Error:', error); //print out any occuring errors :)
    }
  };

  function cleanse(data) {
    return data.replaceAll('{',' ').replaceAll('}',' ').replaceAll('"',' ');
  }

  return (
    <div id='page'>
      {/* Below this will be the search bar, where the user will input the country */}
        <section id="searchBar" >
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
      {/* <p>We found {countryData.length} result(s)</p> */}
      {Array.isArray(countryData) && countryData.length > 0 ? (
        (countryData.map((data, index) => (
          <article id='info-page' className='flex-col' key={index} >
          <section id='info-header' className='flex-col'>
            <h1>{data.name.common}</h1>
            <img alt='flag of country' src={data.flags["png"]}/>
          </section>
          <section id='general-info' className=''>
          <p id='text'>~ Other ways of naming this country are {data.altSpellings+ " "} 
          <br />~ The capital of {data.name.common} is {data.capital} with a population of: {data.population} people... 
          <br/>~ It is located in {data.region}, In the subregion {data.subregion} 
          <br/>~ {data.flags["alt"]}
          <br/>~ The week starts on a {data.startOfWeek} 
          <br />~ The currencies of this country: {cleanse(JSON.stringify(data.currencies))}, 
          <br/>~ Languages that this country speak, {cleanse(JSON.stringify(data.languages))}
          <br/>~ 
            {data.independent ? (
                <span>This country is independent</span>
            ):(
              <span>This country is not independent</span>
            )}
            <br/>For more information on this country, follow the <a href={'https://en.wikipedia.org/wiki/'+data.name.common} >wikipedia page</a>!
            </p>
            <img id='img' src={data.coatOfArms["png"]}/>
          </section>
        </article>
      )))
      ):(
        <p className='flex-row'>Try searching for a country!</p>
      )}
    </div>
  );
}

export default App;
