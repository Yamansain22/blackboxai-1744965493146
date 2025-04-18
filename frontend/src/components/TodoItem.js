import React from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id, !todo.completed)}
          className="w-5 h-5"
        />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.title}</span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-600 hover:text-red-800"
        aria-label="Delete todo"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;