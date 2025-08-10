import React from 'react';

const TaskListNumbers = ({ data }) => {
  const counts = {
    new: data.tasks?.filter((t) => t.newTask).length || 0,
    active: data.tasks?.filter((t) => t.active).length || 0,
    completed: data.tasks?.filter((t) => t.completed).length || 0,
    failed: data.tasks?.filter((t) => t.failed).length || 0,
  };

  const cards = [
    { label: 'New Tasks', value: counts.new, color: 'bg-red-500' },
    { label: 'Active Tasks', value: counts.active, color: 'bg-blue-500' },
    { label: 'Completed', value: counts.completed, color: 'bg-green-500' },
    { label: 'Failed', value: counts.failed, color: 'bg-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5 bg-[#1c1c1c] p-5 rounded-lg shadow-md">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`${card.color} px-6 py-4 rounded-xl shadow-lg text-white`}
        >
          <h2 className="text-3xl font-bold">{card.value}</h2>
          <h3 className="text-lg font-medium">{card.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
