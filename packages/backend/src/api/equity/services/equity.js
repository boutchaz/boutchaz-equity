'use strict';

/**
 * equity service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::equity.equity');
