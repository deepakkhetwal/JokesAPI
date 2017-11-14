const contactService = require('./contact-service');
class ContactController{
  async getContact(ctx){
    try{
      const contact = await contactService.getContact();
      ctx.body = contact;
    } catch(err){
      ctx.throw('400', err);
    }
  }
}

module.exports= new ContactController();