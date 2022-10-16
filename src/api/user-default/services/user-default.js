'use strict';

/**
 * user-default service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-default.user-default');
