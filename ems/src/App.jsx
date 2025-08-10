import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  // ✅ Restore login from localStorage on page reload
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.role);

      // Only set logged-in employee data if role is employee
      if (parsed.role === 'employee') {
        setLoggedInUserData(parsed.data || parsed); 
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    // ✅ Admin login
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      console.log('Logged in as admin');
      return true; // ✅ Success
    }

    // ✅ Employee login
    const employee = userData.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      );
      console.log('Logged in as user');
      return true; // ✅ Success
    }

    return false; // ❌ Failure
  };

  return (
    <>
      <ToastContainer />
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
