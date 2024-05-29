import OnBoard from './components/OnBoard';
import ResultScreen from './components/ResultScreen';

import { useState } from 'react';
import './App.css';

const rows = [
  ['1', '4', '7', '-'],
  ['2', '5', '8', '*'],
  ['3', '6', '9', '+'],
  ['<=', '/', '^', '=']
];

function App() {
  const [ expression, setExpression ] = useState(''); 


  function buttonSelected(rowIndex, colIndex){
    let value = rows[rowIndex][colIndex];

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
