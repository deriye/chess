import React, { useState } from "react";
import styled from "styled-components";

const SquareContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;    
height: 50px;
width: 50px;
margin: -1px;
font-size: 35px;
background-color: ${ probs =>   probs.color == "white" ? "#D1B394"
                                : probs.color == "black" ? "#C59E77"
                                : "#C59E77" };
border: 1px solid #BA8C5E;
box-shadow: ${ probs => probs.highlight ? "inset 0 0 15px #0f0" :
                        probs.clicked ? "inset 0 0 10px #311b0b;"
                        :   ""};
filter:  ${ probs => probs.highlight ? "grayscale(50%)" : ""};
`

const Square = (probs) => {
    /*const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }*/

    return (
        <SquareContainer
            color={probs.color}
            highlight={probs.highlight}
            clicked={probs.piece != "" && probs.clicked}
            onClick={probs.handleClick}
        >
            {probs.piece}
        </SquareContainer>
    )
}

export default Square;