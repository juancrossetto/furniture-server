// export default () => ({});


export default ({ env }) => ({
    upload: {
      config: {
        provider: "supabase",
        providerOptions: {
          apiUrl: env("SUPABASE_API_URL", "https://your-supabase-url.supabase.co"),
          apiKey: env("SUPABASE_API_KEY", "your-supabase-api-key"),
          bucket: env("SUPABASE_BUCKET", "strapi-uploads"),
          directory: env("SUPABASE_DIRECTORY", "uploads"),
          options: {},
        },
      },
    },
  });
  