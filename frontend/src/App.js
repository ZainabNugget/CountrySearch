import './App.css';

function App() {
  return (
    <div id='page'>
      {/* Below this will be the search bar, where the user will input the country */}
    <section className="searchBar">
        <h3 id='greetings'>Greetings! Search your country!</h3>
        <input id='search' type='text' placeholder="Type your string"/>
    </section>
    {/* After this button is pressed, the country will be processed, then the information will be displayed */}
    <button id='btn'>Search</button>
    {/* Below here, in the article section, info about the country will be placed */}
    <article id='info-page'>
      <section id='info-header'> 
        <h1>Country Name</h1>
        <img alt='flag of country'/>
      </section>
    </article>
    </div>
  );
}

export default App;
