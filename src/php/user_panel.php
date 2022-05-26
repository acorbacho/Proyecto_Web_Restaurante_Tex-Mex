<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset='UTF-8' />
  <title>Pedidos</title>
  <link rel="stylesheet" type="text/css" href="../styles/style.css" media="screen" />
  <link rel="stylesheet" type="text/css" href="../styles/fonts.css" media="screen" />
  <link rel="stylesheet" type="text/css" href="../styles/user_panel.css" media="screen" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, initial-scale=1.0">
</head>

<body>
  <header class="main-header">
    <div class="container container--flex">
      <div class="logo-container column column--50">
        <h1 class="logo">Restaurante Tex-Mex</h1>
      </div>
      <div class="main-header__contactInfo column column--50">
        <p class="main-header__contactInfo__phone">
          <span class="icon-phone">999 000 000</span>
        </p>
        <p class="main-header__contactInfo__address">
          <span class="icon-location">Vigo, 12</span>
        </p>
      </div>
    </div>
  </header>
  <nav class="main-nav">
    <div class="container container-flex">
      <span class="icon-menu" id="btnmenu"></span>
      <ul class="menu" id="menu">
        <li class="menu__item"><a href="../index.html" class="menu__link">Inicio</a></li>
        <li class="menu__item"><a href="../about.html" class="menu__link">Nosotros</a></li>
        <li class="menu__item"><a href="../gallery.html" class="menu__link">Galería</a></li>
        <li class="menu__item"><a href="../contact.html" class="menu__link">Contacto</a></li>
        <li class="menu__item"><a href="../login.html" class="menu__link menu__link--select">Área de pedidos</a></li>
      </ul>
      <div class="social-icon">
        <a href="https://www.facebook.com/" target="_blank" class="social-icon__link"><span class="icon-facebook"></span></a>
        <a href="https://twitter.com/home" target="_blank" class="social-icon__link"><span class="icon-twitter"></span></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="social-icon__link"><span class="icon-mail"></span></a>
      </div>
    </div>
  </nav>
  <section class="banner">
    <img src="" alt="" class="banner__img">
    <div class="banner__content">Haz tu pedido</div>
  </section>
  <main class="main">
    <div class="container container--flex">
      <section class="group dishes">
        <h2 class="group__title">Platos a domicilio</h2>
        <div class="row">
          <img src="https://hsaa.hsobjects.com/h/menuitems/images/009/125/830/6d3bd503998e84b6f51f053e2129b6b4-size1200.png" alt="" class="dishes__img">
          <p class="row__txt dishes__name">Fajitas</p>
          <p class="row__txt dishes__price">4,00 €</p>
          <button class="btn btn--dishes">Añadir al carrito</button>
        </div>
        <div class="row">
          <img src="https://hsaa.hsobjects.com/h/menuitems/images/009/125/830/6d3bd503998e84b6f51f053e2129b6b4-size1200.png" alt="" class="dishes__img">
          <p class="row__txt dishes__name">Fajitas</p>
          <p class="row__txt dishes__price">4,00 €</p>
          <button class="btn btn--dishes">Añadir al carrito</button>
        </div>
        <div class="row">
          <img src="https://hsaa.hsobjects.com/h/menuitems/images/009/125/830/6d3bd503998e84b6f51f053e2129b6b4-size1200.png" alt="" class="dishes__img">
          <p class="row__txt dishes__name">Fajitas</p>
          <p class="row__txt dishes__price">4,00 €</p>
          <button class="btn btn--dishes">Añadir al carrito</button>
        </div>
        <div class="row">
          <img src="https://hsaa.hsobjects.com/h/menuitems/images/009/125/830/6d3bd503998e84b6f51f053e2129b6b4-size1200.png" alt="" class="dishes__img">
          <p class="row__txt dishes__name">Fajitas</p>
          <p class="row__txt dishes__price">4,00 €</p>
          <button class="btn btn--dishes">Añadir al carrito</button>
        </div>
      </section>
      <section class="cart">
        <div class="cart__title">Tu carrito</div>
        <div class="cart__content">
          <div class="cart__item">
            <div class="cart__item__name">Fajitas</div>
            <div class="cart__item__price">4,00 €</div>
            <span class="cart__item__remove">x</span>
          </div>
          <div class="cart__item">
            <div class="cart__item__name">Fajitas</div>
            <div class="cart__item__price">4,00 €</div>
            <span class="cart__item__remove">x</span>
          </div>
          <div class="cart__item">
            <div class="cart__item__name">Fajitas</div>
            <div class="cart__item__price">4,00 €</div>
            <span class="cart__item__remove">x</span>
          </div>
          <div class="cart__item">
            <div class="cart__item__name">Fajitas</div>
            <div class="cart__item__price">4,00 €</div>
            <span class="cart__item__remove">x</span>
          </div>
          <div class="cart__item">
            <div class="cart__item__name">Fajitas</div>
            <div class="cart__item__price">4,00 €</div>
            <span class="cart__item__remove">x</span>
          </div>
        </div>
        <div class="cart__total">
          <p class="total">Total:</p>
          <p class="euros">20,00 €</p>
        </div>
        <button class="btn btn--cart">Finalizar pedido</button>
      </section>
    </div>
  </main>
  <footer class="main-footer">
    <div class="container container--flex">
      <div class="column column--33">
        <h2 class="column__title">Visítanos</h2>
        <p class="column__txt"><span class="icon-location">Vigo, 12</span></p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Contáctanos</h2>
        <p class="column__txt"><span class="icon-phone">999 000 000</span></p>
        <p class="column__txt">
          <span class="icon-mail">default@default.com</span>
        </p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Sígenos en nuestras redes</h2>
        <p class="column__txt"><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></p>
        <p class="column__txt"><a href="https://twitter.com/home" class="icon-twitter">Twitter</a></p>
        <p class="column__txt"><a href="https://mail.google.com/mail/u/0/#inbox" class="icon-youtube">Youtube</a></p>
      </div>
    </div>
    <p class="copy">©2022 | Restaurante Tex-Mex. Todos los derechos reservados.</p>
  </footer>
  <script src="../scripts/menu.js"></script>
</body>

</html>