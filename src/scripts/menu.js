/**
 * Función de despliegue del menú principal.
 */
function menu() {
  //Almacena el id del boton del menú.
  let btnMenu = document.getElementById('btnmenu')
  //Almacena el id del menú.
  let menu = document.getElementById('menu')
  //Evemto que hace que cada vez que se hace click, se ponga o quite una clase.
  btnMenu.addEventListener('click', () => {
    //Método que muestra o oculta la clase "show".
    menu.classList.toggle('show')
  })
}
menu()