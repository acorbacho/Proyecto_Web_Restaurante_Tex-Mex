/**
 * Variable que recoge el id del nombre de usuario.
 * @type {*}
 */
let signup_username = document.getElementById('signup_username')
/**
 * Variable que recoge el id del email de usuario.
 * @type {*}
 */
let signup_email = document.getElementById('signup_email')
/**
 * Variable que recoge el id del nombre de la contraseña.
 * @type {*}
 */
let signup_password = document.getElementById('signup_password')
/**
 * Variable que recoge el array de clases del botón del formulario.
 * @type {*}
 */
let send = document.getElementsByClassName('form__btn')
/**
 * Variable que recoge el array de clases de la alerta del formulario.
 * @type {*}
 */
let form_alert = document.getElementsByClassName('form__alert')
/**
 * Variable que recoge el id del formulario.
 * @type {*}
 */
let form = document.getElementById("form")
/**
 * Array que guarda valores booleanos procedentes de las respuestas de funciones "check".
 * @type {boolean}
 */
let isValid = []
/**
 * Recoge funciones anónimas en un array.
 * @type {*}
 */
let arrowFunctionsArray = []

//Recogemos las funciones anónimas de los eventos, para tratar con ellas por separado.
arrowFunctionsArray[0] = () => {
  checkUsername(signup_username, form_alert[0])
}
arrowFunctionsArray[1] = () => {
  checkEmail(signup_email, form_alert[1])
}
arrowFunctionsArray[2] = () => {
  checkPassword(signup_password, form_alert[2])
}
try {
  /**
   * Se ejecutan las funciones de chequeo en el navegador y si dan "true", 
   * se procede al chequeo en base de datos, en el caso de algun "false", 
   * lo que hace es detener la función del botón y lanzar alertas.
   */
  sendForm = function (evt) {
    isValid[0] = checkUsername(signup_username, form_alert[0])
    isValid[1] = checkEmail(signup_email, form_alert[1])
    isValid[2] = checkPassword(signup_password, form_alert[2])
    isValid[3] = true
    for (let i = 0; i <= isValid.length; i++) {
      if (isValid[i] == false) {
        signup_username.addEventListener('input', arrowFunctionsArray[0])
        signup_email.addEventListener('input', arrowFunctionsArray[1])
        signup_password.addEventListener('input', arrowFunctionsArray[2])
        isValid[3] = false
      }
    }
    if (!isValid[3]) {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
    } else {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
      //Llamada a PHP.
      $.ajax({
        data: {
          'username': signup_username.value,
        },
        url: 'php/signup_check.php',
        type: 'GET',
        success: function (response) {
          //Se crean las alertas si el formulario no está correcto.
          if (!response) {
            $("#signup_username").css('background-color', 'lightcoral');
            $("#signup_username + .form__alert").html('Nombre de usuario no disponible.');
          } else {
            //Cuando todo está correcto, se envía el formulario.
            form.submit()
          }
        }
      })
    }
  }
  //Se crea el evento.
  send[0].addEventListener('click', sendForm, true)
} catch (err) {
  alert(err)
}