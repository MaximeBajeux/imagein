import React from "react";
import { graphql, PageProps, Queries } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Row from "../components/row/row";
import Col from "../components/col/col";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Link } from "gatsby";

const Realisation = ({
  data,
  children,
}: {
  data: PageProps<Queries.RealisationQuery>;
  children: React.ReactNode;
}) => {
  const { mdx } = data;
  const { frontmatter } = mdx;

  return (
    <Layout>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item>
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>
              <Link to="/blog">Blog</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>{frontmatter.title}</BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <article className="blogpost">
        <h1>{frontmatter.title}</h1>
        <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        {children}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query Realisation($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MM YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        imageAlt
      }
      imageRemote {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export default Realisation;

export const Head = () => <SEO title="Blog" article />;
