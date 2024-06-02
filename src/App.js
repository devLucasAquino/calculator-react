import OnBoard from './components/OnBoard';
import ResultScreen from './components/ResultScreen';

import { rows } from './data.js'

import { useState } from 'react';
import './App.css';



function App() {
  const [ expression, setExpression ] = useState(''); 


  function buttonSelected(rowIndex, colIndex){
    let value = rows[rowIndex][colIndex];

    console.log(`${colIndex} && ${rowIndex}`)

    setExpression( (prevExpression) => {
      const updatedExpression = [ ...prevExpression , 
        value 
      ];

        return updatedExpression;
      
    });
  }

  return (
    <>
      <ResultScreen expression={expression}/>
      <OnBoard buttonSelected={buttonSelected}/>
    </>
  )
}

export default App;
