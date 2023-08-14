import React, { useState } from 'react';

function Calculator(props){

  const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration':10
  }

  const [userInput, setUserInput] = useState({initialUserInput})

  function handleSubmit(event){
    event.preventDefault();
    props.calculate(userInput);
  }

  function resetHandler(){
    setUserInput(initialUserInput)
  }

  function handleInput(event){
    const {id, value} = event.target;
    setUserInput((prevValue) => { 
      return ( 
      {...prevValue, [id]: +value}
      )})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={userInput['current-savings']} onChange={handleInput}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={userInput['yearly-contribution']} onChange={handleInput} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={userInput['expected-return']} onChange={handleInput}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={userInput.duration} onChange={handleInput}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}

export default Calculator;