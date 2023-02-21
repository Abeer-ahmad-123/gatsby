import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Img from 'gatsby-image';
import * as styles from '../../styles/projects.module.css';

const Projects = ({ data }) => {
  const Projects = data.projects.nodes;
  const Contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {Projects.map((project) => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />

                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like What you see? Email me at {Contact} for the quote!</p>
      </div>
    </Layout>
  );
};

export default Projects;

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site(siteMetadata: {}) {
      siteMetadata {
        contact
      }
    }
  }
`;
