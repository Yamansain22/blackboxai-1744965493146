import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Todo Habit App</div>
        <div className="space-x-4">
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
            }
          >
            Todos
          </NavLink>
          <NavLink
            to="/habits"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
            }
          >
            Habits
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;