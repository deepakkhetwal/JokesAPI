
const jokesService = require('./jokes-service');
class JokesController{
  async function getJokes(ctx){
    try{
      const jokes = await jokesService.getJokes();
      ctx.body = jokes;
    } catch(err){
      ctx.throw('400', err);
    }
  }
}

module.exports= JokesController;