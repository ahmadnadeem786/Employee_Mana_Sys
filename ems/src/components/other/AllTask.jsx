import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-md max-h-[400px] flex flex-col">
      {/* Header */}
      <div className="bg-red-500 text-white py-3 px-4 flex justify-between rounded-lg font-semibold sticky top-0 z-10">
        <span className="w-1/5">Employee</span>
        <span className="w-1/5 text-center">New</span>
        <span className="w-1/5 text-center">Active</span>
        <span className="w-1/5 text-center">Completed</span>
        <span className="w-1/5 text-center">Failed</span>
      </div>

      {/* Table Body */}
      <div className="flex-1 overflow-y-auto space-y-2 mt-2 pr-1">
        {userData.length > 0 ? (
          userData.map((elem, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] hover:bg-[#343434] transition-all duration-200 border border-emerald-500 py-2 px-4 flex justify-between rounded-lg items-center"
            >
              <span className="w-1/5 font-medium text-white truncate">{elem.firstname}</span>
              <span className="w-1/5 text-center">
                <span className="bg-blue-500 px-3 py-1 rounded-full text-white text-sm">
                  {elem.taskCount.newTaskCount}
                </span>
              </span>
              <span className="w-1/5 text-center">
                <span className="bg-yellow-500 px-3 py-1 rounded-full text-white text-sm">
                  {elem.taskCount.activeCount}
                </span>
              </span>
              <span className="w-1/5 text-center">
                <span className="bg-green-500 px-3 py-1 rounded-full text-white text-sm">
                  {elem.taskCount.completedCount}
                </span>
              </span>
              <span className="w-1/5 text-center">
                <span className="bg-red-500 px-3 py-1 rounded-full text-white text-sm">
                  {elem.taskCount.failedCount}
                </span>
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-5">No employees found</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
