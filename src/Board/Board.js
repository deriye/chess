import React, { useState } from 'react';
import style from './Board.module.css';
import styled from 'styled-components';
import Square from '../Square/Square';


/*
♜♞♟♛♚♝♞♜
♟♟♟♟♟♟♟♟

♙♙♙♙♙♙♙♙
♖♘♗♕♔♗♘♖
*/



const BoardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: fit-content;
border: 15px solid #B3804D;
`
const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


/*
{
    8: { a: }
}
*/

const Board = () => {
    const [board, setBoard] = useState({
        8: {a: "♜", b: "♞", c: "♝", d: "♛", e: "♚", f: "♝", g: "♞", h: "♜"},
        7: {a: "♟", b: "♟", c: "♟", d: "♟", e: "♟", f: "♟", g: "♟", h: "♟"},
        6: {a: "",   b: "",   c: "",   d: "",  e: "",   f: "",   g: "",   h: ""},
        5: {a: "",   b: "",   c: "",   d: "",  e: "",   f: "",   g: "",   h: ""},
        4: {a: "",   b: "",   c: "",   d: "",  e: "",   f: "",   g: "",   h: ""},
        3: {a: "",   b: "",   c: "",   d: "",  e: "",   f: "",   g: "",   h: ""},
        2: {a: "♙", b: "♙", c: "♙", d: "♙", e: "♙", f: "♙", g: "♙", h: "♙"},
        1: {a: "♖", b: "♘", c: "♗", d: "♕", e: "♔", f: "♗", g: "♘", h: "♖"}
    });

    const getSquare = (letter, number) => {
        console.log(board[number][letter])
        return board[number][letter]
    }

    const testHandleClick = () => {
        var boardCopy = {...board};

        boardCopy[3]['a'] = boardCopy[2]['a'];
        boardCopy[2]['a'] = ""

        setBoard(boardCopy);
    }

    const findPossibleMoves = (piece) => {

    }

    const showPossibleMoves = (location, piece) => {

    }
    
    /* 
    INPUT:
    location: { "letter", number }

    OUTPUT:
    Array of locations
    */
    const findPossibleLocationsForPawn = (location, board, player) => {
        
    }

    const findPossibleForKnight = (location, board) => {

    }

    return (
        <BoardContainer>
            <Row>
                <Square piece={getSquare('a',8)} color="white"/>
                <Square piece={getSquare('b',8)} />
                <Square piece={getSquare('c',8)} color="white"/>
                <Square piece={getSquare('d',8)} />
                <Square piece={getSquare('e',8)} color="white"/>
                <Square piece={getSquare('f',8)} />
                <Square piece={getSquare('g',8)} color="white"/>
                <Square piece={getSquare('h',8)} />
            </Row>
            <Row>
                <Square piece={getSquare('a',7)} clicked/>
                <Square piece={getSquare('b',7)} color="white"/>
                <Square piece={getSquare('c',7)} />
                <Square piece={getSquare('d',7)} color="white"/>
                <Square piece={getSquare('e',7)} />
                <Square piece={getSquare('f',7)} color="white"/>
                <Square piece={getSquare('g',7)} />
                <Square piece={getSquare('h',7)} color="white"/>
            </Row>
            <Row>
                <Square piece={getSquare('a',6)} color="white" highlight/>
                <Square piece={getSquare('b',6)} />
                <Square piece={getSquare('c',6)} color="white"/>
                <Square piece={getSquare('d',6)} />
                <Square piece={getSquare('e',6)} color="white"/>
                <Square piece={getSquare('f',6)} />
                <Square piece={getSquare('g',6)} color="white"/>
                <Square piece={getSquare('h',6)} />
            </Row>
            <Row>
                <Square piece={getSquare('a',5)} />
                <Square piece={getSquare('b',5)} color="white"/>
                <Square piece={getSquare('c',5)} />
                <Square piece={getSquare('d',5)} color="white"/>
                <Square piece={getSquare('e',5)} />
                <Square piece={getSquare('f',5)} color="white"/>
                <Square piece={getSquare('g',5)} />
                <Square piece={getSquare('h',5)} color="white"/>
            </Row>
            <Row>
                <Square piece={getSquare('a',4)} color="white"/>
                <Square piece={getSquare('b',4)} />
                <Square piece={getSquare('c',4)} color="white"/>
                <Square piece={getSquare('d',4)} />
                <Square piece={getSquare('e',4)} color="white"/>
                <Square piece={getSquare('f',4)} />
                <Square piece={getSquare('g',4)} color="white"/>
                <Square piece={getSquare('h',4)} />
            </Row>
            <Row>
                <Square piece={getSquare('a',3)} />
                <Square piece={getSquare('b',3)} color="white"/>
                <Square piece={getSquare('c',3)} />
                <Square piece={getSquare('d',3)} color="white"/>
                <Square piece={getSquare('e',3)} />
                <Square piece={getSquare('f',3)} color="white"/>
                <Square piece={getSquare('g',3)} />
                <Square piece={getSquare('h',3)} color="white"/>
            </Row>
            <Row>
                <Square piece={getSquare('a',2)} color="white"/>
                <Square piece={getSquare('b',2)} />
                <Square piece={getSquare('c',2)} color="white"/>
                <Square piece={getSquare('d',2)} />
                <Square piece={getSquare('e',2)} color="white"/>
                <Square piece={getSquare('f',2)} />
                <Square piece={getSquare('g',2)} color="white"/>
                <Square piece={getSquare('h',2)} />
            </Row>
            <Row>
                <Square piece={getSquare('a',1)} />
                <Square piece={getSquare('b',1)} color="white"/>
                <Square piece={getSquare('c',1)} />
                <Square piece={getSquare('d',1)} color="white"/>
                <Square piece={getSquare('e',1)} />
                <Square piece={getSquare('f',1)} color="white"/>
                <Square piece={getSquare('g',1)} />
                <Square piece={getSquare('h',1)} color="white"/>
            </Row>
            {/*<Row>
                <input type="text" />
            </Row>
            <Row>
                <button onClick={testHandleClick}>Click me</button>
            </Row>*/}
        </BoardContainer>
    )
}

export default Board;