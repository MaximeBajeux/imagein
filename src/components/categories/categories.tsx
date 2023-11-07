import React from "react";
import { Link } from "gatsby";
import "./categories.scss";
import { useStaticQuery, graphql } from "gatsby";
import { slugify } from "../../tools/strings";

const Categories = ({ section }: { section: string }) => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMdx {
        nodes {
          frontmatter {
            categories
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  // filter mdx by section, /posts/ for blog, /realisations/ for realisations

  const filteredMdx = data.allMdx.nodes.filter((node: any) => {
    switch (section) {
      case "blog":
        return node.internal.contentFilePath.includes("posts");
      case "realisations":
        return node.internal.contentFilePath.includes("realisations");
      default:
        return false;
    }
  });

  // get all categories from filteredMdx by flattening the array of categories
  const categories: string[] = filteredMdx
    .map((node: any) => node.frontmatter.categories)
    .flat();

  // remove duplicates
  const uniqueCategories = [...new Set(categories)];

  return (
    <div className="categories">
      <Link
        to={`/${section}`}
        className="category"
        aria-label="Tous les articles"
      >
        #TOUS
      </Link>
      {uniqueCategories.map((category) => (
        <Link
          to={`/${section}/categorie/${slugify(category)}`}
          className="category"
          aria-label={`${category}`}
          key={category}
        >
          #{category.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
