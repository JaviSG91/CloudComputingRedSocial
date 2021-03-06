# Submódulo Red Social: sistema de mensajería privada 

[![](https://travis-ci.org/JaviSG91/CloudComputingRedSocial.svg?branch=master)](https://travis-ci.org/JaviSG91/CloudComputingRedSocial)

[![Heroku](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/apps/stark-fjord-3673/resources)

[![Build Status](https://snap-ci.com/JaviSG91/CloudComputingRedSocial/branch/master/build_image)](https://snap-ci.com/JaviSG91/CloudComputingRedSocial/branch/master)

Se plantea crear una red social como plataforma Web destinada para que los usuarios se diviertan con múltiples contenidos basados en juegos.

Dentro del contexto de red social, me encargaré de la creación de un subsistema de mensajería privada y segura entre los usuarios que se encuentren registrados. La mensajería no se da a tiempo real (no se trata de un chat) si no que constituirá una especie de sistema de correo entre los usuarios.

<h2> Tecnología a usar </h2>
Como base de datos usaré [Apache Cassandra](http://cassandra.apache.org/), una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de «clave-valor», de código abierto que está escrita en Java. Permite grandes volúmenes de datos en forma distribuida. Es realmente útil debido a la alta escalabilidad que puede aportar para un proyecto como es una red social y la rapidez que ofrece en las consultas, contando con un alto número de usuarios.

En cuanto al entorno, usaré [Node.js](https://nodejs.org/en/). Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript. La gran ventaja de este entorno es que resulta perfecto para desarrollar aplicaciones escalables en la red.

Para integración continua he usado [Travis-CI](https://travis-ci.org/JaviSG91/CloudComputingRedSocial.svg?branch=master) una herramienta que te permite conectar tu repositorio de Github y probar después de cada push que hagas, regenerando el proyecto. Soporta múltiples lenguajes entre ellos, Node.js.

Para el despliegue en un PaaS he usado [Heroku](https://dashboard.heroku.com/apps/stark-fjord-3673/resources), una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación.

<h2>Despliegue e instalación</h2>

El despliegue en Heroku ya se encuentra [disponible](https://stark-fjord-3673.herokuapp.com/)   
El manual con todos los pasos se encuentra en el siguiente [documento](https://github.com/JaviSG91/CloudComputingRedSocial/blob/master/docs/Manual.md)
