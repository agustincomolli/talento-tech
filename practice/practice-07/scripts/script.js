const buttonClickMe = document. querySelector(".button");
const buttonReset = document. querySelector(".button[type='reset']");

document.addEventListener("DOMContentLoaded", () => {
    buttonClickMe.addEventListener("click", changeParagraph);
    buttonReset.addEventListener("click", resetParagraph);
});

/**
 * Cambia el texto del párrafo con clase "paragraph" por "¡Cambiado!".
 * 
 * @function
 * @since 0.1.0
 */
function changeParagraph() {
    const paragraph = document.querySelector(".paragraph");

    paragraph.textContent = "¡Cambiado!";
    paragraph.style.fontSize = "2rem";
    paragraph.style.color = "darkcyan";
    paragraph.style.marginBlock = ".5rem";

    addEmoji();
    buttonClickMe.disabled=true;
}

/**
 * Agrega un elemento "img" con clase "emoji" justo después del párrafo con clase "paragraph".
 * El elemento "img" se crea con la siguiente configuración:
 * <ul>
 * <li>src: "https://img.icons8.com/?size=96&id=AWNz4SeVAd8y&format=png"</li>
 * <li>width: "6rem"</li>
 * <li>marginBlock: ".5rem"</li>
 * </ul>
 * 
 * @function
 * @since 0.1.0
 */
function addEmoji() {
    const emoji = document.createElement("img");
    emoji.classList.add("emoji");
    const paragraph = document.querySelector(".paragraph");

    emoji.src = "https://img.icons8.com/?size=96&id=AWNz4SeVAd8y&format=png";
    emoji.style.width = "6rem";
    emoji.style.marginBlock = ".5rem";
    paragraph.parentNode.insertBefore(emoji, paragraph.nextSibling);
}

/**
 * Elimina el img con clase "emoji" si existe.
 * 
 * @function
 * @since 0.1.0
 */
function removeEmoji() {
    const emoji = document.querySelector(".emoji");
    emoji.remove();
}


/**
 * Vuelve a establecer el texto del párrafo con clase "paragraph" a su valor original.
 * 
 * @function
 * @since 0.1.0
 */
function resetParagraph() {
    const paragraph = document.querySelector(".paragraph");
    paragraph.textContent = "Haga clic en el botón para cambiar el parágrafo.";
    paragraph.style.fontSize = "1rem";
    paragraph.style.color = "white";

    removeEmoji();
    buttonClickMe.disabled=false;
}