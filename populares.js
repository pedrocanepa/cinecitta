let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');


btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000 ) {
        pagina += 1;
    cargarPeliculas ();
    }
    

});



btnAnterior.addEventListener('click', () => {
    if (pagina > 1 ) {
        pagina -= 1;
    cargarPeliculas ();
    }
    

});


const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fd5e373641ded13be888fbabc64d709a&lenguage=es-MX&page=${pagina}`);
        
        console.log(respuesta);
        
        //si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = '';
            datos.results.forEach(pelicula  => {
                peliculas += `
                <div class='pelicula'>
               <img class= 'poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'> 
               <h3class='titulo'>   ${pelicula.title}</h3>
                </div> 
                `;
                
            });
                      
            document.getElementById('contenedor').innerHTML = peliculas;
                
        } else if (respuesta.status === 400 ){
            console.log('Coloque mal la llave');
         }else if (respuesta.status === 404 ){
        console.log('La pelicula no existe');
        } else {
            console.log('error no determinado');

        }
    } catch (error) {
         console.log(error);
    }

}

cargarPeliculas();