const rows = [
    ['1', '4', '7', '-'],
    ['2', '5', '8', '*'],
    ['3', '6', '9', '+'],
    ['<=', '/', '^', '=']
  ];

export default function OnBoard({buttonSelected}){

    return(
        <ol className="board">
            {rows.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((number, colIndex) => <li key={colIndex}>           
                            <button className="onBoardButtons"
                            onClick={() => buttonSelected(rowIndex, colIndex)}>
                                {number}
                            </button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}