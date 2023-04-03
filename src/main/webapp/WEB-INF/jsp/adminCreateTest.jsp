<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/adminCreateTest.css"/>
    <title>Management</title>
</head>
<body>
<header>
    <div class="logo">
        <img src="../../img/logo.png" />
        <div class="logo-text">ItProgress</div>
    </div>
    <div class="exit-box">
        <div class="exit-text">Выйти</div>
        <img src="../../img/exit.png" class="exit" />
    </div>
</header>
<nav>
    <div class="nav-text goUsers">Пользователи</div>
    <div class="nav-text goTests">Тесты</div>
    <div class="nav-text goPersonal">Личные данные</div>
</nav>
<div class="main">
    <div class="window">
        <div class="window-title">Добавить тест</div>
        <form>
            <div class="razdel">
                <div>Раздел:</div>
                <label> <input name="razdel" type="radio" value="Английский" />Английский </label>
                <label> <input name="razdel" type="radio" value="Технический" />Технический </label>
                <label>
                    <input name="razdel" type="radio" value="Логический" checked />Логический
                </label>
            </div>
            <div class="theme">
                <div>Тема:</div>
                <input class="test" required type="text" placeholder="Введите тему теста" />
                <button class="add-btn add-theme">Выбрать</button>
            </div>
        </form>
    </div>
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
<script src="../../adminCreateTest.js"></script>
</body>
</html>
