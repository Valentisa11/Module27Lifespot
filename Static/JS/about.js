// Получает имя пользователя

function getName() {

    return prompt('Укажите ваше имя');

}




// Получает комментарий пользователя

function getCommit() {

    return prompt('Напишите комментарий');

}




// Добавляет комментарий пользователя на страницу

const addCommit = (userName, userCommit) => {

    let date = new Date().toLocaleString();

    let element = document.getElementsByClassName('commit')[0];

    element.innerHTML +=

        '<div class="review-text">\n' +

        `<p><i><b>${userName} </b>${date}</i></p>` +

        `<p>${userCommit}</p>` +

        '</div>';

}