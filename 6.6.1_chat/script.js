const wsUri = 'wss://echo-ws-service.herokuapp.com';


const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const textClient = document.querySelector('.text');
const chat = document.querySelector('.chat');
const textChat = document.createElement('div');

const websocket = new WebSocket(wsUri);
let connection = false;

function addMessage(message) {
  const textChat = document.createElement('div');
  const textMessage = `<p class="text_client"> ${message}</p>`;
  textChat.innerHTML = textMessage;
  chat.appendChild(textChat);
};

function addMessage_1(answer) {
  const textChat = document.createElement('div');
  const textMessage = `<p class="text_server"> ${answer}</p>`;
  textChat.innerHTML = textMessage;
  chat.appendChild(textChat);
};

websocket.onopen = function (evt) {
  const connect = document.createElement('div');
  connect.innerHTML = 'Соединение установлено';
  connect.classList.add('connect');
  chat.appendChild(connect);
  connection = true;
}

websocket.onclose = function (evt) {
  const disconnect = document.createElement('div');
  disconnect.innerHTML = 'Соединение закончено';
  disconnect.classList.add('disconnect');
  chat.appendChild(disconnect);
  connection = false;
}

websocket.onerror = function(evt){
  const connectError = document.createElement('div');
  connectError.innerHTML = 'Ошибка. Попробуйте позже';
  connectError.classList.add('connect_error');
  chat.appendChild(connectError);
  connection = false;
}

websocket.onmessage = function (evt) {
  addMessage_1(evt.data);
}


btn_1.addEventListener('click', () => {
  btn_1.classList.toggle('btn--turn');
  const message = textClient.value;
  textClient.value = '';
  websocket.send(message);
  addMessage(message);
});

btn_2.addEventListener('click', () => {
  btn_2.classList.toggle('btn--turn');
  connection = true;
  if (!navigator.geolocation) {
    alert("Нет поддержки браузера")
  } else {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!position) {
          addMessage_1('Невозможно отобразить местоположение');
          } else {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const geo = `https://www.openstreetmap.org/#map=14/${latitude}/${longitude}`;
            addMessage_1(`<a href="${geo}">Ваша геолокация </a>`);
            websocket.send('Ваши координаты:<br> Широта ' + latitude + '<br>Долгота ' + longitude)
        }
      })
  }  
});

  























