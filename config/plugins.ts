export default ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary', // Cambia entre proveedores aquí si necesitas
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  supabase: {
    config: {
      provider: 'strapi-provider-upload-supabase',
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL", "https://icspknzugbnnanbidolg.supabase.co"),
        apiKey: env("SUPABASE_API_KEY", "your-supabase-api-key"),
        bucket: env("SUPABASE_BUCKET", "strapi-uploads"),
        directory: env("SUPABASE_DIRECTORY", "uploads"),
        options: {},
      },
    },
  },
});
