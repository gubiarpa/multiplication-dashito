import React, { useEffect, useState } from "react";

const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export const Multiplication = () => {
    
    const [factorTable, setFactorTable] = useState(0);
    const [factorRandom, setFactorRandom] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    
    const shuffleFactors = () => {
        setFactorTable(getRandomInt(2, 12)); // random
        setFactorRandom(getRandomInt(2, 5)); // tabla máxima
    }
    
    const handleNextClick = (e) => {
        shuffleFactors();
        setShowAnswer(false);
    }
    
    const handleShowAnswerClick = (e) => {
        setShowAnswer(!showAnswer);
    }

    useEffect(() => {
        shuffleFactors();
    }, [])


    return (
        <>
            <div>
                <span className="big-numbers">
                    {factorTable} x {factorRandom} = {!showAnswer ? "?" : (factorTable * factorRandom)}
                </span>
            </div>
            <div>
                <button className="median-numbers" onClick={handleShowAnswerClick}>
                    Ver
                </button>
                <button className="median-numbers" onClick={handleNextClick}>
                    Siguiente
                </button>
            </div>
        </>
    )
}