import { createTask } from "./createTask.js";
import dateElement from "./dateElement.js";
import { verifyUniqueDates, orderDates } from "../resources/date.js";

export const displayTask = () => {
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const cardList = document.querySelector('[task-cardlist]');

    let dates = verifyUniqueDates(taskList);
    
    const order = orderDates(dates);
    console.log(order);

    dates.forEach((date) =>{
        const dateMoment = moment(date, 'DD/MM/YYYY');
        cardList.appendChild(dateElement(date));

        taskList.forEach((task) => {
            const dateTask = moment(task.date, 'DD/MM/YYYY');
            const diff = dateMoment.diff(dateTask);

            if (diff == 0) {
                cardList.appendChild(createTask(task));
            };
        });
    });
}