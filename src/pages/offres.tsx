import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps } from "gatsby";

import Row from "../components/row/row";
import Col from "../components/col/col";
import GlowButton from "../components/glowbutton/glowbutton";
import Herobanner from "../components/herobanner/herobanner";
import Grid from "../components/grid/grid";
import Banner from "../components/banner/banner";
import Button from "../components/button/button";
import Stack from "../components/stack/stack";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Link } from "gatsby";

const OffresPage: React.FC<PageProps> = ({ data }: PageProps) => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title mt-3 mb-2">
          Quelle type d'entreprise <br />
          êtes-vous ?
        </h1>
        <Stack gap={2} position="center" direction="horizontal">
          <GlowButton as="a" to="#pme">
            TPE ou PME
          </GlowButton>
          <GlowButton as="a" to="#eti">
            ETI ou grand groupe
          </GlowButton>
        </Stack>
      </Herobanner>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item
              href="/"
              title="Accueil"
              position={1}
              disabled={false}
            >
              Accueil
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/offres"
              title="Nos offres"
              position={2}
              disabled={true}
            >
              Nos offres
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section id="pme">
        <Row className="mb-3">
          <Col xs={12}>
            <h2 className="title mtb-2">TPE ou PME</h2>
          </Col>
          <Col xs={12} md={6}>
            <h3 className=" mt-1 mb-2">Nous avons une solution pour vous !</h3>
            <Row>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  🪙 Nous savons qu'un site web représente un investissement
                  important pour une TPE ou une PME.
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  🗝️ C'est pourquoi nous vous proposons une solution avec un
                  étalement du paiement sur 12 mois.
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  📑 A la fin du paiement, vous êtes propriétaire de votre site
                  web, ce n'est pas une location !
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  🚀 Bien plus qu'un site internet clé en main, nous vous
                  accompagnons sur la gestion de votre projet numérique de A à
                  Z.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h3 className=" mt-1 mb-2">
              Notre solution comprend <sup className="orange">*</sup>
            </h3>
            <Grid
              xsCols={2}
              lgCols={3}
              xlCols={4}
              xsRows={3}
              lgRows={3}
              xlRows={2}
              gap={1}
              className="kpi"
            >
              <Grid.Square className="kpi__item">
                <div className="kpi__text">
                  L'achat de votre{" "}
                  <span className="big-orange">nom de domaine</span>{" "}
                  personnalisé
                </div>
              </Grid.Square>
              <Grid.Square className="kpi__item shadow-1">
                <div className="kpi__text">
                  <span className="big-orange">12 mois</span> d'hébergement sur
                  notre plateforme
                </div>
              </Grid.Square>
              <Grid.Square className="kpi__item shadow-1">
                <div className="kpi__text">
                  <span className="big-orange">12 mois</span> de maintenance et
                  de mises à jour
                </div>
              </Grid.Square>
              <Grid.VerticalRect className="kpi__item shadow-1">
                <div className="kpi__text">
                  <span className="big-orange">10 photos</span> professionnelles
                  de votre entreprise ou de vos produits
                </div>
              </Grid.VerticalRect>
              <Grid.Line className="kpi__item shadow-1">
                <div className="kpi__text">
                  La création de votre{" "}
                  <span className="big-orange"> site internet</span> ultra
                  rapide, sécurisé et optimisé pour le référencement.
                </div>
              </Grid.Line>
            </Grid>
            <small className="mt-2 small">
              <sup className="orange">*</sup> C'est notre solution la plus
              basique, mais vous pouvez la faire évoluer en fonction de vos
              besoins !
            </small>
          </Col>
        </Row>
        <Banner className="blue shadow-1">
          <Row className="mtb-2">
            <Col xs={12} md={6} className="ultra-big">
              Tout ça à partir de <span className="orange ubber-big">250€</span>{" "}
              par mois pendant un an !
              <Stack gap={1} direction="horizontal" className="mt-2">
                <Button
                  as="Link"
                  to="/votre-site-a-250-euros-par-mois-pendant-1-an/"
                  className="reverse"
                >
                  en savoir plus
                </Button>
                <Button as="Link" to="/contact" className="white">
                  un devis maintenant !
                </Button>
              </Stack>
            </Col>
          </Row>
        </Banner>
      </section>
      <section id="eti">
        <Row className="mb-3">
          <Col xs={12}>
            <h2 className="title mtb-2">ETI ou grand groupe</h2>
          </Col>
          <Col xs={12} md={6}>
            <h3 className=" mt-1 mb-2">Du sur-mesure rapidement !</h3>
            <Row>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  👔 En tant qu'ETI ou grand groupe, vous avez besoin d'une
                  solution sur-mesure et qui répond à certains critères.
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  💹 Scalabilité, sécurité, performance, maintenance,
                  évolutivité, etc. Votre site web doit être à la hauteur de vos
                  ambitions.
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  ⌚ Et parce que le business n'attend pas, vous avez besoin que
                  votre site web soit en ligne rapidement et que vous puissiez
                  le modifier facilement.
                </p>
              </Col>
              <Col xs={12} md={10} className="p-0 ptb-1 pr-1">
                <p className="text mb-1">
                  🚀 Notre stack technologique nous permet de répondre à ces
                  problématiques en un temps record. C'est pourquoi vous ne
                  devez pas hésiter à nous contacter dès maintenant !
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h3 className=" mt-1 mb-2">Nos solutions business</h3>
            <p className="mb-2">
              En fonction de vos besoins, nous vous proposons un éventail de
              solutions adaptées à votre entreprise.
            </p>
            <Grid
              xsCols={2}
              lgCols={4}
              xsRows={5}
              lgRows={3}
              gap={1}
              className="kpi"
            >
              <Grid.Rect className="kpi__item">
                <div className="kpi__text">
                  Conception de votre{" "}
                  <span className="big-orange">site web</span> ultra rapide,
                  sécurisé et optimisé pour le référencement.
                </div>
              </Grid.Rect>
              <Grid.Rect className="kpi__item shadow-1">
                <div className="kpi__text">
                  <span className="big-orange">
                    TMA (Tierce Maintenance Applicative)
                  </span>{" "}
                  pour la maintenance et les mises à jour de votre site web.
                </div>
              </Grid.Rect>
              <Grid.Rect className="kpi__item shadow-1">
                <div className="kpi__text">
                  Solution de{" "}
                  <div className="big-orange">
                    crawling et analyse de données
                  </div>{" "}
                  pour la veille concurrentielle.
                </div>
              </Grid.Rect>
              <Grid.Rect className="kpi__item shadow-1">
                <div className="kpi__text">
                  <span className="big-orange">Shooting photo</span> et{" "}
                  <span className="big-orange">vidéo corporate</span> ou
                  produits pour vos besoins de communication.
                </div>
              </Grid.Rect>
              <Grid.Line className="kpi__item shadow-1">
                <div className="kpi__text">
                  Conception d'<span className="big-orange">API</span> et de{" "}
                  <span className="big-orange">micro-services </span> pour
                  l'interconnexion de vos systèmes d'information.
                </div>
              </Grid.Line>
            </Grid>
          </Col>
        </Row>
        <Banner className="blue shadow-1">
          <Row className="mtb-2">
            <Col xs={12} md={6} className="ultra-big">
              Contactez-nous dès maintenant pour obtenir un devis gratuit sur
              mesure qui correspond à vos besoins !
              <Stack gap={1} direction="horizontal" className="mt-2">
                <Button as="Link" to="/contact" className="reverse">
                  Prendre rendez-vous
                </Button>
              </Stack>
            </Col>
          </Row>
        </Banner>
      </section>
    </Layout>
  );
};

export default OffresPage;

export const Head: HeadFC = () => (
  <SEO
    title="Offres"
    description="Que vous soyez une PME ou un grand groupe, nous avons une offre commerciale pour vous ! Devis gratuit et réponse en 24h !"
  />
);
