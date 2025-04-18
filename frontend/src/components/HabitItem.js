import React from 'react';

function HabitItem({ habit, onToggleComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggleComplete(habit.id, !habit.completed)}
          className="w-5 h-5"
        />
        <span className={habit.completed ? 'line-through text-gray-500' : ''}>{habit.title}</span>
      </div>
      <button
        onClick={() => onDelete(habit.id)}
        className="text-red-600 hover:text-red-800"
        aria-label="Delete habit"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default HabitItem;