function menu() {
  let btnMenu = document.getElementById('btnmenu')
  let menu = document.getElementById('menu')
  btnMenu.addEventListener('click', () => {
    // Cada vez que se pulsa el boton de menú, aparece y desaparece la clase.
    menu.classList.toggle('mostrar')
  })
}
menu()