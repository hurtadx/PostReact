# **Facebook Post React Clone**

## **Descripción General**
Esta aplicación es un clon de la interfaz de Facebook desarrollado con React, que simula las funcionalidades principales del feed de noticias de Facebook. Permite visualizar publicaciones, dar "me gusta", comentar y compartir posts, con un diseño responsivo que se adapta a dispositivos móviles y escritorio.

![Captura de pantalla de la aplicación]

## **Características Principales**
* **Feed de Noticias**: Visualización de publicaciones con scroll infinito que carga nuevos posts automáticamente.
* **Sistema de Likes**: Posibilidad de dar "me gusta" a las publicaciones.
* **Comentarios**: Función para añadir comentarios a cada publicación.
* **Compartir**: Opción para compartir publicaciones y verlas en una sección dedicada.
* **Diseño Responsivo**: Interfaz adaptable a dispositivos móviles y escritorio, con navegación optimizada.
* **Carga Progresiva**: Indicadores visuales durante la carga de contenido.
* **Integración con APIs**: Obtención de datos desde JSONPlaceholder y RandomUser para simular un entorno real.

## **Tecnologías Utilizadas**
* **React**: Biblioteca para construir la interfaz de usuario
* **Hooks de React**: useState, useEffect para manejo de estado y efectos secundarios
* **CSS Moderno**: Variables CSS, Flexbox, Media Queries, Animaciones
* **Font Awesome**: Para iconografía
* **APIs Externas**:
   * JSONPlaceholder (contenido de posts)
   * RandomUser (perfiles de usuario)
   * Picsum Photos (imágenes aleatorias)

## **Estructura del Proyecto**
```
src/
  App.jsx                # Componente principal y navegación
  App.css                # Estilos globales
  Components/
    Feed/                # Componentes relacionados con el feed
      Feed.jsx           # Lógica para obtener y mostrar posts
      Feed.css           # Estilos del feed
    Post/                # Componentes de publicaciones
      Post.jsx           # Estructura general de un post
      PostHeader.jsx     # Cabecera del post (usuario, tiempo)
      PostContent.jsx    # Contenido del post (texto, imagen)
      PostActions.jsx    # Acciones (like, comentar, compartir)
      PostComments.jsx   # Sistema de comentarios
      Post.css           # Estilos de posts
```

## **Instalación y Ejecución**
1. **Clonar el repositorio**:
```
git clone [URL-del-repositorio]
cd PostFacebook
```

2. **Instalar dependencias**:
```
npm install
```

3. **Iniciar el servidor de desarrollo**:
```
npm run dev
```

4. **Abrir en el navegador**: La aplicación estará disponible en `http://localhost:5173`

## **Guía de Uso**
* **Navegar por el Feed**: Desplázate hacia abajo para cargar más publicaciones automáticamente.
* **Dar Like**: Haz clic en el botón "Me gusta" de cualquier publicación.
* **Comentar**: Escribe en el campo de comentarios y presiona Enter o el botón de envío.
* **Compartir**: Haz clic en "Compartir" para guardar la publicación en tu sección "Tus compartidos".
* **Ver Publicaciones Compartidas**: Accede a "Tus compartidos" desde el menú superior (o inferior en móviles).

## **Diseño Responsivo**
La aplicación está optimizada para diferentes dispositivos:
* **Escritorio**: Navegación superior con texto e iconos.
* **Tablets**: Diseño ajustado con elementos más compactos.
* **Móviles**: Navegación inferior tipo app, con iconos ampliados para mejor interacción táctil.

## **Créditos**
Desarrollado como proyecto educativo para practicar React y técnicas modernas de desarrollo web Frontend.

APIs utilizadas:
* JSONPlaceholder
* RandomUser
* Lorem Picsum