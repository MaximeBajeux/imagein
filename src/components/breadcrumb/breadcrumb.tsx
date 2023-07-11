import React from "react";
import "./breadcrumb.scss";

const BreadCrumb = ({ children }: { children: React.ReactNode }) => {
  return <div className="breadcrumb">{children}</div>;
};

const BreadCrumbItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="breadcrumb__item">{children}</div>;
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
