import { verifyUniqueDates } from "../resources/date.js";
import checkIcon from "./checkIcon.js";
import trashIcon from "./deleteTask.js";
import { displayTask } from "./readTasks.js";

export const addTask = (event) =>{
    event.preventDefault();

    const cardlist = document.querySelector('[task-cardlist]');
    const calendar = document.querySelector('[data-form-date]');
    const input = document.querySelector('[data-form-input]');

    let value= input.value;
    input.value="";
    const date = moment(calendar.value).format('DD/MM/YYYY');

    if (value == "" || date == "Invalid date"){
        alert('Tarea o fecha incompleta, por favor vuelva a intentarlo.');
        return
    }

    let complete = false;
    console.log(date);

    const taskObj = {
        value,
        date,
        complete,
        id: uuid.v4(),
    }

    cardlist.innerHTML = '';
    
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTask();
}

export const createTask = ({value, date, complete, id}) =>{
    const task = document.createElement('li');
            task.classList.add('card');

    const span = document.createElement('span');
            span.style= "padding: 15px";
            span.innerText = `${value}`;

    const cardContent = document.createElement('div');
    const check = checkIcon(id);    
            cardContent.appendChild(check);
            cardContent.appendChild(span);
    
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    

    const dateElement = document.createElement('span');
            dateElement.innerHTML = `${date}`;
            dateElement.classList.add('date');

    // const content = `<div> ${checkIcon()} <span class="task">${value}</span> </div> <i class="fas fa-trash-alt trashIcon icon"></i>`
    
    task.appendChild(cardContent);
    task.appendChild(dateElement)
    task.appendChild(trashIcon(id));

    return task
}

export default addTask;