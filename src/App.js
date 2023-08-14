import React, { useState } from 'react';
import Calculator from "./components/Calculator";
import YearlyTable from "./components/YearlyTable";
import Header from './components/Header';

function App() {
  const [userInput, setUserInput] = useState(null);


  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = []; // per-year results

  if (userInput){
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <Header/>
      <Calculator calculate={calculateHandler}/>
      {userInput ? <YearlyTable data={yearlyData} initial={userInput['current-savings']}/> : <p style={{textAlign: 'center'}}>No data is available</p> }
    </div>
  );
}

export default App;
