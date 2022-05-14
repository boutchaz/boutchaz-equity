'use strict';
const propertTypes = require('../content-types/property/schema.json')
/**
 *  property controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const moduleUid = 'api::property.property'
module.exports = createCoreController(moduleUid,({strapi}) => ({
    /** custom functions */
    async test (ctx){
        ctx.body = {
            'contentTypes': propertTypes.attributes.type.enum
          };
    }
}));
