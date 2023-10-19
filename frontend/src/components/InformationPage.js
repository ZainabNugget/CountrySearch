import React from "react";

  function cleanse(data) {
    if(data == 'undefined')
    return data.replaceAll('{', ' ').replaceAll('}', ' ').replaceAll('"', ' ');
  }
function InformationPage(data) {
    return(    
        <section id='general-info' className=''>
        <section id='info-header' className='flex-col'>
        <h1>{data.name}</h1>
          <img alt={data.alt} src={data.flags}/>
        </section>
         <section id='text'>
        <p >~ Other ways of naming this country are {data.altSpellings+ " "} 
        <br />~ The capital of {data.common} is {data.capital} with a population of: {data.population} people... 
        <br/>~ It is located in {data.region}, In the subregion {data.subregion} 
        <br/>~ {data.alt}
        <br/>~ The week starts on a {data.startOfWeek} 
        <br />~ The currencies of this country: {cleanse(JSON.stringify(data.currencies))}, 
        <br/>~ Languages that this country speak, {cleanse(JSON.stringify(data.languages))}
        <br/>~ 
          {data.independent ? (
              <span>This country is independent</span>
          ):(
            <span>This country is not independent</span>
          )}
          <br/>For more information on this country, follow the <a href={'https://en.wikipedia.org/wiki/'+data.name} >wikipedia page</a>!
          </p>
          </section>
          {/* <img id='img' src={data.coatOfArms}/> */}
        </section>
        
    )
}   

export default InformationPage;