import React from "react";
import Lottie from "react-lottie";
import "./index.scss";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import HeroBanner from "../components/herobanner/herobanner";
import { StaticImage } from "gatsby-plugin-image";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Circlechart from "../components/circlechart/circlechart";
import Stack from "../components/stack/stack";
import Button from "../components/button/button";
import GlowButton from "../components/glowbutton/glowbutton";
import Animation from "../components/animation/animation";
import * as animation1Data from "../lottie/website-building-of-shopping-sale.json";
import * as animation2Data from "../lottie/video-marketing.json";

const IndexPage = () => {
  return (
    <Layout className="home">
      <SEO title="Home" />
      <HeroBanner
        words={[
          "Performance",
          "Créativité",
          "Ergonomie",
          "SEO",
          "Design",
          "Photographie",
          "UI/UX",
          "Marketing",
          "Développement",
        ]}
      >
        <h1 className="herobanner__title">
          Agence spécialisée dans l'ultra performance
        </h1>
        <h3 className="herobanner__subtitle">
          Vous souhaitez mettre toutes les chances de votre côté pour convertir
          un maximum de prospects ?
        </h3>
        <h3 className="herobanner__subtitle">
          Nous vous créons un site ultra rapide et optimisé pour le SEO !
        </h3>
        <Stack
          direction="horizontal"
          position="center"
          gap={5}
          style={{ marginTop: "3rem" }}
        >
          <GlowButton as="Link" to="contact/">
            Je veux un site
          </GlowButton>
          <GlowButton as="Link" to="about/">
            En savoir plus
          </GlowButton>
        </Stack>
      </HeroBanner>
      <section className="partners">
        <Row>
          <Col xs={12}>
            <h2>Ils nous font confiance</h2>
          </Col>
        </Row>
        <Row className="middle">
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage src="../images/oney_logo.png" alt="logo de Oney" />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/portainer_logo.png"
              alt="Logo de Portainer"
            />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage src="../images/ufem_logo.jpg" alt="logo de l'Ufem" />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/nordmotors_logo.jpg"
              alt="logo de Nord Motors"
            />
          </Col>
        </Row>
      </section>
      <section className="service">
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <h2>Notre vocation</h2>
              </Col>
              <Col xs={12} className="service__text">
                <p>
                  🐢 La plupart des sites internet sont lents et mal optimisés
                  pour le SEO et l'expérience utilisateur, notamment sur mobile.
                  Cette lenteur, en plus d'être un gouffre énergétique, vous
                  fait directement perdre des clients insatisfaits.
                </p>
                <p>
                  🐇 C'est pourquoi nous vous accompagnons dans la création d'un
                  site internet qui se veut ultra performant, rapide et optimisé
                  pour le SEO.
                </p>
                <p>
                  💸 Ce genre de site est généralement réservé aux grandes
                  entreprises qui ont les moyens de se payer une agence de
                  communication.
                </p>
                <p>
                  🐣 Mais nous avons décidé de les rendre accessible à tous,
                  même aux petites entreprises. Alors n'hésitez pas à nous
                  contacter pour un devis gratuit.
                </p>
                <Stack direction="horizontal" className="dark">
                  <Button as="Link" to="offres/">
                    Découvrir nos offres
                  </Button>
                </Stack>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <h2>
                  <StaticImage
                    src="../images/pagespeed_64dp.png"
                    alt="logo de pagespeed insights"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      objectFit: "contain",
                      marginRight: "0.4rem",
                    }}
                  />
                  Notre Objectif
                </h2>
              </Col>
              <Col xs={12}>
                <p>
                  Nos sites sont optimisés pour obtenir un score de minimal de
                  90/100 sur Google PageSpeed Insights, afin d'offrir la
                  meilleure expérience utilisateur possible.
                </p>
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={95}
                  text="Performances"
                  color="lime"
                  delay={0}
                />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={92}
                  text="Accessibilité"
                  color="lime"
                  delay={0.15}
                />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={100}
                  text="Bonnes pratiques"
                  color="lime"
                  delay={0.3}
                />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={100}
                  text="SEO"
                  color="lime"
                  delay={0.45}
                />
              </Col>
              <Col xs={12}>
                <Stack direction="horizontal" className="dark">
                  <Button>Voir en live</Button>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="method">
        <Row className="rtl">
          <Col
            xs={12}
            md={6}
            className="stretch"
            style={{ justifyContent: "center" }}
          >
            <h2>🎓 Notre méthode</h2>
            <p>
              ⚡ Afin de créer des sites rapides comme l'éclair, nous utilisons
              des technologies de rendu statique comme GatsbyJS ou NextJS.
            </p>
            <p>
              🌍 Ces technologies permettent de générer des sites statiques,
              c'est à dire des sites qui ne nécessitent pas de serveur pour
              fonctionner. Cela permet d'obtenir des sites ultra rapides, car
              ils sont hébergés sur un CDN (Content Delivery Network) qui permet
              de les distribuer à travers le monde entier.
            </p>
            <p>
              📈 De plus, ces technologies permettent de générer des sites
              optimisés pour le SEO, car elles génèrent des sites avec un code
              propre et optimisé pour le référencement.
            </p>
            <p>
              ⚙️ Enfin, GatsbyJS comme NextJS vous permettent de gérer votre
              contenu de manière simple et intuitive, grâce à des CMS comme
              Contentful, Strapi ou encore Wordpress. Ainsi vous gardez la main
              sur votre contenu, sans avoir à toucher au code.
            </p>
            <Stack direction="horizontal" className="dark">
              <Button as="Link" to="contact/">
                Je veux ça !
              </Button>
            </Stack>
          </Col>
          <Col xs={12} md={6} className="stretch middle">
            <Animation data={animation1Data} />
          </Col>
        </Row>
      </section>
      <section className="cerise">
        <Row>
          <Col
            xs={12}
            md={6}
            className="stretch"
            style={{ justifyContent: "center" }}
          >
            <h2>🍒 Notre secret sauce</h2>
            <p>
              🤔 Un site web performant est un atout majeur pour votre
              entreprise, mais il n'est pas une fin en soi. Il doit être
              accompagné d'une stratégie de communication efficace.
            </p>
            <p>
              📈 C'est pourquoi nous vous accompagnons dans la création d'une
              stratégie en béton armé, afin de vous permettre d'atteindre vos
              objectifs de croissance !
            </p>
            <p>
              📸 Chez Image IN, nous ne vous abandonnons pas avec un site clé en
              main vide de contenu. Notre équipe travaille avec des
              professionnelles de la photographie et de la vidéo afin de vous
              fournir un contenu de qualité pour votre site internet.
            </p>
            <p>
              🎨 De la même manière, nous travaillons main dans la main avec des
              graphistes afin de vous fournir un design unique et à votre image.
            </p>
            <p>
              ✍️ Enfin, nous travaillons avec des rédacteurs web afin de vous
              fournir un contenu de qualité et optimisé pour le SEO.
            </p>
            <Stack direction="horizontal" className="dark">
              <Button as="Link" to="contact/">
                Je suis convaincu !
              </Button>
            </Stack>
          </Col>
          <Col xs={12} md={6} className="stretch middle">
            <Animation data={animation2Data} />
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const Head = () => <SEO title="Home" />;

export default IndexPage;
