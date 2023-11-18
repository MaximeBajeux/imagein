import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Pagination from "../components/pagination/pagination";
import Categories from "../components/categories/categories";
import { ARTICLES_PER_PAGE } from "../constants";
import { slugify } from "../tools/strings";

const BlogPage: React.FC<PageProps<Queries.BlogListQuery>> = ({
  pageContext,
  data,
}: PageProps<Queries.BlogListQuery>) => {
  const totalCount = data.allMdx.totalCount;

  const category = pageContext.category ? pageContext.category[0] : "";
  const currentPage = pageContext.currentPage;

  const cards = data.allMdx.nodes.map((node: any) => {
    const { frontmatter, imageRemote } = node;
    const imageData =
      imageRemote?.childImageSharp?.gatsbyImageData ||
      frontmatter.image?.childImageSharp?.gatsbyImageData;

    return (
      <Col xs={12} md={6} lg={4} xl={3} key={node.id} className="gap-2">
        <Link to={`/blog/${node.frontmatter?.slug}`} style={{ height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <Card.Image data={imageData} alt={node.frontmatter?.imageAlt} />
            <Card.Title as="h2">{node.frontmatter?.label}</Card.Title>
            <Card.Content>{node.frontmatter?.description}</Card.Content>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Nos derniers articles
        </h1>
      </Herobanner>
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
              disabled={category === ""}
            >
              Blog
            </BreadCrumb.Item>
            {category !== "" && (
              <BreadCrumb.Item
                href={`/blog/categorie/${slugify(category)}/`}
                title={category}
                position={3}
                disabled={true}
              >
                {category}
              </BreadCrumb.Item>
            )}
          </BreadCrumb>
        </Col>
      </Row>
      <section className="layout__list">
        <Row className="stretch">
          <Col xs={12}>
            <Categories section="blog" />
          </Col>
          {cards}
          <Col xs={12}>
            <Pagination
              totalPages={totalCount / ARTICLES_PER_PAGE + 1}
              currentPage={currentPage}
              section="blog"
              category={category}
            />
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!, $category: [String]) {
    allMdx(
      filter: {
        frontmatter: {
          type: { regex: "/article/" }
          categories: { in: $category }
        }
        internal: { contentFilePath: { regex: "/posts/" } }
      }
      sort: { frontmatter: { date: DESC } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        frontmatter {
          title
          label
          slug
          date
          description
          categories
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
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
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      totalCount
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = ({ pageContext, data }) => {
  const currentCategory = pageContext.category ? pageContext.category[0] : "";
  const currentPage = pageContext.currentPage;

  return (
    <SEO
      title="Image IN - Nos derniers articles"
      description="Retrouvez nos derniers articles sur le web et le SEO"
      pathname={`/blog/${
        currentCategory ? `categorie/${slugify(currentCategory)}/` : ""
      }${currentPage > 1 ? `${currentPage}/` : ""}
      `}
    />
  );
};
