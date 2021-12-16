import { displayTask } from "./readTasks.js";

const trashIcon = (id) => {
    const trashI = document.createElement('i');
    trashI.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    trashI.addEventListener('click', () => removeTask(id));

    return trashI
}

const removeTask = (id) =>{
    const cardlist = document.querySelector('[task-cardlist]');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id == id);
    cardlist.innerHTML= "";

    console.log(index);
    tasks.splice(index, 1);
    console.log(tasks); 
    localStorage.setItem('tasks',JSON.stringify(tasks));

    displayTask();
}

export default trashIcon