const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const JokesRouter = require('./jokes/jokes-router');
const FeedbackRouter = require('./feedback/feedback-router');
const ContactRouter = require('./contact-us/contact-router');
const SubscriptionRouter = require('./subscription/subscription-router');
const app = new Koa();
const router = new Router();
const cors = require('koa-cors');

app.use(cors());
app.use(BodyParser({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

JokesRouter(router);
FeedbackRouter(router);
ContactRouter(router);
SubscriptionRouter(router);
app.use(router.routes()).use(router.allowedMethods());
app.use(logger());
app.listen(process.env.PORT);