<h1>Manual de despliegue de aplicación en PaaS e instalación</h1>

<h2>Despliegue</h2>  

Estos son los pasos a seguir para desplegar la aplicación en Heroku:

1. Nos registramos dentro de la página de [Heroku](https://dashboard.heroku.com/)
2. Instalamos las herramientas de Heroku con el comando

        wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh  


3. Usamos el comando heroku login para hacer login con el correo registrado y la correspondiente contraseña.
![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/heroku_login.png)
4. Una vez hecho esto, pasamos a usar el comando heroku create para crear la aplicación en Heroku.

5. Para poner en marcha esta aplicación, se usar el comando git push heroku master y adicionalmente en el manual ofrecido por Heroku recomienda usar el comando heroku ps:scale web=1

6. Finalmente abrimos la página de nuestra aplicación con el comando heroku open

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/heroku.png)

El enlace a la página de la aplicación es [este](https://stark-fjord-3673.herokuapp.com/)

Una vez hecho esto, se configura el despliegue automático a Heroku usando Snap CI en este caso. Y en caso de hacerlo bien debe aparecer ambos webhooks [aquí](https://github.com/JaviSG91/CloudComputingRedSocial/settings/hooks)

Y dentro de [SnapCI](https://snap-ci.com/JaviSG91/CloudComputingRedSocial/branch/master) vemos cómo pasa las pruebas:

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/snapci3.png)

<h2>Instalación</h2>  
1. Clonamos el git con el comando:

                git clone https://github.com/JaviSG91/CloudComputingRedSocial

2. Es necesario descargar todas las dependencias definidas en el package.json con el comando npm install:

        "dependencies": {
         "cassandra-driver": "^2.2.2",
         "express": "^4.13.3",
           "body-parser": "^1.14.1",
          "node": "^0.0.0",
          "foreman": "^1.4.1",
           "heroku": "^0.1.3",
           "supertest": "^1.1.0",
           "node-cassandra-cql": "^0.4.4",
          "async": "^1.5.0"
         }
         
3. npm start para arrancar la ejecución
4. npm test para ejecutar los test

Para más información ver [Readme](https://github.com/JaviSG91/CloudComputingRedSocial/blob/master/README.md)
