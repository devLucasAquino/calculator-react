import OnBoard from './components/OnBoard';
import ResultScreen from './components/ResultScreen';

import { rows } from './data.jsx'

import { useState } from 'react';



function App() {
  const [ expression, setExpression ] = useState('');


  function buttonSelected(rowIndex, colIndex){
    let value = rows[rowIndex][colIndex];

    if(value === '<='){

      expression.length !== 0 ? 
        setExpression(expression.slice(0, -1)) : setExpression('');

    }else if(value === '='){

      if(expression.includes('%')){
        expression.replace(/%/g, '*')
      }

      const getExpression = expression.join(',');
      setExpression([eval(getExpression.replace(/,/g, ''))])


    }else{

        setExpression( (prevExpression) => {
          const updatedExpression = [...prevExpression,value];
          return updatedExpression;

        });
      
      
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
