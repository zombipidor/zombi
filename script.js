// Функция для старта сайта после фейковой загрузки
window.onload = function () {
    setTimeout(function () {
        document.getElementById("loadingScreen").style.display = "none";  // Скрываем экран загрузки
        document.getElementById("mainContent").style.display = "block";   // Показываем сайт
    }, 5000);  // Задержка 5 секунд для фейковой загрузки
};

// Для эффекта Матрицы с символами
const messages = [
    'Система загружается...',
    'Ошибка 404: Не найдено',
    'Система в режиме самозащиты!',
    'Внимание! Неверный ввод...',
    'Запуск чёрной программы...',
    'Взлом успешен...',
    'Идентификация завершена. Добро пожаловать, Хакер!'
];

let messageIndex = 0;

function updateLoadingMessage() {
    if (messageIndex < messages.length) {
        document.getElementById('message').innerText = messages[messageIndex];
        messageIndex++;
    } else {
        messageIndex = 0;
    }
}

setInterval(updateLoadingMessage, 1000);  // Обновляем сообщение каждую секунду

// Отправка сообщения при нажатии кнопки
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Отправка сообщения при нажатии Enter
document.getElementById('messageInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();  // Чтобы не было новой строки в поле ввода
    }
});

function sendMessage() {
    let inputField = document.getElementById('messageInput');
    let messageText = inputField.value.trim();

    if (messageText !== '') {
        document.getElementById('sentMessage').classList.remove('hidden');

        let messageList = document.getElementById('messageList');
        let newMessage = document.createElement('li');
        newMessage.textContent = messageText;
        messageList.appendChild(newMessage);

        inputField.value = '';  // Очистка поля ввода
    }
}
fetch('https://api64.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        console.log("Твой IP:", data.ip);
    })
    .catch(error => console.error('Ошибка:', error));
fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
        console.log("IP:", data.query);
        console.log("Широта:", data.lat);
        console.log("Долгота:", data.lon);
        console.log("Город:", data.city);
        console.log("Страна:", data.country);
    })
    .catch(error => console.error('Ошибка:', error));

// Отправка сообщения при нажатии Enter
document.getElementById('messageInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();  // Чтобы не было новой строки в поле ввода
    }
});