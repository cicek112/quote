
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    updateQuote()
  }, []);

  const [quote,setQuote]=useState("")
  const [writer,setWriter]=useState("")

  const [color,setColor]=useState("#FB6964")
  

  async function updateQuote() {

    let colors=["#475c6c","#f2476a","	#eb2d3a","#FB6964","#77B1A9"]
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      setQuote(data.content)
      setWriter(data.author)
    } else {
      setQuote ("An error occured")
      console.log(data);
    }
  }

  return (
    <div className="App" style={{"background-color":`${color}`}}>
      <div className='main'>
        <p className="text" style={{"color":`${color}`}}>
          <FontAwesomeIcon icon={faQuoteLeft} style={{"font-size":"1.3em" , "margin-right":"0.4em" , "padding-top":"0.1em"}} />
          {quote}
        </p>
        <p className='writer' style={{"color":`${color}`}}>- {writer}</p>
        <div className='new' style={{"background-color":`${color}`}} onClick={updateQuote}>New Quote</div>
      </div>
    </div>
  );
}

export default App;
