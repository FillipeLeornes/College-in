'use strict';

/**
 * user-default controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-default.user-default');
