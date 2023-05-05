import React from "react";
import Stack from "../stack/stack";
import "./card.scss";

const Card = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div {...props} className={`card ${className}`}>
      {children}
    </div>
  );
};

const Image = ({ children }: { children: React.ReactNode }) => {
  return <div className="card__image">{children}</div>;
};

Card.Image = Image;

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="card__content">{children}</div>;
};

Card.Content = Content;

const Title = ({
  as = "h3",
  children,
}: {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  const Component = as;
  return <Component className="card__title">{children}</Component>;
};

Card.Title = Title;

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack className="card__footer" direction="horizontal">
      {children}
    </Stack>
  );
};

Card.Footer = Footer;

export default Card;
