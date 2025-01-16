export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // Cambia '*' por los dominios de tu frontend si es necesario
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '50mb', // Límite para JSON
      formLimit: '50mb', // Límite para formularios
      textLimit: '50mb', // Límite para texto
    },
  }
];
