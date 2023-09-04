import React from "react";
import { graphql, PageProps, Queries } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Row from "../components/row/row";
import Col from "../components/col/col";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Link } from "gatsby";
import Herobanner from "../components/herobanner/herobanner";

const Lab = ({
  data,
  children,
}: {
  data: PageProps<Queries.LabQuery>;
  children: React.ReactNode;
}) => {
  const { mdx } = data;
  const { frontmatter } = mdx;

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          {frontmatter.title}
        </h1>
        <time style={{ width: "100%" }} dateTime={frontmatter.date}>
          publié le{" "}
          {new Date(frontmatter.date).toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </Herobanner>
      <Row className="fullwidth shadow-1">
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <BreadCrumb>
                <BreadCrumb.Item
                  href="/"
                  title="Accueil"
                  position={1}
                  disabled={false}
                >
                  <Link to="/">Accueil</Link>
                </BreadCrumb.Item>
                <BreadCrumb.Item
                  href="/le-lab"
                  title="Le lab"
                  position={2}
                  disabled={false}
                >
                  <Link to="/le-lab">Le lab</Link>
                </BreadCrumb.Item>
                <BreadCrumb.Item
                  href={`/le-lab/${frontmatter.slug}`}
                  title={frontmatter.title}
                  position={3}
                  disabled={true}
                >
                  {frontmatter.title}
                </BreadCrumb.Item>
              </BreadCrumb>
            </Col>
          </Row>
        </Col>
      </Row>
      <article className="blogpost">{children}</article>
    </Layout>
  );
};

export const query = graphql`
  query Lab($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "YYYY-MM-DD hh:mm:ss")
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

export default Lab;

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
      pathname={`/le-lab/${slug}/`}
      image={imageData?.images?.fallback?.src}
      article={true}
      noIndex
      noFollow
    />
  );
};
