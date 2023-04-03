document.querySelector('.exit-box').addEventListener('click', () => {
  sessionStorage.clear();
  location.href = 'http://localhost:8080/';
});

document.querySelector('.goUsers').addEventListener('click', () => {
  location.href = 'http://localhost:8080/adminPanel/users';
});

document.querySelector('.goTests').addEventListener('click', () => {
  location.href = 'http://localhost:8080/adminPanel/createTest';
});

document.querySelector('.goPersonal').addEventListener('click', () => {
  location.href = 'http://localhost:8080/adminPanel/changeLogin';
});

document.querySelector('.myTests').addEventListener('click', () => {
  location.href = 'http://localhost:8080/adminPanel/myTests';
});

document.querySelector('.graphicStatistic').addEventListener('click', () => {
  location.href = 'http://localhost:8080/adminPanel/graphicStatistic';
});

//Графики
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['ООП', 'Типы данных', 'Потоки', 'Интерфейсы', 'Spring'],
    datasets: [
      {
        label: 'Пользователи, прошедшие тест',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['ООП', 'Типы данных', 'Потоки', 'Интерфейсы', 'Spring'],
    datasets: [
      {
        label: 'Средний результат по тестам',
        data: [7.8, 6, 2, 5, 9.5],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
