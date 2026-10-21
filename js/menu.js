// Script ligero y diferido: marca el enlace de la página actual en el menú
document.querySelectorAll('.menu a').forEach(a=>{if(a.pathname===location.pathname)a.setAttribute('aria-current','page');});
