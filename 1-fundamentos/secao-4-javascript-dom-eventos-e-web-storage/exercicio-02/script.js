const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const verificaFeriado = (li) => {
    if (li.innerText === '24' ||li.innerText === '25' || li.innerText === '31') {
        li.classList.add('holiday');
    }
  }

  const verificaSexta = (li) => {
    if (li.innerText === '4' ||li.innerText === '11' || li.innerText === '18' || li.innerText === '25') {
        li.classList.add('friday');
    }
  }

const createDecemberDays = () => {
    const days = document.getElementById('days');
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (index = 0; index < decemberDaysList.length; index += 1) {
        const li = document.createElement('li');
        li.className = 'day';
        li.innerText = decemberDaysList[index];
        verificaFeriado(li);
        verificaSexta(li);
        days.appendChild(li);
    }
}
createDecemberDays();