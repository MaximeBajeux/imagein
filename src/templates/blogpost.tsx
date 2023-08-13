import React from "react";
import { graphql, PageProps, Queries } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Row from "../components/row/row";
import Col from "../components/col/col";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Link } from "gatsby";

const BlogPost = ({
  data,
  children,
}: {
  data: PageProps<Queries.BlogPostQuery>;
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
  query BlogPost($id: String) {
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

export default BlogPost;

export const Head = (props) => {
  const {
    data: { mdx },
  } = props;
  const { title, description, slug } = mdx.frontmatter;
  const imageData =
    getImage(mdx.frontmatter.image?.childImageSharp?.gatsbyImageData) ||
    getImage(mdx.imageRemote?.childImageSharp?.gatsbyImageData);
  return (
    <SEO
      title={title}
      description={description}
      pathname={`/blog/${slug}`}
      image={imageData?.images?.fallback?.src}
      article={true}
    />
  );
};
