// Objeto Document
// Métodos
// Propiedad: innerHTML
// Template String
document.getElementById("idheader").innerHTML = `
<div class="container">
            <a class="logo" href="index.html">
                <img class="logo01" src="./img/LongLogo85px.png" alt="Cinecitta logo" width="100%" height="100%">
                <img class="logo-hover" src="./img/LongLogo85pxAlt.png" alt="Cinecitta logo" width="100%" height="100%">
            </a>

            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>    
            
            <nav class="navbar">
                <a href="index.html#QuienesSomos">Quiénes somos</a>
                <a href="index.html#navegar">¿Qué hacer en CINECITTÀ?</a>
                <a href="registro.html#registro">Registro</a>
                <a href="iniciarsesion.html">Iniciar sesión</a>
                <a href="Contacto.html">Contacto</a>
            

            </nav>
        </div>
`
document.getElementById("idfooter").innerHTML = `
<div>
<p>Trabajo práctico Codo a Codo 2022</p>
<p>Andrea Mendoza Bacalao</p>
<p>Pedro Cánepa</p>
<p>Alfonso Zalazar</p>
</div>
<div>
<a href="https://twitter.com/" target="_blank">
    <i class="fab fa-twitter" aria-hidden="true"></i>
</a>
<a href="https://www.facebook.com" target="_blank">
    <i class="fab fa-facebook" aria-hidden="true"></i>
</a>
<a href="https://www.instagram.com/explore/tags/cinecitta target=" _blank">
    <i class="fab fa-instagram" aria-hidden="true"></i>
</a>
</div>
`