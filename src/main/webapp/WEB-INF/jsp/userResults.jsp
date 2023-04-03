<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/userResult.css"/>
    <title>Management</title>
</head>
<body>
<header>
    <div class="logo">
        <img src="../../img/logo.png" />
        <div class="logo-text">ItProgress</div>
    </div>
    <div class="rainting">
        <div class="raiting-text">Общий рейтинг: <span class="prime"></span></div>
    </div>
    <div class="exit-box">
        <div class="exit-text"></div>
        <img src="../../img/exit.png" class="exit" />
    </div>
</header>
<nav>
    <div class="nav-text mainPage">Главная</div>
    <div class="nav-text aboutPage">О нас</div>
    <div class="nav-text profilePage">Личный кабинет</div>
    <div class="nav-text testPage">Тестирование</div>
    <div class="nav-text newsPage">Статьи</div>
</nav>
<div class="main">
    <table>
        <tr class="tr-title">
            <th class="red"></th>
            <th>Тест</th>
            <th>Раздел</th>
            <th>Балл</th>
            <th>Статус</th>
        </tr>
    </table>
</div>
 <div class="review">
  <div class="review-text">
    login1, на данный момент могу посоветовать Вам почитать больше по теме
    ООП, а также фреймворки Spring и Hibernate. Попробуйте пройти
    тестирование через 2 недели.
  </div>
  <button class="ok-button">Ок</button>
</div>
<footer>
    <div class="contacts">
        <div class="connections">Сотрудничество:</div>
        <div class="description">
            <div>+375 29 770 73 37</div>
            <div>ул.Зеньковой, 26, этаж 15, отдел 2</div>
            <div>anastasia.gorlachyova@gmail.com</div>
        </div>
    </div>
    <div class="links">
        <img src="../../img/fb.png" />
        <img src="../../img/ig.png" />
        <img src="../../img/tg.png" />
        <img src="../../img/vk.png" />
    </div>
</footer>
<script src="../../userResults.js"></script>
</body>
</html>
