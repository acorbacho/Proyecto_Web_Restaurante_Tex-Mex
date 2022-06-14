/**
 * Almacena el array de clases de las imágenes de la galería.
 * @type {Array}
 */
let images = document.querySelectorAll('.gallery__img')
/**
 * Almacena el el identificador del modal.
 * @type {*}
 */
let modal = document.getElementById('modal')
/**
 * Almacena el el identificador de la imagen del modal.
 * @type {*}
 */
let img = document.getElementById('modal__img')
/**
 * Almacena el botón de cierre del modal
 * @type {*}
 */
let boton = document.getElementById('modal__boton')

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (evt) => {
    //Cada vez que se pulsa en una imagen, aparece la clase.
    modal.classList.toggle('modal--open')
    /**
     * Almacena la url de la imagen a la que se hace click.
     * @type {*}
     */
    let src = evt.target.src
    //Le aplicamos al modal la url de la imagen de la galería en la que se hizo click.
    img.setAttribute('src', src)
  })
}
//Se crea el evento de click para cerrar el modal.
boton.addEventListener('click', () => {
  //Cada vez que se pulsa en el botón de cerrar, desaparece la clase.
  modal.classList.toggle('modal--open')
})