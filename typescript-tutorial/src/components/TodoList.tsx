import React from "react";
import { Todo } from "../models/Todo";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  handleSortByOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,

};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, handleSortByOptionChange }) => {

  //Button Handlers
  //Card Double Click handler
  const handleCardDoubleClick = (todo: Todo) => {
    if (!todo.isEditable) {
      todo.isEditable = true;
      setTodos(tds => tds.map((td) => td.createdDate === todo.createdDate ? todo : td));
    }
  }
  //Edit button Click handler
  const handleEditBtnClick = (todo: Todo) => {
    if (!todo.isEditable) {
      todo.isEditable = true;
      setTodos(tds => tds.map((td) => td.createdDate === todo.createdDate ? todo : td));
    }
  }
  //Edit button Blur handler
  const handleEditBtnBlur = (todo: Todo) => {
    if (todo.isEditable) {
      todo.isEditable = false;
      todo.modifiedDate = Date.now();
      setTodos(tds => tds.map((td) => td.createdDate === todo.createdDate ? todo : td));
    }
  }
  //Edit button Change handler
  const handleEditBtnChange = (e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
    if (todo.isEditable) {
      setTodos(tds => tds.map((td) => td.createdDate === todo.createdDate ? todo = { ...todo, todo: e.target.value } : td));
    }
  }

  //Done button handler
  const handleDoneBtn = (todo: Todo) => {
    todo.isDone = !todo.isDone;
    todo.isDone ?
      setTodos(tds => [...tds.filter(td => td.createdDate !== todo.createdDate), todo]) :
      setTodos(tds => [todo, ...tds.filter(td => td.createdDate !== todo.createdDate)]);
  }

  //Delete button handler
  const handleDeleteBtn = (todo: Todo) => {
    setTodos(tds => tds.filter(td => td.createdDate !== todo.createdDate))
  }

  return (
    <>
      <div className='relative left-96'>
        <p
          className='text-white'>
          Sort By
        </p>
        <select
          onChange={(e) => handleSortByOptionChange(e)}
          className='focus:outline-none'>
          <option value='Created Date'>Created Date</option>
          <option value='Modified Date'>Modified Date</option>
        </select>
      </div>
      <div className='flex flex-col w-3/5 mt-[70px]'>
        {todos.map((todo) =>
          <TodoCard
            key={todo.createdDate}
            todo={todo}
            handleCardDoubleClick={handleCardDoubleClick}
            handleEditBtnClick={handleEditBtnClick}
            handleEditBtnChange={handleEditBtnChange}
            handleEditBtnBlur={handleEditBtnBlur}
            handleDoneBtn={handleDoneBtn}
            handleDeleteBtn={handleDeleteBtn}
          />
        )}
      </div>
    </>
  )
}
export default TodoList