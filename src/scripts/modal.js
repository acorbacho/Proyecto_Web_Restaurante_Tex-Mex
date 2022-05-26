let imagenes = document.querySelectorAll('.gallery__img')
let modal = document.getElementById('modal')
let img = document.getElementById('modal__img')
let boton = document.getElementById('modal__boton')

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', (evt) => {
    //Cada vez que se pulsa en una imagen, aparece y desaparece la clase.
    modal.classList.toggle('modal--open')
    let src = evt.target.src
    img.setAttribute('src', src)
  })
}

boton.addEventListener('click', () => {
  modal.classList.toggle('modal--open')
})