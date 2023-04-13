const hamburguer = document.querySelector(".hamburguer");
const navbarMenu = document.querySelector(".navbar__menu");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


// Escrita do titulo do main 


function typeWriter(elemento){

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)

        
    });
}

const titulo = document.querySelector(".texto__colorido");
typeWriter(titulo);