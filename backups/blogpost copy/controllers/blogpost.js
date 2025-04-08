'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blogpost.blogpost');
