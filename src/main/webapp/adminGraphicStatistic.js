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

let labels = [];
let values = [];

//Получение данных
const XHR = new XMLHttpRequest();
XHR.open('GET', `http://localhost:8081/api/admin/statistic/count`);
XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR.send();
XHR.onreadystatechange = function () {
    if (XHR.readyState !== 4) {
        return
    }
    if (XHR.status === 200) {
        let data = JSON.parse(XHR.responseText);
        let maxValue = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].countOfUsers > maxValue) {
                maxValue = data[i].countOfUsers
            }
            labels.push(data[i].test)
            values.push(data[i].countOfUsers)
        }
        maxValue = maxValue + 5;
//Графики
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Пользователи, прошедшие тест',
                        data: values,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        max: maxValue,
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        }
                    },
                },
            },
        });
    }
}


//Получение данных
const XHR2 = new XMLHttpRequest();
XHR2.open('GET', `http://localhost:8081/api/admin/statistic/result`);
XHR2.setRequestHeader('Authorization', sessionStorage.getItem('token'))
XHR2.send();
XHR2.onreadystatechange = function () {
    let labels2 = [];
    let values2 = [];
    if (XHR2.readyState !== 4) {
        return
    }
    if (XHR2.status === 200) {
        let data = JSON.parse(XHR2.responseText);

        for (let i = 0; i < data.length; i++) {
            labels2.push(data[i].testForAverageResult)
            values2.push(data[i].averageResult)
        }

//Графики
        const ctx2 = document.getElementById('myChart2');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: labels2,
                datasets: [
                    {
                        label: 'Средний результат по тестам',
                        data: values2,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    },
                },
            },
        });
    }
}


// const ctx2 = document.getElementById('myChart2');
// new Chart(ctx2, {
//   type: 'bar',
//   data: {
//     labels: ['ООП', 'Типы данных', 'Потоки', 'Интерфейсы', 'Spring'],
//     datasets: [
//       {
//         label: 'Средний результат по тестам',
//         data: [7.8, 6, 2, 5, 9.5],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
