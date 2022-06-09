/**
 * Función para comprobar que el nombre de usuario introducido cumple con
 * los requisitos.
 * @param {*} username Parámetro usuario.
 * @param {*} alertclass Clase DOM.
 * @returns {boolean} 
 */
function checkUsername(username, alertclass) {
  try {
    //Expresión regular para el nombre de usuario.  
    const pattern = new RegExp('^[A-Z,á,é,í,ó,ú,0-9]+$', 'i')
    //Evaluamos la longitud y la expresión regular del username.
    if (username.value.length > 25 || username.value == '' || username.value.length < 3) {
      username.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un nombre de usuario válido.'
      return false
    } else if (!pattern.test(username.value)) {
      username.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un nombre de usuario válido.'
      return false
    } else {
      username.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
/**
 * 
 * @param {*} email Parámetro email.   
 * @param {*} alertclass Parámetro de clase.
 * @returns {boolean}
 */
function checkEmail(email, alertclass) {
  /**
   * Expresión regular email.
   */
  const pattern = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
  try {
    //Evaluamos la expresión regular.
    if (!pattern.test(email.value)) {
      email.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un email válido.'
      return false
    } else {
      email.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
/**
 * 
 * @param {*} password Parámetro contraseña.
 * @param {*} alertclass Parámetro de clase.
 * @returns {boolean}
 */
function checkPassword(password, alertclass) {
  try {
    //Evaluamos la longitud de la contraseña.
    if (password.value.length > 20 || password.value.length < 8 || password.value == '') {
      password.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'La contraseña debe tener entre 8 y 20 caracteres.'
      return false
    } else {
      password.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
