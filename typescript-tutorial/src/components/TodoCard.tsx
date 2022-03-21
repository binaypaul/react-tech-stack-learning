import React from "react"
import { Todo } from "../models/Todo"
import { MdDeleteForever, MdDone, MdEditNote } from 'react-icons/md';

interface TodoCardProps {
    todo: Todo;
    handleEditBtnClick: (todo: Todo) => void;
    handleEditBtnBlur: (todo: Todo) => void;
    handleEditBtnChange: (e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => void;
    handleDoneBtn: (todo: Todo) => void;
    handleDeleteBtn: (todo: Todo) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, handleEditBtnClick, handleEditBtnBlur, handleEditBtnChange, handleDoneBtn, handleDeleteBtn }) => {
    return (
        <div
            className='relative py-2 px-5 m-1 h-[80px] bg-yellow-200 border-0 rounded-lg flex flex-row'>
            <>
                {!todo.isEditable &&
                    <p
                        className={'w-[98%] ' + (todo.isDone ? 'line-through text-slate-500' : '')}>
                        {todo?.todo}
                    </p>
                }

                {todo.isEditable &&
                    <input type='text'
                        onBlur={(e) => handleEditBtnBlur(todo)}
                        onChange={(e) => handleEditBtnChange(e, todo)}
                        className='w-[98%] no-underline text-black'
                        value={todo?.todo} />

                }
            </>

            <div
                className='w-max flex flex-col space-y-2'>
                {/* Edit button */}
                <button type='button' onClick={(e) => handleEditBtnClick(todo)}>
                    <MdEditNote className='todo-card-btn' />
                </button>

                {/* Done button */}
                <button type='button' onClick={(e) => handleDoneBtn(todo)}>
                    <MdDone className='todo-card-btn' />
                </button>

                {/* Delete button */}
                <button type='button' onClick={(e) => handleDeleteBtn(todo)}>
                    <MdDeleteForever className='todo-card-btn' />
                </button>
            </div>
        </div>
    );
}
export default TodoCard;