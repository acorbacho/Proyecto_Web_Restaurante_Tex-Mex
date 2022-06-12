/**
 * Variable que recoge el id del nombre de usuario.
 * @type {*}
 */
let login_username = document.getElementById('login_username')
/**
 * Variable que recoge el id del nombre de la contraseña.
 * @type {*}
 */
let login_password = document.getElementById('login_password')
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
  checkUsername(login_username, form_alert[0])
}
arrowFunctionsArray[1] = () => {
  checkPassword(login_password, form_alert[1])
}

try {
  /**
   * Se ejecutan las funciones de chequeo en el navegador y si dan "true", 
   * se procede al chequeo en base de datos, en el caso de algun "false", 
   * lo que hace es detener la función del botón y lanzar alertas.
   */
  sendForm = function (evt) {
    isValid[0] = checkUsername(login_username, form_alert[0])
    isValid[1] = checkPassword(login_password, form_alert[1])
    isValid[2] = true
    for (let i = 0; i <= isValid.length; i++) {
      if (isValid[i] == false) {
        login_username.addEventListener('input', arrowFunctionsArray[0])
        login_password.addEventListener('input', arrowFunctionsArray[1])
        isValid[2] = false
      }
    }
    if (!isValid[2]) {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
    } else {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
      //Llamada a PHP.
      $.ajax({
        data: {
          'username': login_username.value,
          'password': login_password.value,
        },
        url: 'php/login_check.php',
        type: 'GET',
        success: function (response) {
          //Se crean las alertas si el formulario no está correcto.
          if (response == 'username_error') {
            $("#login_username").css('background-color', 'lightcoral');
            $("#login_username + .form__alert").html('El nombre de usuario no es correcto.');
          } else if (response == 'password_error') {
            $("#login_password").css('background-color', 'lightcoral');
            $("#login_password + .form__alert").html('La contraseña no es correcta.');
          } else {
            //Cuando todo está correcto, se envía el formulario.
            form.submit()
          }
        }
      });
    }
  }
  /**
   * Se crea el evento de click en el botón del formulario.
   */
  send[0].addEventListener('click', sendForm, true)
} catch (err) {
  alert(err)
}