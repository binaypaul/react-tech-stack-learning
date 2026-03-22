const Results = ({scoreProp, onRestartBtnCLick}) => {
    return (
        <>
            <h2>Quiz Completed!</h2>
            <p>Your score: {scoreProp}</p>
            <div className="nav-buttons">
                <button onClick={onRestartBtnCLick}>Restart Quiz</button>
            </div>
        </>
    )
}

export default Results;