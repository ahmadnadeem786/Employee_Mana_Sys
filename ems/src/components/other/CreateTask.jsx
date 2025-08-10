import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { showSuccessToast, showErrorToast } from "../../utils/toast.config";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !category || !assignTo) {
      showErrorToast("Please fill all fields ❌");
      return;
    }

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let isAssigned = false;

    const updatedData = userData.map((elem) => {
      if (assignTo.trim().toLowerCase() === elem.firstname.trim().toLowerCase()) {
        isAssigned = true;
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCount: {
            ...elem.taskCount,
            newTaskCount: (elem.taskCount?.newTaskCount || 0) + 1,
          },
        };
      }
      return elem;
    });

    if (!isAssigned) {
      showErrorToast(`No employee found with name "${assignTo}" ❌`);
      return;
    }

    setUserData(updatedData);
    showSuccessToast("Task created successfully ✅");

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-wrap gap-5 items-start">
        {/* Left Column */}
        <div className="flex-1 min-w-[250px]">
          <label className="text-sm text-gray-300 mb-1 block">Task Title</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-500 mb-4"
            type="text"
            placeholder="Make a UI design"
          />

          <label className="text-sm text-gray-300 mb-1 block">Date</label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-500 mb-4"
            type="date"
          />

          <label className="text-sm text-gray-300 mb-1 block">Assign to</label>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="w-full text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-500 mb-4"
            type="text"
            placeholder="Employee name"
          />

          <label className="text-sm text-gray-300 mb-1 block">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-500 mb-4"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[250px]">
          <label className="text-sm text-gray-300 mb-1 block">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-500 resize-none"
            placeholder="Task details..."
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 py-3 px-5 rounded-md text-sm mt-4 w-full font-medium text-white shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
