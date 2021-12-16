import { addTask  }  from "./components/createTask.js";
import { displayTask } from "./components/readTasks.js";

( () => {

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', addTask);

displayTask();
} )

();