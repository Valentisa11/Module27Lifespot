/*let userName;
userName = prompt("Пожалуйста, введите ваше имя");
let count;
count = userName.length;
alert(`Приветствуем на LifeSpot ${userName}, в вашем имени ${count} символов`);*/

/*let elements = document.getElementsByTagName('*');
alert(`На странице LifeSpot ${elements.length} элементов`);

/*
* Обработчик клика
*
* */
const saveInput = function () {
    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Покажем окно с прошлым и новым значением
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);

    // Сохраним новое значение в контекст
    this.lastInput = currentInput;
}