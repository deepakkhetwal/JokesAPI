const jokesController = require('./jokes-controller');

function JokesRouter(router){
  router.get('/', async ctx =>{

    return await jokesController.getReviewedJokes(ctx);
  });
  router.get('/jokes', async ctx =>{
    return await jokesController.getReviewedJokes(ctx);
  });

  router.post('/inc-likes-cnt', async ctx =>{
    return await jokesController.incrementLikesCount(ctx);
  });
  router.post('/submit-joke', async ctx =>{
    return await jokesController.postJokes(ctx);
  });
}

module.exports = JokesRouter;