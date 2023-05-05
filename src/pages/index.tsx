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
import GlowButton from "../components/glowbutton/glowbutton";
import Stack from "../components/stack/stack";

import * as methodAnimation from "../lottie/website-building-of-shopping-sale.json";
import * as secretSauceAnimation from "../lottie/video-marketing.json";

const IndexPage = () => {
  const methodDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: methodAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const secretSauceDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: secretSauceAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Layout className="home">
      <SEO title="Home" />
      <HeroBanner />
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
                  <GlowButton as="Link" to="contact/">
                    Demander un devis
                  </GlowButton>
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
                <Circlechart percentage={95} text="Performances" color="lime" />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={92}
                  text="Accessibilité"
                  color="lime"
                />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart
                  percentage={100}
                  text="Bonnes pratiques"
                  color="lime"
                />
              </Col>
              <Col xs={6} md={3}>
                <Circlechart percentage={100} text="SEO" color="lime" />
              </Col>
              <Col xs={12}>
                <Stack direction="horizontal" className="dark">
                  <GlowButton>Voir en live</GlowButton>
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
              <GlowButton as="Link" to="contact/">
                Je veux ça !
              </GlowButton>
            </Stack>
          </Col>
          <Col xs={12} md={6} className="stretch middle">
            <Lottie options={methodDefaultOptions} />
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
              <GlowButton as="Link" to="contact/">
                Je suis convaincu !
              </GlowButton>
            </Stack>
          </Col>
          <Col xs={12} md={6} className="stretch middle">
            <Lottie options={secretSauceDefaultOptions} />
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const Head = () => <SEO title="Home" />;

export default IndexPage;
