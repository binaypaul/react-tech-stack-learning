import { useState } from "react";

const UseState = () => {

    const [counter, setCounter] = useState(0);

    const plusBtnHandler = () => {
        setCounter(counter => counter + 1);
    }

    const minusBtnHandler = () => {
        setCounter(counter => counter - 1);
    }

    return (
        <>
            <button className="w-10 h-10 bg-blue-500 rounded-lg shadow-lg shadow-slate-500" type="button" onClick={minusBtnHandler} >-</button>
            <span className="p-3 text-black">{counter}</span>
            <button className="w-10 h-10 bg-blue-500 rounded-lg shadow-lg shadow-slate-500" type="button" onClick={plusBtnHandler} >+</button>
        </>
    );
}

export default UseState;