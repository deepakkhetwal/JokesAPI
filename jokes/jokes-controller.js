
const jokesService = require('./jokes-service');

class JokesController{
  async getReviewedJokes(ctx){
    try{
      const jokes = await jokesService.getReviewedJokes();
      ctx.body = jokes;
    } catch(err){
      ctx.throw('400', err);
    }
  }
  async incrementLikesCount(ctx){
    try{
      const jokes = await jokesService.incrementLikesCount(ctx.request.body._id);
    } catch(err){
      ctx.throw('400', err);
    }
  }
  async postJokes(ctx){
    try{
      const jokes = await jokesService.postJokes(ctx.request.body);
    } catch(err){
      ctx.throw('400', err);
    }
  }
}

module.exports= new JokesController();