# Programa de Cálculo de Compras desarrollado para la facultad de Ingeniería, en su programa Ingeniería de Software
## V Semestre Universidad de Cartagena
## Asignatura : Desarrollo Web
### Actividad N° 3

Este es un programa desarrollado en ReactJS, Redux, Node.js y Express que permite registrar 5 compras y realizar los siguientes cálculos:

- Calcular el total de la compra.
- Calcular el IVA de la compra.
- Aplicar un descuento del 10% si la compra es superior a 100.000.
- Calcular cuál es la compra más alta.

## Funcionalidades

- Registrar 5 compras con su nombre y precio.
- Calcular el total de cada compra.
- Calcular el IVA de cada compra (asumiendo una tasa de IVA del 19%).
- Aplicar un descuento del 10% si la compra es superior a 100.000.
- Identificar cuál es la compra más alta realizada.

## Tecnologías utilizadas

- ReactJS: Biblioteca de JavaScript para construir interfaces de usuario.
- Redux: Biblioteca de manejo del estado de la aplicación.
- Node.js: Entorno de ejecución de JavaScript del lado del servidor.
- Express: Marco de aplicación web para Node.js.
- PostgreSQL

## Configuración

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del cliente React:  


<img src="api\public\img\Content structure-amico.png" alt="Servidor" width="200">      

```bash
$ cd client
```

3. Instala las dependencias del cliente React: 

```bash
$ npm install
```
4. Navega a la carpeta del servidor Node.js/Express:

```bash
$ cd api
```

<img src="api\public\img\Server-amico.png" alt="Servidor" width="200">


5. Instala las dependencias del servidor Node.js/Express:

```bash
$ npm install
```

6. Inicia el cliente React y el servidor Node.js/Express en dos terminales separadas:
 ```bash
$ npm run start:client
$ npm run start:server
 ```

 7. Accede a la aplicación en tu navegador en la dirección http://localhost:3000.

## Estructura del proyecto

El proyecto se divide en dos carpetas principales:

- `client`: Contiene el código del cliente React.
- `server`: Contiene el código del servidor Node.js/Express.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
