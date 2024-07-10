import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const resultData = calculateInvestmentResults(userInput);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">yeah. {userInput.duration} years?</p>
      )}
      {inputIsValid && (
        <Results userInput={userInput} annualData={resultData} />
      )}
    </>
  );
}

export default App;
