const contactController = require('./contact-controller');

function ContactRouter(router){
  router.get('/get-contact', async ctx =>{
    return await contactController.getContact(ctx);
  });
}

module.exports = ContactRouter;