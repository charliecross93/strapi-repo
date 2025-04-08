import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  async find(ctx) {
    // Automatically populate all relational fields if not provided in the query
    ctx.query = {
      ...ctx.query,
      populate: ctx.query.populate || '*',
    };
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query.populate || '*',
    };
    const { data } = await super.findOne(ctx);
    return { data };
  },
}));
