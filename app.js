const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const jokesRouter = require('./jokes/jokes-router');

const app = new Koa();
const router = new Router();

app.use(BodyParser());
jokesRouter(router);

app.use(router.routes()).use(router.allowedMethods());
app.use(logger());
app.listen(3001);