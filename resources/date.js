export const verifyUniqueDates = (tasks) => {
    const uniqueDates = [];

    tasks.forEach(task => {
        if (!uniqueDates.includes(task.date)){
            uniqueDates.push(task.date);
        }
    });

    return uniqueDates;
}

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    })
}