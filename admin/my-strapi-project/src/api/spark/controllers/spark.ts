import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::spark.spark', ({ strapi }) => ({
  async random(ctx) {
    try {
      console.log('Random spark endpoint called');
      
      const { type, mood, category } = ctx.query;
      const filters: any = {};

      if (type) filters.type = type;
      if (mood) filters.mood = mood;
      if (category) filters.categories = { slug: category };

      console.log('Filters:', filters);

      const sparks = await strapi.entityService.findMany('api::spark.spark', {
        filters,
        populate: ['categories', 'image'],
      });

      console.log('Found sparks:', sparks.length);

      if (!sparks.length) {
        return ctx.notFound('No sparks found');
      }

      const randomSpark = sparks[Math.floor(Math.random() * sparks.length)];
      console.log('Selected spark:', randomSpark.id);
      
      return { data: randomSpark };
    } catch (err) {
      console.error('Error in random spark:', err);
      ctx.throw(500, 'Server error');
    }
  }
}));