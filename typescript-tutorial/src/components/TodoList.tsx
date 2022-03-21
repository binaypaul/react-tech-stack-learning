import React from "react";
import { Todo } from "../models/Todo";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

  //Button Handlers
  //Edit button Click handler
  const handleEditBtnClick = (todo: Todo) => {
    if (!todo.isEditable) {
      todo.isEditable = true;
      setTodos(tds => tds.map((td) => td.id === todo.id ? todo : td));
    }
  }
  //Edit button Blur handler
  const handleEditBtnBlur = (todo: Todo) => {
    if (todo.isEditable) {
      todo.isEditable = false;
      setTodos(tds => tds.map((td) => td.id === todo.id ? todo : td));
    }
  }
  //Edit button Change handler
  const handleEditBtnChange = (e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
    if (todo.isEditable) {
      setTodos(tds => tds.map((td) => td.id === todo.id ? todo = { ...todo, todo: e.target.value } : td));
    }
  }

  //Done button handler
  const handleDoneBtn = (todo: Todo) => {
    todo.isDone = !todo.isDone;
    todo.isDone ?
      setTodos(tds => [...tds.filter(td => td.id !== todo.id), todo]) :
      setTodos(tds => [todo, ...tds.filter(td => td.id !== todo.id)]);
  }

  //Delete button handler
  const handleDeleteBtn = (todo: Todo) => {
    setTodos(tds => tds.filter(td => td.id !== todo.id))
  }

  return (
    <div className='flex flex-col w-3/5 mt-[70px]'>
      {todos.map((todo) =>
        <TodoCard
          key={todo.id}
          todo={todo}
          handleEditBtnClick={handleEditBtnClick}
          handleEditBtnChange={handleEditBtnChange}
          handleEditBtnBlur={handleEditBtnBlur}
          handleDoneBtn={handleDoneBtn}
          handleDeleteBtn={handleDeleteBtn}
        />
      )}
    </div>
  )
}
export default TodoList