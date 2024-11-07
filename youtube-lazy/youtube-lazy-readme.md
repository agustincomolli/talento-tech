# YouTube Lazy Load Component

Un componente Web personalizado para cargar videos de YouTube de forma optimizada y eficiente. Este componente implementa lazy loading para mejorar el rendimiento de tu sitio web, cargando el iframe de YouTube solo cuando el usuario decide reproducir el video.

## 📋 Características

- ✨ Carga lazy (perezosa) de videos de YouTube
- 🎨 Diseño responsive con ratio 16:9
- 🎯 Botón de reproducción personalizado
- 🖼️ Previsualización con thumbnail del video
- 📱 Totalmente responsive
- 🎉 Fácil de implementar
- 🔒 Estilos encapsulados con Shadow DOM

## 🚀 Instalación

1. Descarga el archivo `youtube-lazy.js`
2. Incluye el archivo en tu proyecto HTML:

```html
<script src="ruta/a/youtube-lazy.js"></script>
```

## 💻 Uso

El componente se puede usar directamente en tu HTML usando la etiqueta `<youtube-lazy>`:

```html
<youtube-lazy video-id="dQw4w9WgXcQ"></youtube-lazy>
```

### Atributos

- `video-id`: El ID del video de YouTube (requerido)

### Ejemplo completo

```html
<!DOCTYPE html>
<html>
<head>
    <title>YouTube Lazy Demo</title>
    <script src="youtube-lazy.js"></script>
</head>
<body>
    <!-- Uso básico -->
    <youtube-lazy video-id="dQw4w9WgXcQ"></youtube-lazy>

    <!-- Con estilos personalizados -->
    <div style="max-width: 600px; margin: 20px auto;">
        <youtube-lazy video-id="otro_id_video"></youtube-lazy>
    </div>
</body>
</html>
```

## 🎨 Personalización

El componente utiliza Shadow DOM para encapsular sus estilos, pero puedes controlar el tamaño y posición del contenedor usando CSS normal:

```css
youtube-lazy {
    display: block;
    max-width: 800px;
    margin: 0 auto;
}
```

## 🤔 Cómo obtener el ID de un video de YouTube

El ID del video se encuentra en la URL de YouTube de diferentes formas:

- En una URL normal: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` 
  - El ID es: `dQw4w9WgXcQ`
- En una URL corta: `https://youtu.be/dQw4w9WgXcQ`
  - El ID es: `dQw4w9WgXcQ`

## ⚡ Rendimiento

El componente mejora el rendimiento de tu sitio web:

- No carga el iframe de YouTube hasta que sea necesario
- Reduce las solicitudes iniciales de red
- Minimiza el uso de recursos del navegador
- Mejora los tiempos de carga de la página

## 🔧 Compatibilidad

El componente es compatible con todos los navegadores modernos que soportan Web Components:

- Chrome/Edge (Chromium) ✅
- Firefox ✅
- Safari ✅
- Edge (legacy) ❌
- Internet Explorer ❌

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📫 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.

---

Hecho con ❤️ para la comunidad web
