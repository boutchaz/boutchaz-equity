const contact = require('../controllers/contact')

module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/contact',
     handler: contact.getContactDetails,
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
