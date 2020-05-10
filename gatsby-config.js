module.exports = {
  siteMetadata: {
    title: 'Pizza-Porter',
    description: 'Pizza napoletana & Coffee',
    author: 'Fabio Berta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
