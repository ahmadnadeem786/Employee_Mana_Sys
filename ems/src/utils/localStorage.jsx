// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Ahmed",
    "email": "Ahmed@gmail.com",
    "password": "123",
    "taskCount": {
      "activeCount": 2,
      "newTaskCount": 2,
      "completedCount": 1,
      "failedCount": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2025-01-10",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "taskDate": "2025-01-03",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Follow up with client X regarding the project update.",
        "taskDate": "2025-01-07",
        "category": "Client Relations"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Ayesha",
    "email": "Ayesha@gmail.com",
    "password": "123",
    "taskCount": {
      "activeCount": 1,
      "newTaskCount": 1,
      "completedCount": 1,
      "failedCount": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Conduct research on the new market trends.",
        "taskDate": "2025-01-15",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Complete the new training module.",
        "taskDate": "2025-01-02",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data Cleanup",
        "taskDescription": "Fix errors in the database.",
        "taskDate": "2025-01-05",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Hassan",
    "email": "Hassan@gmail.com",
    "password": "123",
    "taskCount": {
      "activeCount": 2,
      "newTaskCount": 1,
      "completedCount": 0,
      "failedCount": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Website",
        "taskDescription": "Update the company website with new features.",
        "taskDate": "2025-01-12",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Budget Review",
        "taskDescription": "Review the budget for Q1.",
        "taskDate": "2025-01-08",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Fatima",
    "email": "Fatima@gmail.com",
    "password": "123",
    "taskCount": {
      "activeCount": 1,
      "newTaskCount": 1,
      "completedCount": 1,
      "failedCount": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and execute the new campaign.",
        "taskDate": "2025-01-20",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Supplier Meeting",
        "taskDescription": "Discuss contract terms with suppliers.",
        "taskDate": "2025-01-06",
        "category": "Procurement"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Bilal",
    "email": "Bilal@gmail.com",
    "password": "123",
    "taskCount": {
      "activeCount": 2,
      "newTaskCount": 2,
      "completedCount": 0,
      "failedCount": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "System Upgrade",
        "taskDescription": "Upgrade the server operating system.",
        "taskDate": "2025-01-18",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Employee Feedback",
        "taskDescription": "Collect feedback from employees on workplace satisfaction.",
        "taskDate": "2025-01-11",
        "category": "HR"
      }
    ]
  }
];


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};



export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}