const subscriptionService = require('./subscription-service');
class SubscriptionController{
  async postSubscription(ctx){
    try{
      const subscription = await subscriptionService.postSubscription(ctx.request.body);
    } catch(err){
      ctx.throw('400', err);
    }
  }
}

module.exports= new SubscriptionController();