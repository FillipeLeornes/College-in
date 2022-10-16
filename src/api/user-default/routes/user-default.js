'use strict';

/**
 * user-default router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-default.user-default');
