const JokesController = require('./jokes-controller');
const jokesController = new JokesController();
function jokesRouter(router){
  router.get('/', async ctx =>{
    return await jokesController.getJokes(ctx);
  });
  router.get('/jokes', async ctx =>{
    return await jokesController.getJokes(ctx);
  });
}

module.exports = jokesRouter;