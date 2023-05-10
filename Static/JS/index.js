// Получает информацию о сессии
function handleSession() {
    let session = new Map();

    //session.set('age', checkAge())
    session.set('userAgent', window.navigator.userAgent);
    session.set('startDate', new Date().toLocaleString());
    return session;
}

// Получает информацию о возрасте, если младше 18 лет, перенаправляет на другой сайт
function checkAge() {
    let age = prompt("Пожалуйста, введите ваш возраст");

    if (age >= 18) {
        let now = new Date();
        alert("Приветствуем на LifeSpot " + now);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
    return age
}

// Выводит информацию о сессии в консоль
function printSession() {
    for (let result of session) {
        console.log(result)
    }
}

// Фильтрует трансляции
function filterContent(inputData) {
    let inputText = inputData;
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let element = elements[i].getElementsByTagName('h3')[0].innerText;
        if (element.toLowerCase().includes(inputText)) {
            elements[i].style.display = 'inline-block';
            
        }
        else {
            elements[i].style.display = 'none';
            
        }
    }
}