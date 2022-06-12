# **Proyecto Web Restaurante Tex-Mex**

![banner](https://i.gyazo.com/88b46c23aa2c039ddce90bb977cb404f.png)

## **Descripción general** 📜

Sitio web ambientado en un restaurante de comida mexicana con las siguientes
páginas o áreas:

+ **Página de inicio**
+ **Página de información**
+ **Galería de imágenes responsive**
+ **Página de contacto**
+ **Área de pedidos**
    + **Panel de usuarios**
    + **Panel de administradores**

## **Funcionalidades** 🔧

### **Navegación responsive** 📲

La página está diseñada enfocándose en un estilo ***responsivo***, que se adapta a los múltiples tamaños de ventana.

### **Contacto por mail** 📧

Mediante la página de contacto, cualquier usuario que haya tenido una experiencia con el restaurante, o tenga
alguna reclamación, puede contactar mediante formulario. Mediante la librería *PHPMailer*, el formulario se 
comunicará con el correo electrónico que se programe.

### **Área de pedidos** 🌮

En el área de pedidos, los **usuarios** podrán iniciar sesión para realizar un pedido, o bien, registrarse si no tienen una cuenta. Por otro lado, los **administradores** o **trabajadores**, tendrán su panel específico cuando inicien sesión, y podrán aceptar los pedidos, además de  controlar el stock de ingredientes.

#### **Panel de usuarios** 👤

En el **panel de usuarios**, tendremos que haber iniciado sesión primeramente para acceder. Una vez dentro podremos elegir los productos disponibles de una lista, en este caso platillos mexicanos. Los items elegidos irán sumandose al **carrito**, del cual también podremos suprimir un plato si así lo deseamos.

Cuando tenemos nuestro menú elegido, podremos finalizar el pedido. Estos pedidos se almacenarán en una **base de datos**, y serán vistos por los **trabajadores/administradores** en su página correspondiente.

#### **Panel de administradores** 👨‍💻

En este panel podremos administrar los **pedidos entrantes**, y los **productos en stock**. 

Los **pedidos entrantes**, se podrán aceptar, lo que hará que estos pedidos se eliminen de la **base de datos**, junto con la cantidad de **ingredientes** que se gastan.

También se podrá añadir una cantidad al ingrediente que se desee de la **base de datos** de **productos en stock**, mediante una columna que mostrará un listado de todos estos productos.