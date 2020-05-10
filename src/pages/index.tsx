import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => (
  <Layout title="Home">
    <p>Hello World</p>
  </Layout>
);

export default IndexPage;
