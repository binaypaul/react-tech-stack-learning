const Results = ({score, onRestartBtnCLick}) => {
    return (
        <>
            <h2>Quiz Completed!</h2>
            <p>Your score: {score}</p>
            <div className="nav-buttons">
                <button onClick={onRestartBtnCLick}>Restart Quiz</button>
            </div>
        </>
    )
}

export default Results;