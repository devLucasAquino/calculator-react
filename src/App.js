import OnBoard from './components/OnBoard';
import ResultScreen from './components/ResultScreen';

import { rows } from './data.jsx'

import { useState } from 'react';
import './App.css';



function App() {
  const [ expression, setExpression ] = useState('');


  function buttonSelected(rowIndex, colIndex){
    let value = rows[rowIndex][colIndex];

    if(value === '<='){
      setExpression(expression.slice(0, -1));

    }else{

      if(value === 'mod'){

        let str = expression + '';

        let n = parseInt(str.replace(/,/g, ''))

        setExpression(Math.abs(n))

        
      }else{

        setExpression( (prevExpression) => {
          const updatedExpression = [...prevExpression,value];
          return updatedExpression;

        });
      }
      
    }
  }

  return (
    <div className='App'>
      <div className='aux'>
        <ResultScreen expression={expression}/>
      </div>
      
      <OnBoard buttonSelected={buttonSelected}/>
    </div>
  )
}

export default App;
