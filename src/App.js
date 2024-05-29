import OnBoard from './components/OnBoard';
import './App.css';

const rows = [
  ['1', '4', '7', '-'],
  ['2', '5', '8', '*'],
  ['3', '6', '9', '+'],
  ['<=', '/', '^', '=']
];

function App() {

  function buttonSelected(rowIndex, colIndex){
    let value = rows[rowIndex][colIndex];
    console.log(value);
    return value;
  }



  return (
    <>
      <OnBoard buttonSelected={buttonSelected}/>
    </>
  )
}

export default App;
