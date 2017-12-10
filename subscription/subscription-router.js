const subscriptionController = require('./subscription-controller');

function SubscriptionRouter(router){
  router.post('/post-subscription', async ctx =>{
    const response = await subscriptionController.postSubscription(ctx);
    if(!response){
      ctx.body={success:true};
    }
  });
}

module.exports = SubscriptionRouter;