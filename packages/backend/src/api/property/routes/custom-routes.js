"use strict";
const property = require('../controllers/property')

module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/property/content-types',
     handler: "property.test",
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
