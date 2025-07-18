/**
 * spark router
*/

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::spark.spark', {
  // Стандартные CRUD-методы (можно настроить)
  only: ['find', 'findOne'], // Оставляем только эти
  except: [], // Исключаем ненужные (например, ['delete'])
  config: {
    find: {
      auth: false, // Делаем публичным
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
    },
  },
});