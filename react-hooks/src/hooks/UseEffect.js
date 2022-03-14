import { useEffect, useState } from "react";

const UseEffect = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let timeout = setTimeout(() => {
            document.title = `Counter value is ${counter}`;
        }, 2000);

        return (
            ()=> clearTimeout(timeout)
        );
    }, [counter]);

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
            <p className='p-2'> useEffect's affect can be seen in the document title.</p>
        </>
    );
}

export default UseEffect;