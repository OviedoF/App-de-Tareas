export default (date) =>{
    const dateElement = document.createElement('li');
    dateElement.classList.add('dateElement');
    dateElement.innerHTML = date;

    return dateElement;
}