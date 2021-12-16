const checkIcon = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');

    i.addEventListener('click', (event) => verified(event, id));
    return i
}

const verified = (event, id) => {
    const element = event.target;
    
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex((item) => item.id == id);
    console.log(index);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('check id', id); 
}

export default checkIcon