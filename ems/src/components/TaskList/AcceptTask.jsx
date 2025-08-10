import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="h-full p-6 bg-red-100 rounded-2xl w-[320px] flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
          {data.category}
        </span>
        <span className="text-gray-500 text-xs font-medium">
          {new Date(data.taskDate).toLocaleDateString()}
        </span>
      </div>

      <h2 className="mt-2 text-xl font-bold text-gray-900 truncate">{data.taskTitle}</h2>

      <p className="mt-3 text-gray-700 text-sm leading-relaxed h-20 overflow-hidden">
        {data.taskDescription}
      </p>

      <div className="flex justify-between mt-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
          // onClick={} // Add your handler here
        >
          Mark as Completed
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200"
          // onClick={} // Add your handler here
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
