import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="min-h-screen w-full p-7 bg-[#121212] text-white space-y-6">
      <Header changeUser={changeUser} data={data} />

      {/* Stats Cards */}
      <TaskListNumbers data={data} />

      {/* Tasks */}
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
