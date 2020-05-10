exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      author: String!
    }
    
    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
  `;
  createTypes(typeDefs);
};
