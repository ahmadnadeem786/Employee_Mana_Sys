import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="TaskList"
      className="mt-5 flex gap-5 overflow-x-auto py-4 bg-[#1c1c1c] p-5 rounded-lg shadow-md scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
    >
      {data.tasks?.map((task, idx) => {
        if (task.newTask) return <NewTask key={idx} data={task} />;
        if (task.active) return <AcceptTask key={idx} data={task} />;
        if (task.completed) return <CompleteTask key={idx} data={task} />;
        if (task.failed) return <FailedTask key={idx} data={task} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
