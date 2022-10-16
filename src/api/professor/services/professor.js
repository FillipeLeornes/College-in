'use strict';

/**
 * professor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::professor.professor');
