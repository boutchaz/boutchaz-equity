module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('EMAIL'),
          defaultReplyTo: env('EMAIL'),
          testAddress: 'zakaria.boutchamir@gmail.com',
        },
      },
    },
});