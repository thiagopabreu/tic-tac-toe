import { useEffect, useState } from "react"
import Field from "./field"

const Box = () => {

    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()
    const combos = {
        vertical: [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ],
        horizontal: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ],
        cross: [
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    const checkWinner = (squares) => {
        for(let combo in combos) {
            combos[combo].forEach((pattern) => {
                if(squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') {
                    
                } else if(squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]] ) {
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }

    const handleClick = (num) => {
        let squares = [...cells]
        while(squares[num] == '')
        {
            if(turn == 'X') {
                squares[num] = 'X'
                setTurn('O')
            } else {
                squares[num] = 'O'
                setTurn('X')
            }
        }
        console.log(squares)
        setCells(squares)
        checkWinner(squares)

    }

    const handleRestartGame = () => {
        setTurn('X')
        setCells(Array(9).fill(''))
        setWinner()
    }

    const Cell = ({ num }) => {
        return <td className="field" onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    return (
        <>
            <a className="words">Turn: {turn}</a>
            <br/>
            <br/>   
            <div className="container">
            <table>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>

            {winner && (
                <>
                    <p className="words">{winner} is the Winner</p>
                    <button className="buttons"onClick={() => handleRestartGame()}>Play Again</button>
                </>
            )}
        </div>
        </>
        
    )
}

export default Box