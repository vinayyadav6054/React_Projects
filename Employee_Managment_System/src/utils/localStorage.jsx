//localStorage.clear()

const employees = [
  {
    "Id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "taskDescription": "Compile the monthly financial report.",
        "taskDate": "2025-03-15",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend meeting with the client to discuss project updates.",
        "taskDate": "2025-03-16",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from the development team.",
        "taskDate": "2025-03-17",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 2,
    "firstName": "Neha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix UI Bugs",
        "taskDescription": "Resolve styling issues on the dashboard.",
        "taskDate": "2025-03-14",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Standup",
        "taskDescription": "Participate in the daily team standup meeting.",
        "taskDate": "2025-03-15",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize queries for faster response time.",
        "taskDate": "2025-03-18",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Content Writing",
        "taskDescription": "Write an article for the company blog.",
        "taskDate": "2025-03-20",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs in the payment gateway.",
        "taskDate": "2025-03-21",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Proposal",
        "taskDescription": "Prepare a business proposal for a new client.",
        "taskDate": "2025-03-22",
        "category": "Business",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product Testing",
        "taskDescription": "Perform QA testing for the new product release.",
        "taskDate": "2025-03-23",
        "category": "Quality Assurance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Audit the application security vulnerabilities.",
        "taskDate": "2025-03-24",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "System Upgrade",
        "taskDescription": "Upgrade system dependencies and libraries.",
        "taskDate": "2025-03-25",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "Id": 5,
    "firstName": "Kiran",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Marketing Campaign",
        "taskDescription": "Launch a social media campaign for the new product.",
        "taskDate": "2025-03-26",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Check and update the inventory stock levels.",
        "taskDate": "2025-03-27",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Training",
        "taskDescription": "Conduct training sessions for the client on product usage.",
        "taskDate": "2025-03-28",
        "category": "Training",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];


  
  const admin = [
    {
      "Id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
//   console.log(employees);
//   console.log(admin);
  
  export const setLocalstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    
    //console.log(employees, admin);

    return {employees, admin}
  }