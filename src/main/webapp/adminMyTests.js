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

const XHR = new XMLHttpRequest();
XHR.open('GET', `http://localhost:8081/api/admin/tests`);
XHR.setRequestHeader('Authorization', sessionStorage.getItem('token'));
XHR.send();
XHR.onreadystatechange = function () {
  if (XHR.readyState !== 4) {
    return;
  }
  if (XHR.status === 200) {
    let count = 1;
    let tests = JSON.parse(XHR.responseText);
    console.log(tests);
    // for (let i = 0; i < topics.length; i++) {
    //   let container = document.createElement('tr');
    //   container.classList.add('h');
    //   container.innerHTML = `
    //         <th>${count}</th>
    //         <th class="topic">${topics[i].topic}</th>
    //         <th class="test">${topics[i].test}</th>
    //         <th class="res">${topics[i].result}</th>
    //         <th><button class="active">Дать отзыв</button></th>
    //         `;
    //   document.querySelector('table').append(container);
    //   ++count;
    // }
    // document.querySelector('.red').innerText = topics[0].login;
  }
};
