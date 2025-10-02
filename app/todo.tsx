import React from 'react';
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }: TodoItemProps) => {
  return (
    <div className="flex items-center my-2 w-full gap-2">
      <div
        className={`flex-1 p-3 border border-gray-400 cursor-pointer transition 
          ${todo.completed 
            ? 'line-through text-gray-700 bg-green-100 flex justify-between items-center rounded-md' 
            : 'text-gray-800 bg-white hover:shadow flex justify-between items-center'} `}
        onClick={() => toggleComplete(todo.id)}
      >
        <span>{todo.text}</span>
        {todo.completed && (
          <span className="text-green-700 font-bold text-lg">✔</span>
        )}
      </div>
      <button
        className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <MdDelete size={20} />
      </button>
    </div>
  );
};

export default TodoItem;

