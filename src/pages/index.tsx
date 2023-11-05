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
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Animation = lazy(() => import("../components/animation/animation"));
const Circlechart = lazy(() => import("../components/circlechart/circlechart"));

type IndexProps = PageProps<Queries.IndexPageQuery>;

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
          Création de sites internet
          <span className="underline"> vraiment </span> utiles pour votre
          entreprise
        </h1>
        <h2 className="herobanner__subtitle">
          Vous souhaitez mettre toutes les chances de votre côté pour développer
          votre activité en ligne ?
        </h2>
        <h3 className="herobanner__subtitle">
          Nous vous créons un site conçu pour être visible et convertir vos
          visiteurs en clients.
        </h3>
        <Stack
          direction="horizontal"
          position="center"
          gap={5}
          style={{ marginTop: "3rem" }}
        >
          <GlowButton as="Link" to="/offres/">
            Je veux un site
          </GlowButton>
          <GlowButton as="Link" to="#service">
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
      <section className="service" id="service">
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <h2>Notre vocation</h2>
              </Col>
              <Col xs={12} className="service__text">
                <p>
                  🐇💨 Chez Image IN, nous pensons que les PME ont le droit
                  d'avoir des sites réellement utiles à leur activité. Des sites
                  performants et vivants, qui leur permettent d'être visibles et
                  de se développer.
                </p>
                <p>
                  💵🔨 Nous avons développé des outils nous permettant de
                  proposer des sites hauts de gamme qui rentrent dans votre
                  budget.
                </p>
                <p>
                  👇 Ça commence à partir de{" "}
                  <strong>250€/mois pendant un an</strong> 👌
                </p>
                <p>
                  Après quoi le site vous appartient ! Mais ce n'est pas tout...
                  <br />
                  Pour ce prix, nous incluons également:
                  <ul className="withPuce">
                    <li>
                      La création de votre <strong>logo</strong>
                    </li>
                    <li>
                      la création de la <strong>charte graphique</strong>
                    </li>
                    <li>
                      Un <strong>shooting photo</strong> (produit ou corporate,
                      vous choisissez)
                    </li>
                    <li>
                      La <strong>rédaction</strong> des textes du site
                    </li>
                    <li>
                      Vos 3 premiers <strong>articles SEO</strong>
                    </li>
                    <li>
                      12 mois de <strong>conseil</strong> et{" "}
                      <strong>maintenance</strong>
                    </li>
                  </ul>
                </p>
              </Col>
              <Stack direction="horizontal" className="dark">
                <Button
                  as="Link"
                  to="/votre-site-a-250-euros-par-mois-pendant-1-an/"
                  className="reverse"
                >
                  Découvrir le pack
                </Button>
                <Button as="Link" to="/offres/">
                  Les autres services
                </Button>
              </Stack>
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
                  Nos sites sont créés pour <strong>performer</strong>, afin de
                  maximiser à la fois l'expérience en ligne de vos visiteurs et
                  votre <strong>visibilité</strong> sur les moteurs de
                  recherche.
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
              ⚡ Nos sites sont créés avec des technologies modernes nous
              permettant de vous fournir des sites rapides et évolutifs rendus
              statiquement.
            </p>
            <p>
              📱 Ils sont également conçus pour être parfaitement adaptés aux
              mobiles et accessibles aux personnes en situation de handicap.
              Ainsi votre site est accessible à tous.
            </p>
            <p>
              🌍 Un site rendu statiquement, c'est un site qui est à la fois
              plus économe en énergie et plus facile à comprendre pour les
              moteurs de recherche. Ainsi vous améliorez votre référencement
              naturel tout en faisant un geste pour la planète.
            </p>
            <p>
              ⚙️ Enfin, nous utilisons des outils de gestion de contenu simples
              à prendre en main, vous permettant de modifier votre site
              facilement.
            </p>
            <Stack direction="horizontal" className="dark">
              <Button as="Link" to="/contact/">
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
            <h2>🍒 Notre valeur ajoutée</h2>
            <p>
              🤔 Un site internet performant est un atout majeur pour votre
              entreprise. <strong>Mais seul, il ne sert à rien !</strong>
              <br />
              Il doit être accompagné impérativement d'une stratégie de
              communication efficace !
            </p>
            <p>
              📈 C'est pourquoi nous vous accompagnons dans la création d'une
              stratégie en béton armé afin de vous permettre d'atteindre vos
              objectifs de croissance !
            </p>
            <p>
              📸 Chez Image IN, nous ne vous abandonnons pas avec un site clé en
              main vide de contenu.
            </p>
            <p>
              ✍️ Rédaction de textes, shootings photo, reportages vidéo, nous
              vous accompagnons dans la création de contenu de qualité pour
              votre site internet.
            </p>
            <Stack direction="horizontal" className="dark">
              <Button as="Link" to="/contact/">
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

export const Head = () => {
  const { siteUrl, featuredImage } = useSiteMetadata();
  const logo =
    siteUrl +
    featuredImage?.childImageSharp?.gatsbyImageData?.images.fallback.src;
  return (
    <SEO
      title="Image In - Agence web orientée performance"
      description="Création de sites internet vraiment utiles pour votre entreprise."
      pathname="/"
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "${siteUrl}",
            "logo": "${logo}"
          }
        `}
      </script>
    </SEO>
  );
};

export const query = graphql`
  query IndexPage {
    allFile(filter: { sourceInstanceName: { eq: "lottie" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`;

export default IndexPage;
