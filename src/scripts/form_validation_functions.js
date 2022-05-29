function checkUsername(username, alertclass) {
  try {
    const pattern = new RegExp('^[A-Z,á,é,í,ó,ú,0-9]+$', 'i')
    if (username.value.length > 25 || username.value == '') {
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

function checkEmail(email, alertclass) {
  const pattern = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
  try {
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

function checkPassword(password, alertclass) {
  try {
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
