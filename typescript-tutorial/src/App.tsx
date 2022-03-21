import { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';

//typescript
// let personName: unknown;
// let name: string = 'Binay';
// let age: number | string = 8;
// let isStudent: boolean = true;
// let hobbies: string[] = ['a', 'b'];
// let role: [number, string] = [8, 's'];
// let printName: (name: string) => never;

// type X = {
//   a: number,
//   b: string
// }

// type Y = X & {
//   c: boolean,
//   d: null
// }

// let y: Y = {
//   a: 1,
//   b: 'B',
//   c: true,
//   d: null
// }

// interface Person {
//   name: string,
//   age?: number
// }

// interface Guy extends Person, X {
//   profession: string
// }
//


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleTodoGoBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([{ id: Date.now(), todo, isDone: false, isEditable: false }, ...todos]);
    }
  }


  return (
    <div className="w-screen h-screen flex flex-col items-center bg-blue-600 " style={{ fontFamily: 'Neucha' }}>
      <span className="uppercase text-4xl mt-8 text-white z-10">
        Taskify
      </span>
      <InputFeild todo={todo} setTodo={setTodo} handleTodoGoBtn={handleTodoGoBtn} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
