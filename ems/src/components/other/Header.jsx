import React from "react";
import { showSuccessToast } from "../../utils/toast.config"; // custom toast function

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
    showSuccessToast("Logged out successfully ✅");
  };

  return (
    <div className="flex items-center justify-between bg-[#1c1c1c] p-5 rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-medium text-gray-200">
          Hello,{" "}
          <span className="font-semibold text-emerald-400">
            {data?.firstname || "Admin"} 👋
          </span>
        </h1>
        <p className="text-gray-400 text-sm">
          Welcome back! Manage tasks efficiently.
        </p>
      </div>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition-all duration-200 text-white text-lg font-medium px-5 py-2 rounded-md shadow-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
