import { useRef } from "react";

interface InputFeildProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleTodoGoBtn: (e: React.FormEvent<HTMLFormElement>) => void,
}
///////////////////////////////////////////////////////////////////////////////////////

const InputFeild: React.FC<InputFeildProps> = ({
    todo,
    setTodo,
    handleTodoGoBtn
}) => {
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <form
            onSubmit={(e) => {
                handleTodoGoBtn(e);
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                inputRef.current?.blur; //this doesn't work for some unknown reason.
            }}
            className='flex relative w-96 items-center mt-10'>
            <>
                <input
                    autoFocus
                    ref={inputRef}
                    type='input'
                    placeholder='Enter a task'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='w-full p-2 pl-4 pt-4 border-1 text-lg rounded-full absolute shadow-inner shadow-slate-900 focus:shadow-2xl focus:shadow-black focus:outline-none' />
                <button
                    type='submit'
                    className='z-0 absolute left-[340px] p-1 pt-2 w-10 h-10 bg-sky-500 rounded-full shadow-md transition-all hover:shadow-lg hover:shadow-slate-500 hover:bg-sky-400 active:scale-[0.8] active:shadow-md'>
                    New
                </button>
            </>

        </form>
    )
}
export default InputFeild;