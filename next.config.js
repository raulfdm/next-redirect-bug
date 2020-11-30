const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/blog/e-o-coronavirus-hein",
        destination: "/pt/blog/e-o-coronavirus-hein",
        locale: false,
        permanent: true,
      },
      {
        source: "/blog/outro-examplo",
        destination: "/pt/blog/outro-examplo",
        permanent: true,
      },
    ];
  },
};
