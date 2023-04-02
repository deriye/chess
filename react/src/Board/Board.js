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

const getSquare = (pieceString, colorString, clickedSquareString, handleClick, squareAddress, availableMoves) => {
    return <Square
                piece={pieceString}
                color={colorString}
                clicked={clickedSquareString == squareAddress}
                highlight={ availableMoves != null ? availableMoves.includes(squareAddress) : null}
                handleClick={() => handleClick(squareAddress[0], squareAddress[1])} />
}

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

    const [clickedSquare, setClickedSquare] = useState("")

    const [availableMoves, setAvailableMoves] = useState([]);

    const getPiece = (letter, number) => {
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

    const handleClick = (letter, number) => {
        setAvailableMoves([])
        setClickedSquare(letter + number)
        showPossibleMoves(letter, number)
    }

    const showPossibleMoves = (letter, number) => {
        var piece = getPiece(letter, number);
        
        if (piece == "♙") {
            setAvailableMoves([letter + (parseInt(number)+1)])
        }
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
                {getSquare(getPiece('a',8), "white", clickedSquare, handleClick, "a8", availableMoves)}
                {getSquare(getPiece('b',8), "black", clickedSquare, handleClick, "b8", availableMoves)}
                {getSquare(getPiece('c',8), "white", clickedSquare, handleClick, "c8", availableMoves)}
                {getSquare(getPiece('d',8), "black", clickedSquare, handleClick, "d8", availableMoves)}
                {getSquare(getPiece('e',8), "white", clickedSquare, handleClick, "e8", availableMoves)}
                {getSquare(getPiece('f',8), "black", clickedSquare, handleClick, "f8", availableMoves)}
                {getSquare(getPiece('g',8), "white", clickedSquare, handleClick, "g8", availableMoves)}
                {getSquare(getPiece('h',8), "black", clickedSquare, handleClick, "h8", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',7), "black", clickedSquare, handleClick, "a7", availableMoves)}
                {getSquare(getPiece('b',7), "white", clickedSquare, handleClick, "b7", availableMoves)}
                {getSquare(getPiece('c',7), "black", clickedSquare, handleClick, "c7", availableMoves)}
                {getSquare(getPiece('d',7), "white", clickedSquare, handleClick, "d7", availableMoves)}
                {getSquare(getPiece('e',7), "black", clickedSquare, handleClick, "e7", availableMoves)}
                {getSquare(getPiece('f',7), "white", clickedSquare, handleClick, "f7", availableMoves)}
                {getSquare(getPiece('g',7), "black", clickedSquare, handleClick, "g7", availableMoves)}
                {getSquare(getPiece('h',7), "white", clickedSquare, handleClick, "h7", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',6), "white", clickedSquare, handleClick, "a6", availableMoves)}
                {getSquare(getPiece('b',6), "black", clickedSquare, handleClick, "b6", availableMoves)}
                {getSquare(getPiece('c',6), "white", clickedSquare, handleClick, "c6", availableMoves)}
                {getSquare(getPiece('d',6), "black", clickedSquare, handleClick, "d6", availableMoves)}
                {getSquare(getPiece('e',6), "white", clickedSquare, handleClick, "e6", availableMoves)}
                {getSquare(getPiece('f',6), "black", clickedSquare, handleClick, "f6", availableMoves)}
                {getSquare(getPiece('g',6), "white", clickedSquare, handleClick, "g6", availableMoves)}
                {getSquare(getPiece('h',6), "black", clickedSquare, handleClick, "h6", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',5), "black", clickedSquare, handleClick, "a5", availableMoves)}
                {getSquare(getPiece('b',5), "white", clickedSquare, handleClick, "b5", availableMoves)}
                {getSquare(getPiece('c',5), "black", clickedSquare, handleClick, "c5", availableMoves)}
                {getSquare(getPiece('d',5), "white", clickedSquare, handleClick, "d5", availableMoves)}
                {getSquare(getPiece('e',5), "black", clickedSquare, handleClick, "e5", availableMoves)}
                {getSquare(getPiece('f',5), "white", clickedSquare, handleClick, "f5", availableMoves)}
                {getSquare(getPiece('g',5), "black", clickedSquare, handleClick, "g5", availableMoves)}
                {getSquare(getPiece('h',5), "white", clickedSquare, handleClick, "h5", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',4), "white", clickedSquare, handleClick, "a4", availableMoves)}
                {getSquare(getPiece('b',4), "black", clickedSquare, handleClick, "b4", availableMoves)}
                {getSquare(getPiece('c',4), "white", clickedSquare, handleClick, "c4", availableMoves)}
                {getSquare(getPiece('d',4), "black", clickedSquare, handleClick, "d4", availableMoves)}
                {getSquare(getPiece('e',4), "white", clickedSquare, handleClick, "e4", availableMoves)}
                {getSquare(getPiece('f',4), "black", clickedSquare, handleClick, "f4", availableMoves)}
                {getSquare(getPiece('g',4), "white", clickedSquare, handleClick, "g4", availableMoves)}
                {getSquare(getPiece('h',4), "black", clickedSquare, handleClick, "h4", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',3), "black", clickedSquare, handleClick, "a3", availableMoves)}
                {getSquare(getPiece('b',3), "white", clickedSquare, handleClick, "b3", availableMoves)}
                {getSquare(getPiece('c',3), "black", clickedSquare, handleClick, "c3", availableMoves)}
                {getSquare(getPiece('d',3), "white", clickedSquare, handleClick, "d3", availableMoves)}
                {getSquare(getPiece('e',3), "black", clickedSquare, handleClick, "e3", availableMoves)}
                {getSquare(getPiece('f',3), "white", clickedSquare, handleClick, "f3", availableMoves)}
                {getSquare(getPiece('g',3), "black", clickedSquare, handleClick, "g3", availableMoves)}
                {getSquare(getPiece('h',3), "white", clickedSquare, handleClick, "h3", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',2), "white", clickedSquare, handleClick, "a2", availableMoves)}
                {getSquare(getPiece('b',2), "black", clickedSquare, handleClick, "b2", availableMoves)}
                {getSquare(getPiece('c',2), "white", clickedSquare, handleClick, "c2", availableMoves)}
                {getSquare(getPiece('d',2), "black", clickedSquare, handleClick, "d2", availableMoves)}
                {getSquare(getPiece('e',2), "white", clickedSquare, handleClick, "e2", availableMoves)}
                {getSquare(getPiece('f',2), "black", clickedSquare, handleClick, "f2", availableMoves)}
                {getSquare(getPiece('g',2), "white", clickedSquare, handleClick, "g2", availableMoves)}
                {getSquare(getPiece('h',2), "black", clickedSquare, handleClick, "h2", availableMoves)}
            </Row>
            <Row>
                {getSquare(getPiece('a',1), "black", clickedSquare, handleClick, "a1", availableMoves)}
                {getSquare(getPiece('b',1), "white", clickedSquare, handleClick, "b1", availableMoves)}
                {getSquare(getPiece('c',1), "black", clickedSquare, handleClick, "c1", availableMoves)}
                {getSquare(getPiece('d',1), "white", clickedSquare, handleClick, "d1", availableMoves)}
                {getSquare(getPiece('e',1), "black", clickedSquare, handleClick, "e1", availableMoves)}
                {getSquare(getPiece('f',1), "white", clickedSquare, handleClick, "f1", availableMoves)}
                {getSquare(getPiece('g',1), "black", clickedSquare, handleClick, "g1", availableMoves)}
                {getSquare(getPiece('h',1), "white", clickedSquare, handleClick, "h1", availableMoves)}
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