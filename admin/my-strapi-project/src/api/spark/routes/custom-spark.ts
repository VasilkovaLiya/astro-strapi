/**
 * Custom spark routes
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/sparks/random',
      handler: 'spark.random',
      config: {
        auth: false,
        description: 'Get random spark',
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 