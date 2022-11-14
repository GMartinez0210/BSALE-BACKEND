
# Bsale Market Challenge - Back-End

Un proyecto back-end construido con JavaScript


![BSale Company](https://www.nutricion-chile.com/wp-content/uploads/2020/03/bsale-ok.png)


## Getting started

Clona el proyecto

```bash
  git clone https://github.com/GMartinez0210/BSale-Challenge-Back
```

Dirigete a la dirección del proyecto

```bash
  cd my-project
```

Instala las dependencias

```bash
  npm install
```

Corre el proyecto

```bash
  npm run start
```


## Built with

- [express.js](https://www.npmjs.com/package/express)
- [mysql](https://www.npmjs.com/package/mysql)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)


## Environment Variables

Para correr este proyecto, necesitas añadir unas variables de ambiente en el archivo .env las cuales por motivos de privacidad no se encuentran disponible a público abierto.


## API Reference


#### GET todos los productos 

```http
  GET /api/products
```

Si todo se procesa de forma exitosa, devuelve, en formato JSON, todos los datos de cada producto y un error con valor null. Sin embargo, si sucede un error, devuelve el error y un array vacio


#### GET un producto

```http
  GET /api/product?name=${param}
```
Si todo se procesa de forma exitosa, devuelve, en formato JSON, los datos del producto y un error con valor null. Sin embargo, si sucede un error, devuelve el error y un array vacio

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Referencia del nombre del producto  |


#### GET todos los productos

```http
  GET /api/categories
```
Si todo se procesa de forma exitosa, devuelve, en formato JSON, todos los datos de cada categoria y un error con valor null. Sin embargo, si sucede un error, devuelve el error y un array



#### GET todos los productos

```http
  GET /api/category?name=${param}
```
Si todo se procesa de forma exitosa, devuelve, en formato JSON, todos los datos de la categoria y un error con valor null. Sin embargo, si sucede un error, devuelve el error y un array


| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Nombre de la categoria |


## Acknowledgements

Esta resolución es dedicada a mis padres quienes se esfuerzan día a día para brindarme la oportunidad de estudiar. De igual manera agradezco a la empresa BSale por darme la oportunidad de porder desarrollar este reto.


## Author

- [Genaro Martinez](https://github.com/GMartinez0210)

