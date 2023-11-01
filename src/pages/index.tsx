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
          <GlowButton as="Link" to="/contact/">
            Je veux un site
          </GlowButton>
          <GlowButton as="Link" to="/offres/">
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
              <Col xs={12} className="service_text">
                <p>
                  🐢💤 Dans l'écosystème du web, les PME sont les plus mal
                  équipées. De nombreux sites de piètre qualité ont été vendus
                  sans aucun suivi. Ainsi, vous vous retrouvez avec des sites
                  qui ne vous rapportent rien.
                </p>
                <p>
                  🐇💨 Chez Image IN, nous pensons que les PME ont le droit
                  d'avoir des sites performants et optimisés pour le SEO. C'est
                  pourquoi nous avons décidé de vous proposer des sites rapides
                  comme l'éclair, à des prix abordables.
                </p>
                <p>
                  💵🔨 Nous avons développé pour vous des outils nous permettant
                  de vous proposer des sites hauts de gamme qui rentrent dans
                  votre budget et ce, avec un suivi de qualité.
                </p>
                <p>
                  👇 Ça commence à partir de 250€/mois pendant un an, après quoi
                  le site vous appartient ! Pour ce prix on inclut également le
                  logo, la charte graphique, un shooting photo, la rédaction de
                  vos textes et vos 3 premiers articles SEO !
                </p>
              </Col>
              <Stack direction="horizontal" className="dark">
                <Button
                  as="Link"
                  to="/votre-site-a-250-euros-par-mois-pendant-1-an/"
                >
                  Découvrir le pack 250€/mois
                </Button>
                <Button as="Link" to="/offres/">
                  Voir tous les services
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
              fonctionner. Cela permet d'obtenir des sites ultra rapides et
              hébergés sur un CDN (Content Delivery Network) qui permet de les
              distribuer à travers le monde entier.
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
              entreprise, mais il n'est pas une fin en soi. Il doit être
              accompagné impérativement d'une stratégie de communication
              efficace afin d'être visible.
            </p>
            <p>
              📈 C'est pourquoi nous vous accompagnons dans la création d'une
              stratégie en béton armé, afin de vous permettre d'atteindre vos
              objectifs de croissance !
            </p>
            <p>
              📸 Chez Image IN, nous ne vous abandonnons pas avec un site clé en
              main vide de contenu. Notre équipe travaille avec des
              professionnels de la vidéo et de l'image afin de vous fournir un
              contenu de qualité.
            </p>
            <p>
              ✍️ Aussi, nous travaillons aussi avec des rédacteurs web et des
              professionnels du SEO afin de vous fournir un contenu optimisé
              pour le référencement qui vous permettra d'atteindre les premières
              places sur Google.
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
      description="Agence spécialisée dans La création de sites performants. Nous vous créons un site ultra rapide et optimisé pour le SEO !"
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
