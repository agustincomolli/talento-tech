// youtube-lazy.js
class YouTubeLazy extends HTMLElement {
    // Constructor de la clase
    constructor() {
        super();
        // Crear shadow DOM para encapsular los estilos
        this.attachShadow({ mode: 'open' });
    }

    // Estilos CSS encapsulados para el componente
    get styles() {
        return `
            .youtube-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%; /* Ratio 16:9 */
                background-color: #000;
                cursor: pointer;
            }
            
            img {
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
            }
            
            .play-button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 68px;
                height: 48px;
                background-color: #ff0000;
                border-radius: 14%;
                cursor: pointer;
            }
            
            .play-button::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-style: solid;
                border-width: 12px 0 12px 20px;
                border-color: transparent transparent transparent #fff;
            }
        `;
    }

    // Se ejecuta cuando el elemento es añadido al DOM
    connectedCallback() {
        // Obtener el ID del video del atributo
        const videoId = this.getAttribute('video-id');
        
        // Crear el HTML inicial
        this.shadowRoot.innerHTML = `
            <style>${this.styles}</style>
            <div class="youtube-container">
                <img src="https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg" alt="Video thumbnail">
                <div class="play-button"></div>
            </div>
        `;

        // Agregar el evento click
        this.shadowRoot.querySelector('.youtube-container').addEventListener('click', () => {
            this.loadVideo(videoId);
        });
    }

    // Método para cargar el video de YouTube
    loadVideo(videoId) {
        const container = this.shadowRoot.querySelector('.youtube-container');
        const iframe = document.createElement('iframe');
        
        // Configurar el iframe
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        // Reemplazar el contenido con el iframe
        container.innerHTML = '';
        container.appendChild(iframe);
    }
}

// Registrar el componente personalizado
customElements.define('youtube-lazy', YouTubeLazy);
