<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullstyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/authorization.css"/>
    <title>Management</title>
</head>
<body>
<header>
    <div class="logo">
        <img src="../../img/logo.png" />
        <div class="logo-text">ItProgress</div>
    </div>
    <div class="exit">Вернуться на главную →</div>
</header>
<main>
    <form>
        <div class="form-title">
            Чтобы авторизоваться в системе необходимо ввести личные данные
        </div>
        <input   type="text"
                 class="input-login" placeholder="Введите логин" />
        <input   type="password"
                 class="input-password" placeholder="Введите пароль" />
        <button class="send">Войти в аккаунт</button>
        <div class="create-acc">
            Еще нет аккаунта? <span class="reg">Зарегистрироваться</span>
        </div>
    </form>
</main>
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
<script src="../../authorization.js"></script>
</body>
</html>
