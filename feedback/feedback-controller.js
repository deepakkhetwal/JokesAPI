const feedbackService = require('./feedback-service');
class FeedbackController{
  async postFeedback(ctx){
    try{
      const feedback = await feedbackService.postFeedback(ctx.request.body);
    } catch(err){
      ctx.throw('400', err);
    }
  }
}

module.exports= new FeedbackController();