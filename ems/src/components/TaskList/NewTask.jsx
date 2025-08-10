import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="h-full p-6 bg-green-100 rounded-2xl w-[320px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
          {data.category}
        </span>
        <span className="text-green-800 text-xs font-medium">
          {new Date(data.taskDate).toLocaleDateString()}
        </span>
      </div>

      <h2 className="mt-2 text-xl font-bold text-green-900 truncate">{data.taskTitle}</h2>

      <p className="mt-3 text-green-800 text-sm leading-relaxed h-20 overflow-hidden">
        {data.taskDescription}
      </p>

      <button
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-md transition-colors duration-200 font-semibold"
        // onClick={} // You can add click handler here if needed
      >
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;
