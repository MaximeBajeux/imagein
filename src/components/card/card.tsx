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

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="card__title">{children}</div>;
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
