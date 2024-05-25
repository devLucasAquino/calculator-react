export default function OnBoard(){

    const rows = [
        ['1', '4', '7', '-'],
        ['2', '5', '8', '*'],
        ['3', '6', '9', '+'],
        ['<=', '/', '^', '=']
    ];


    return(
        <ol className="board">
            {rows.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((number, colIndex) => <li key={colIndex}>           
                            <button className="onBoardButtons">
                                {number}
                            </button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}