const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rotas / Recursos
 * 
 * /
 
 /** 
 * Métodos HTTP:
 *  
 * GET: buscar uma informação do back-end
 * POST: Alterar uma informação no back-end
 * PUT: ALterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Parms: Parâmetros enviados na rota após o '?' (Filtros, paginação)
 * Route Parms: Parâmetros utilizados para identificar recursos
 * Request Body: COrpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */


 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


module.exports = app;

