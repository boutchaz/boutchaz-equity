'use strict';

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
  getContactDetails: async (ctx, next) => {
    const entry = await strapi.entityService.findOne('api::contact.contact', 1);
    try {
      ctx.body = {
        'phones': entry.phones,
        'emails':entry.emails,
        'socials':entry.socials,
        'addresses':entry.addresses,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
  sendEmail: async (ctx, next) => {
    const emailTemplate = {
      subject: 'Welcome to the Laha Group',
      text: `Welcome on mywebsite.fr! Your account is now linked with:.`,
      html: `<h1>Welcome on mywebsite.fr!</h1> <p>Your account is now linked with:.<p>`,
    };
    try {
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'zakaria.boutchamir@gmail.com',
          // from: is not specified, so it's the defaultFrom that will be used instead
        },
        emailTemplate,
        {
          user: {},
        }
      );
    } catch (error) {
      console.log(error)
    }
 
    try {
      ctx.body = {
        'status':'success',
      };
    } catch (err) {
      ctx.body = err;
    }
  }
};
