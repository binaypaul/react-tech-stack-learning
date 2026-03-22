import { useState } from "react";
import Results from "./Results";

const Quiz = () => {
    const questionBank = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Paris", "London", "Rome"],
        "answer": "Paris"
    },
    {
        question: "Which language is used for web apps?",
        options: ["PHP", "Python", "Javascript", "All"],
        answer: "All",
    },
    {
        question: "What does JSX stand for?",
        options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple eXample",
        "None of the above",
        ],
        answer: "JavaScript XML",
    },
    ]
    const [qbIdx, setQbIdx] = useState(0);
    const [optionSelected, setOptionSelected] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleSelectOption = (option) => {
        setOptionSelected(prevState => {
            prevState[qbIdx] = option
            return [...prevState]
        });
    }

    const onPrevBtnCLick = () => {
        setQbIdx(prevState => prevState == 0 ? prevState : prevState-1)
    }

    const onNextBtnCLick = () => {
        setQbIdx(prevState => {
            if(prevState === questionBank.length-1) {
                setIsQuizFinished(true)
                return prevState
            } else {
                return prevState+1
            }
        })
    }

    const onRestartBtnCLick = () => {
        setQbIdx(0)
        setOptionSelected([])
        setIsQuizFinished(false)
    }

    if(isQuizFinished) {
        let score = 0
        optionSelected.map((option, idx)=> {
            if(option=== questionBank[idx].answer) {
                score++
            }
        });

        return (
            <Results scoreProp={score} onRestartBtnCLick = {onRestartBtnCLick}/>
        );
    } else {
        return (
            <div>
                <>
                    <div className='question'>
                        <p>Question {qbIdx+1}. {questionBank[qbIdx].question}</p>  
                    </div>

                    {questionBank[qbIdx].options.map((option, idx)=>(
                        <button key={idx} className={"option" + (optionSelected[qbIdx]=== option ? " selected" : "")} onClick={()=> handleSelectOption(option)}>
                            {option}
                        </button>
                    ))}
                    <>Selected option: {optionSelected[qbIdx]}</>
                </>
                <div className="nav-buttons">
                    <button disabled={qbIdx===0} onClick={onPrevBtnCLick}>Previous</button>
                    <button onClick={onNextBtnCLick}>{qbIdx===questionBank.length-1 ? "Finish Quiz" : "Next"}</button>
                </div>
            </div>
        );
    }
}

export default Quiz;