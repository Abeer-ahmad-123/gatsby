import React from 'react';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/home.module.css';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Frontend & Backend developer based in UK.</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
}
export const imageQuery = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
