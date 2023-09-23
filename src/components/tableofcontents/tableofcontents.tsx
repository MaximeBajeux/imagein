import React from "react";
import "./tableofcontents.scss";
import { removeAccents } from "../../tools/strings";
import { useState, useEffect } from "react";

const TableOfContents = ({ data }: { data: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!data || data.items.length === 0) {
    return null;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleExpand();
    }
  };

  const renderTableOfContents = (items: any) => {
    return (
      <ul>
        {items.map((item: any, index: number) => (
          <li key={index}>
            <a href={removeAccents(item.url)}>{item.title}</a>
            {item.items && renderTableOfContents(item.items)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={`tableofcontents shadow-2 ${isExpanded ? "expanded" : ""}`}
      aria-label="Table des matières"
    >
      <div
        className="tableofcontents__title h3"
        onClick={toggleExpand}
        onKeyUp={handleKeyUp}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        Table des matières
      </div>
      <div className="tableofcontents__content">
        {renderTableOfContents(data.items)}
      </div>
    </nav>
  );
};

export default TableOfContents;
