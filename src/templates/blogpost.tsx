import React from "react";
import { graphql, PageProps, Queries } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Row from "../components/row/row";
import Col from "../components/col/col";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Herobanner from "../components/herobanner/herobanner";
import Stack from "../components/stack/stack";
import Button from "../components/button/button";
import TableOfContents from "../components/tableofcontents/tableofcontents";

const BlogPost = ({
  data,
  children,
}: {
  data: PageProps<Queries.BlogPostQuery>;
  children: React.ReactNode;
}) => {
  const { mdx } = data;
  const { frontmatter, tableOfContents } = mdx;

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          {frontmatter.h1}
        </h1>
        <time style={{ width: "100%" }} dateTime={frontmatter.date}>
          {/* We want to format date to french format ex: lundi 8 mars 2023 */}
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
                  Accueil
                </BreadCrumb.Item>
                <BreadCrumb.Item
                  href="/blog/"
                  title="Blog"
                  position={2}
                  disabled={false}
                >
                  Blog
                </BreadCrumb.Item>
                <BreadCrumb.Item
                  href={`/blog/${frontmatter.slug}/`}
                  title={frontmatter.title}
                  position={3}
                  disabled={true}
                >
                  {frontmatter.label}
                </BreadCrumb.Item>
              </BreadCrumb>
            </Col>
          </Row>
        </Col>
      </Row>
      <article className="blogpost">
        <TableOfContents data={tableOfContents} />
        {children}
      </article>
      <section className="blogpost__cta">
        <Row>
          <Col xs={12} className="center">
            <div className="blogpost__cta__content big orange center">
              Un petit pas vers Image IN, un pas de géant pour votre business !
            </div>
          </Col>
          <Col xs={12}>
            <Stack direction="horizontal" position="center" className="mb-3">
              <Button as="Link" to="/contact/" className="reverse">
                Prendre rendez-vous
              </Button>
              <Button as="Link" to="/offres/">
                Découvrir nos services
              </Button>
            </Stack>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        label
        h1
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
      tableOfContents
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

export const Head = (props) => {
  const {
    data: { mdx },
  } = props;
  const { title, description, slug, date } = mdx.frontmatter;
  const imageData =
    getImage(mdx.frontmatter.image?.childImageSharp?.gatsbyImageData) ||
    getImage(mdx.imageRemote?.childImageSharp?.gatsbyImageData);
  return (
    <SEO
      title={title}
      description={description}
      pathname={`/blog/${slug}/`}
      image={imageData?.images?.fallback?.src}
      article={true}
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${title}",
            "datePublished": "${date}",
            "author": {
              "@type": "Person",
              "name": "Maxime Bajeux"
            }
          }
        `}
      </script>
    </SEO>
  );
};

export default BlogPost;
