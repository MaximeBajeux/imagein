import React from "react";
import "./breadcrumb.scss";
import { Link } from "gatsby";

const BreadCrumb = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <ul
      className="breadcrumb"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
      {...props}
    >
      {children}
    </ul>
  );
};

const BreadCrumbItem = ({
  children,
  href,
  title,
  position,
  disabled = false,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
  position: number;
  disabled?: boolean;
}) => {
  return (
    <li
      className="breadcrumb__item"
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      {disabled ? (
        <span itemProp="name" title={title}>
          {children}
        </span>
      ) : (
        <Link to={href} title={title} itemProp="item">
          <span itemProp="name">{children}</span>
        </Link>
      )}
      <meta itemProp="position" content={position.toString()} />
    </li>
  );
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
