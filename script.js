window.onload = function () {
    document.getElementById('fullName').oninput = function () {
        this.value = this.value.replace(/[0-9]/g, '');
    }

    document.getElementById('userName').oninput = function () {
        this.value = this.value.replace(/[.,]/g, '')
    }
    document.getElementById('userName').oninput = function () {
        this.value = this.value.replace(/[.,]/g, '')
    }

    document.getElementById('checkOr').onchange = (e) => {
        if (e.target.checked === true) {
            console.log('Выбран')
        } else {
            console.log('Ошибка! Чекбокс не выбран')
        }
    }

    let signBut = document.getElementById('signBut');

    signBut.addEventListener('click', signUp);

    function signUp() {
        if (!document.getElementById('fullName').value) {
            alert('Заполните ваше имя');
            return;
        }
        if (!document.getElementById('userName').value) {
            alert('Заполните ваш псевдоним');
            return;
        }
        if (!document.getElementById('emailIn').value) {
            alert('Заполните ваш E-mail');
            return;
        }
        if (!document.getElementById('passIn').value) {
            alert('Заполните ваш пароль');
            return;
        }
        if (!document.getElementById('repPassIn').value) {
            alert('Повторите ваш пароль');
            return;
        }

        if (document.getElementById('passIn').value.length < 8) {
            alert('Ошибка! Пароль должен быть не менее восьми символов');
            return;
        }

        if (document.getElementById('passIn').value.length !== document.getElementById('repPassIn').value.length) {
            alert('Пароли не совпадают');
            return;
        }

        if (document.getElementById('checkOr').checked === false) {
            alert('Не выбран чекбокс');
            return;
        }


        let popup = document.getElementById('popup');
        let popupClose = document.getElementById('close');
        popup.style.display = 'block';


        popupClose.addEventListener('click', (e) => {

            document.getElementById("userName").value = "";
            document.getElementById("emailIn").value = "";
            document.getElementById("passIn").value = "";
            document.getElementById("repPassIn").value = "";
            document.getElementById("checkOr").checked = false;

            popup.style.display = 'none';

            changePage();
        });
    }

    let alreadyHave = document.getElementById('alreadyHave');
    alreadyHave.addEventListener('click', haveAccount);

    function haveAccount() {
        changePage();
    }

    function signIn() {
        if (!document.getElementById('userName').value) {
            alert('Ошибка! Заполните ваш псевдоним');
            return;
        }
        if (!document.getElementById('passIn').value) {
            alert('Ошибка! Заполните ваш пароль');
        }
        alert('Добро пожаловать, ' + document.getElementById('userName').value);
    }

    function changePage() {
        document.getElementById('main-title').innerText = "Log in to the system";
        document.getElementById("delete").remove();
        document.getElementById("delete1").remove();
        document.getElementById("delete2").remove();
        document.getElementById("delete3").remove();
        document.getElementById('change').innerText = "Sign in";
        document.getElementById("already").remove();

        signBut.removeEventListener('click', signUp);
        signBut.addEventListener('click', signIn);
    }

};

console.log("Изменил в js что-то");