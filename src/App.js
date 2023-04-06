import React, { useState } from 'react';
import axios from 'axios';
import {Routes,Route,} from 'react-router-dom';
import './App.css'

//Compenets
import Form from './Compenents/Form'; 
import Summary from './Compenents/Summary';
import Header from './Compenents/Header';
import Navbar from './Compenents/Navbar';
import About from './Compenents/About';
import Footer from './Compenents/Footer';

function App() {
  
  // Storing the API key in a constant
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
  
  // Setting up state variables
  const [summary, setSummary] = useState('');
  const [summaryContainer, setSummaryContainer] = useState(true);
  const [ apiError, setApiError ] = useState(false);
  const [ userInput, setUserInput ] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Event handler for changes in the input field
  const handleChange = (event) => {
    if (event.target.value === '') {
      setSummary('');
    }
    setUserInput(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput === '') {
      setSummary('');
      setErrorMessage('Please enter text to summarize.');
    } else {
      setSummaryContainer(true);
      summarizeText();
    }
  };

  // Calling the OpenAI API to generate the text summary
  const summarizeText = () => {
    axios.post(
      `https://api.openai.com/v1/engines/text-davinci-002/completions`,
      {
        prompt: `Please summarize the following text in a single sentence: ${userInput}`,
        max_tokens: 50,
        n: 1,
        stop: ".",
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        setSummary(response.data.choices[0].text.trim());
        setApiError(false);
      })
      .catch((error) => {
        console.error(`An error occurred: ${error}`);
        setApiError(true);
      });
  };
  
  // Rendering the app
  return (
    <main className='app'>
      <div className="wrapper">

        <Navbar/>
        <Routes>
          <Route path="/" element={ 
            <div>
              <Header/>
              
              <Form 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                typedValue={userInput} 
                formError={apiError}
              />

              <Summary 
                summary={summary} 
                summaryContainer={summaryContainer} 
              />
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          }/>

          <Route path="/about" element={<About />} /> 
        </Routes>

      </div>

      <Footer/>
    </main>
  );
}

export default App;