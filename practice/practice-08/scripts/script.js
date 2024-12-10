const buttonSave = document.querySelector(".button");

document.addEventListener("DOMContentLoaded", () => {
    buttonSave.addEventListener("click", () => {
        const messageContainer = document.querySelector(".message-container");

        if (localStorage.getItem("name") !== null) {
            let name = localStorage.getItem("name");
            messageContainer.innerHTML = `<p>¡Ya escribiste tu nombre, te llamás ${name}!</p>`;
            return
        } else {
            let name = document.querySelector("#name").value;
            if (name === "") {
                messageContainer.innerHTML = `<p>No ingresaste tu nombre 🤔</p>`;
                return;
            };
            messageContainer.innerHTML = `<p>Ingresaste tu nombre, es ${name} 👍</p>`;
            localStorage.setItem("name", name);
        }
    })
});