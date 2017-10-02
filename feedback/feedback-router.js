const feedbackController = require('./feedback-controller');

function FeedbackRouter(router){
  router.post('/submit-feedback', async ctx =>{
    return await feedbackController.postFeedback(ctx);
  });
}

module.exports = FeedbackRouter;