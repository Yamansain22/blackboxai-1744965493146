import React, { useState } from 'react';

function AddItemForm({ onAdd, label }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    onAdd(title.trim());
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
      <input
        type="text"
        placeholder={`Add new ${label}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </form>
  );
}

export default AddItemForm;