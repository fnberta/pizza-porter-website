import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => (
  <Layout title="Home">
    <nav></nav>
    <section>
      <div>
        <p>Pizza-Porter</p>
        <p>Pizza Napoletana & Coffee</p>
      </div>
      <div>Karte</div>
    </section>
    <section>Pizza & Coffee Stand Wo sind wir wann? Was gibt es und was kostet es?</section>
    <section>
      <div>Spezialitätenkaffee</div>
      <div>Pizza Napoletana</div>
    </section>
    <section>Catering</section>
    <section>über uns</section>
    <section>Kontakt Wir freuen uns auf deine Nachricht!</section>
  </Layout>
);

export default IndexPage;
