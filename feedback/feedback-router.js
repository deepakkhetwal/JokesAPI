const feedbackController = require('./feedback-controller');

function FeedbackRouter(router){
  router.post('/post-feedback', async ctx =>{
    ctx.body = await feedbackController.postFeedback(ctx);
  });
}

module.exports = FeedbackRouter;