import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./pagination.scss";

const Pagination = ({ totalPages, currentPage, section, category }) => {
  // Calcul pour déterminer les numéros de page à afficher
  const firstPage = currentPage - 2 > 0 ? currentPage - 2 : 1;
  const lastPage = firstPage + 4 < totalPages ? firstPage + 4 : totalPages;

  // Générer les URLs de page
  const linkToPage = (pageNumber) => {
    if (pageNumber === 1) {
      return `/${section}/${category || ""}`.replace(/\/$/, ""); // Enlever le slash final si category est vide
    } else {
      return `/${section}/${category ? `${category}/` : ""}${pageNumber}`;
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {Array.from(
          { length: lastPage - firstPage + 1 },
          (_, i) => i + firstPage
        ).map((pageNumber) => (
          <li
            key={pageNumber}
            className={`pagination__item ${
              currentPage === pageNumber ? "current" : ""
            }`}
          >
            <Link
              to={linkToPage(pageNumber)}
              className="page-link"
              aria-label={`Page ${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default Pagination;
