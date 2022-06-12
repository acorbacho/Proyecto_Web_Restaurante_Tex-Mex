<?php
//Inicializamos la sesión.
session_start();
//Destruímos la sesión.
session_destroy();
//Redirigimos al "Index".
header('Location:../index.html');
