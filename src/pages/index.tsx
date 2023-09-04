import React, { lazy } from "react";
import "./index.scss";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import HeroBanner from "../components/herobanner/herobanner";
import Stack from "../components/stack/stack";
import GlowButton from "../components/glowbutton/glowbutton";
import { graphql, PageProps } from "gatsby";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Button from "../components/button/button";
import { StaticImage } from "gatsby-plugin-image";
import SuspenseHelper from "../components/suspensehelper/suspensehelper";
import BreadCrumb from "../components/breadcrumb/breadcrumb";

const Animation = lazy(() => import("../components/animation/animation"));
const Circlechart = lazy(() => import("../components/circlechart/circlechart"));

type IndexProps = PageProps<Queries.LottieFilesQuery>;

const IndexPage = (props: IndexProps) => {
  const { data } = props;
  // change lottie files list to object with name as key
  const lottieFiles = data.allFile.nodes.reduce((acc, node) => {
    if (!node.publicURL) return acc;
    acc[node.name] = node.publicURL;
    return acc;
  }, {} as { [key: string]: string });

  return (
    <Layout className="home">
      <HeroBanner
        words={[
          "Performance",
          "Ergonomie",
          "SEO",
          "Design",
          "Photographie",
          "UI/UX",
          "Marketing",
          "Développement",
          "Créativité",
        ]}
      >
        <h1 className="herobanner__title">
          Agence spécialisée dans La création de sites performants
        </h1>
        <h2 className="herobanner__subtitle">
          Vous souhaitez mettre toutes les chances de votre côté pour convertir
          un maximum de prospects ?
        </h2>
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
          <GlowButton as="Link" to="offres/">
            En savoir plus
          </GlowButton>
        </Stack>
      </HeroBanner>
      <BreadCrumb style={{ visibility: "hidden" }}>
        <BreadCrumb.Item href="/" title="Accueil" position={1} disabled={false}>
          Accueil
        </BreadCrumb.Item>
      </BreadCrumb>
      <section className="partners">
        <Row>
          <Col xs={12}>
            <h2>Ils nous font confiance</h2>
          </Col>
        </Row>
        <Row className="middle p-1">
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/oney_logo.png"
              alt="logo de Oney"
              placeholder="blurred"
              layout="fixed"
              width={160}
              quality={90}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/portainer_logo.png"
              alt="Logo de Portainer"
              placeholder="blurred"
              layout="fixed"
              width={160}
              quality={90}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/ufem_logo.jpg"
              alt="logo de l'Ufem"
              placeholder="blurred"
              layout="fixed"
              width={160}
              quality={90}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col xs={6} md={3} className="partner-logo">
            <StaticImage
              src="../images/nordmotors_logo.jpg"
              alt="logo de Nord Motors"
              placeholder="blurred"
              layout="fixed"
              width={160}
              quality={90}
              formats={["auto", "webp", "avif"]}
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
                  pour le <strong>SEO</strong>. Cela impacte l'expérience de vos
                  utilisateurs, notamment sur mobile. Cette lenteur, en plus
                  d'être un gouffre énergétique coûteux, vous fait directement
                  perdre des clients insatisfaits.
                </p>
                <p>
                  🐇 C'est pourquoi nous vous accompagnons dans la création d'un
                  site internet qui se veut ultra performant, rapide et optimisé
                  pour le SEO.
                </p>
                <p>
                  💸 Ce genre de site est généralement réservé aux grandes
                  entreprises qui ont les moyens de gérer une équipe de{" "}
                  <strong>développeurs</strong> en interne ou de passer par une
                  agence qui leur dédiera tout leur temps !
                </p>
                <p>
                  🐣 Mais nous avons décidé de les rendre accessibles à tous !
                  En usant de la boîte à outils que nous avons développée, nous
                  sommes capables de vous proposer des sites à des prix
                  abordables et de mettre toute notre force de travail dans la
                  création de son <strong>identité visuelle</strong> !
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
                      width: "3rem",
                      height: "3rem",
                      objectFit: "contain",
                      marginRight: "0.4rem",
                    }}
                  />
                  Notre Objectif
                </h2>
              </Col>
              <Col xs={12} className="mb-2">
                <p>
                  Nos sites sont optimisés pour obtenir un score de minimal de
                  90/100 sur Google PageSpeed Insights, afin d'offrir la
                  meilleure <strong>expérience utilisateur</strong> possible.
                </p>
              </Col>

              <Col xs={6}>
                <SuspenseHelper fallback={null}>
                  <Circlechart percentage={95} text="Performances" />
                </SuspenseHelper>
              </Col>

              <Col xs={6}>
                <SuspenseHelper fallback={null}>
                  <Circlechart percentage={100} text="Accessibilité" />
                </SuspenseHelper>
              </Col>

              <Col xs={6}>
                <SuspenseHelper fallback={null}>
                  <Circlechart percentage={100} text="Bonnes pratiques" />
                </SuspenseHelper>
              </Col>

              <Col xs={6}>
                <SuspenseHelper fallback={null}>
                  <Circlechart percentage={100} text="SEO" />
                </SuspenseHelper>
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
              des technologies de rendu statique comme <strong>GatsbyJS</strong>{" "}
              ou <strong>NextJS</strong>.
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
              propre et optimisé pour le <strong>référencement</strong>.
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
            <SuspenseHelper fallback={null}>
              <Animation
                className="animation"
                path={lottieFiles["animation1"]}
              />
            </SuspenseHelper>
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
              professionnels de la photographie et de la vidéo afin de vous
              fournir un contenu de qualité pour votre site internet.
            </p>
            <p>
              🎨 De la même manière, nous travaillons main dans la main avec des
              graphistes afin de vous fournir un design unique et à votre image.
            </p>
            <p>
              ✍️ Enfin, nous travaillons aussi avec des rédacteurs web afin de
              vous fournir un contenu de qualité et optimisé pour le SEO.
            </p>
            <Stack direction="horizontal" className="dark">
              <Button as="Link" to="contact/">
                Je suis convaincu !
              </Button>
            </Stack>
          </Col>
          <Col xs={12} md={6} className="stretch middle">
            <SuspenseHelper fallback={null}>
              <Animation
                className="animation"
                path={lottieFiles["animation2"]}
              />
            </SuspenseHelper>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <SEO
    title="Image In"
    description="Agence spécialisée dans La création de sites performants. Nous vous créons un site ultra rapide et optimisé pour le SEO !"
  />
);

export const query = graphql`
  query LottieFiles {
    allFile(filter: { sourceInstanceName: { eq: "lottie" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`;

export default IndexPage;
