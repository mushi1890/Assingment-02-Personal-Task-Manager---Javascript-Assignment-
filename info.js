// ********** Task No. 01 (Data Type & Variables) **********
let studentInformation = {
    Id: '39-10519',
    Name: "Mosharof Morshed",
    BirthDayMonth: 7,
    FavoriteColor: "Green"
}

let header = `Name :- ${studentInformation.Name} Task Manager & ID :- ${studentInformation.Id},`;
console.log(header);
console.log(`Birth Day Month :- ${studentInformation.BirthDayMonth} & Favorite Color:- ${studentInformation.FavoriteColor}\n`);



// ********** Task No. 02 (Object & Management) **********
class students {
    constructor(id, title, description = "", dueDate, category = "General", priority = 0, completed = true, creadtedDate = new Date(),) {
        this.id = `${id}`;
        this.title = title;
        this.description = description;
        this.priority = "1st";
        this.completed = completed;
        this.creadtedDate = creadtedDate;
        this.dueDate = dueDate;
        this.category = category;
    }
}

let student1 = new students(
    "39-10519",
    "Math Exam",
    "He got the highest mark",
    "2025-09-26",
    "class 08"
)

console.log(student1);


// ********** Task No. 03 (Function) **********

// Creat Task(title, description, dueDate, category)
let arr = [];
let counter = 1;

function myFunc(title, description, dueDate, category) {
    let obj = {
        id: counter++,
        title,
        description,
        dueDate,
        category,
        Completed: true
    };
    arr.push(obj);
    return obj;
}

myFunc("Math Exam", "He got the highest mark", "2025-09-26", "class 08");
myFunc("Math Exam", "He got the Second highest mark", "2025-09-27", "class 08");
myFunc("Math Exam", "He got the Third highest mark", "2025-09-28", "class 08");

console.log(arr);
    

// Delete Task(taskId)

function del(taskId) {
    arr = arr.filter(task => task.id !== taskId);
}

del(2);
console.log(arr);


// Display Tasks(FilterBy)

function display(dis = "all") {
    let disTask;
    switch (dis) {
        case "completed":
            disTask = arr.filter(task => task.completed);
            break;
        case "pending":
            disTask = arr.filter(task => !task.completed);
            break;
        default:
            disTask = arr;
    }

    console.log("Tasks");
    disTask.forEach(task => {
        console.log(
            `[${task.completed ? "ok" : " "}] ${task.id}: ${task.title} - ${task.category} (Due: ${task.dueDate})`
        );
    });
}

display();             
display("completed");
display("pending");

// Calculate Task Percentage = ()=>{...}(completed vs total)



// ********** Task No. 04 (Loop) **********

const studentInformation1 = {
  id: "39-",
  name: "Mosharof Morshed",
  birthMonth: 7, 
  favoriteColor: "Green"
};

const tasks = [
  {
    id: "39-10519",
    title: "Math Exam",
    description: "Fail",
    priority: 3,
    completed: false,
    createdDate: new Date("2025-09-10"),
    dueDate: new Date("2025-09-30"),
    category: "Class 8"
  },
  {
    id: "39-10518",
    title: "Buy Groceries",
    description: "Milk, Bread, Eggs",
    priority: 2,
    completed: false,
    createdDate: new Date("2025-08-20"),
    dueDate: new Date("2025-09-25"),
    category: "Personal"
  },
  {
    id: "STU2025A_3",
    title: "Gym Workout",
    description: "Leg day session",
    priority: 4,
    completed: true,
    createdDate: new Date("2025-09-05"),
    dueDate: new Date("2025-09-06"),
    category: "Health"
  }
];


const birthMonthTasks = tasks.filter(
  task => task.createdDate.getMonth() + 1 === studentInformation1.birthMonth
);

console.log("Filtered tasks:", birthMonthTasks);

// ********** Task No. 05 (Promises & Async Operations) **********

const studentInfo = {
  id: "STU2025A",
  name: "Alex Johnson",
  birthMonth: 9, // September → 900ms delay
  favoriteColor: "Blue"
};


// Promise Implementation 
function saveTasksToStorage(tasks, birthMonth) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(tasks)) {
      return reject(new Error("Invalid data: tasks must be an array"));
    }
    if (typeof birthMonth !== "number" || birthMonth < 1 || birthMonth > 12) {
      return reject(new Error("Invalid birth month (must be 1–12)"));
    }

    // Simulated delay
    const delay = birthMonth * 100;
    console.log(`Saving tasks... (delay = ${delay}ms)`);

    setTimeout(() => {
      resolve(`✅ Tasks saved successfully after ${delay}ms`);
    }, delay);
  });
}

saveTasksToStorage(tasks, studentInfo.birthMonth)
  .then(message => console.log("Save result:", message))
  .catch(error => console.error("Error saving tasks:", error.message));

// Async/Await Implementation

async function loadUserTasks(studentId) {
  try {
    if (!studentId || typeof studentId !== "string") {
      throw new Error("Student ID in invalid ");
    }

    console.log(`${studentId}`);

    // Simulate server delay (500ms)
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      { id: `${studentId}_1`, title: "Finish Assignment", completed: false },
      { id: `${studentId}_2`, title: "Buy Groceries", completed: true }
    ];
  } catch (error) {
    console.error("Error in loadUserTasks:", error.message);
    throw error; 
  }
}

loadUserTasks(studentInfo.id)
  .then(loaded => console.log("Loaded tasks directly:", loaded))
  .catch(error => console.error("Error loading tasks:", error.message));

// Async/Await Coordination

async function syncTasks(studentInfo, tasks) {
  try {
    const saveMessage = await saveTasksToStorage(tasks, studentInfo.birthMonth);
    console.log(saveMessage);

    const loadedTasks = await loadUserTasks(studentInfo.id);
    console.log("Loaded tasks:", loadedTasks);

    return { saveMessage, loadedTasks };
  } catch (error) {
    console.error("Sync failed:", error.message);
  }
}

syncTasks(studentInfo, tasks)
  .then(result => console.log("Final sync result:", result))
  .catch(error => console.error("Error syncing tasks:", error.message));


