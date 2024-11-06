const inputAge = document.querySelector('#age');
const inputVip = document.querySelector('#vip');
const button = document.querySelector('.button');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('.message');
const messageClose = document.querySelector('.message-close');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const age = parseInt(inputAge.value);
    const isVip = inputVip.checked;

    messageContainer.style.display = "flex";

    if (isNaN(age) || age < 1 || age > 99) {
        messageContainer.classList.add('error');
        message.innerHTML = "La edad introducida no es correcta";
        return;
    }

    if (age >= 18 && isVip) {
        messageContainer.classList.add("info");
        message.innerHTML = "Bienvenido al sector VIP";
    } else if (age >= 18) {
        messageContainer.classList.add("info");
        message.innerHTML = "Bienvenido al sector general";
    } else {
        messageContainer.classList.add("warning");
        message.innerHTML = "No eres mayor de edad para entrar en el evento.";
    }
});

messageClose.addEventListener("click", (e) => {
    e.preventDefault();
    messageContainer.style.display = "none";
});