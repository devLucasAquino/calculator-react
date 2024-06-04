import { rows } from '../data.js';

export default function OnBoard({buttonSelected}){

    return(
        <ol className="board">
            {rows.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((number, colIndex) => <li key={colIndex}>           
                            <button className="onBoardButtons"
                            style={{
                                backgroundColor: number === '=' && '#a4ea4f',
                                height: number === '=' && '8rem'

                            }}
                            onClick={() => buttonSelected(rowIndex, colIndex)}>
                                {number}
                            </button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}
