import { PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Herobanner from "../components/herobanner/herobanner";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Button from "../components/button/button";

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "4rem" }}>
          Comment nous contacter ?
        </h1>
        <p>
          (Pour obtenir un fantastique site internet ultra performant et fait
          avec amour ! 😍)
        </p>
      </Herobanner>
      <Row className="middle mtb-2">
        <Col xs={12} md={6} className="mtb-2" style={{ fontSize: "1.2rem" }}>
          <p className="mb-1">
            ☕ Vous avez un projet ? Une question ? Une envie de partager un
            café bien chaud ? N'hésitez pas à nous contacter !
          </p>
          <p className="mb-1">
            🍪 Nous on aime le café, les cookies, les projets cools et les
            messages envoyés par écrit !
          </p>
          <p className="mb-1">
            📞 On aime un peu moins les appels téléphoniques parce qu'on est
            souvent concentrés sur nos projets et ça nous coupe dans notre élan,
            mais on vous répondra quand même !
          </p>
          <p>🤖 Sauf si vous êtes un robot...</p>
        </Col>
        <Col xs={12} md={6} className="center mtb-2">
          <Card>
            <Card.Content>
              <p
                className="p-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.4rem",
                  paddingBottom: "0",
                }}
              >
                <strong>📧 Par e-mail</strong>
                <Button
                  as="a"
                  to="mailto:contact@image-in.net"
                  className="reverse mt-1"
                >
                  contact@image-in.net
                </Button>
              </p>
              <p
                className="p-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.4rem",
                }}
              >
                <strong>📞 Par téléphone</strong>
                <Button as="a" to="tel:+33650710719" className="reverse mt-1">
                  06 50 71 07 19
                </Button>
              </p>
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;

const Head = () => {
  return <SEO title="Nous contacter" />;
};
