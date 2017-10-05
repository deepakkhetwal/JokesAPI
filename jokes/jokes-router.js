const jokesController = require('./jokes-controller');

function JokesRouter(router){
  router.get('/', async ctx =>{

    return await jokesController.getReviewedJokes(ctx);
  });
  router.get('/jokes', async ctx =>{
    return await jokesController.getReviewedJokes(ctx);
  });

  router.post('/inc-likes-cnt', async ctx =>{
    ctx.body= await jokesController.incrementLikesCount(ctx);
  });
  router.post('/post-joke', async ctx =>{
    ctx.body= await jokesController.postJokes(ctx);
  });
}

module.exports = JokesRouter;