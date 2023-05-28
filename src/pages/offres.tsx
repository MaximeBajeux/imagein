import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PagePropsZ } from "gatsby";

import Grid from "../components/grid/grid";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Stack from "../components/stack/stack";
import GlowButton from "../components/glowbutton/glowbutton";
import Herobanner from "../components/herobanner/herobanner";

const OffresPage: React.FC<PageProps> = ({ data }: PageProps) => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ margin: "2rem 0" }}>
          Quelle type d'entreprise <br />
          êtes-vous ?
        </h1>
        <Stack gap={2} position="center" direction="horizontal">
          <GlowButton as="a" to="/offres#pme">
            TPE ou PME
          </GlowButton>
          <GlowButton as="a" to="/offres#grand-groupe">
            ETI ou grand groupe
          </GlowButton>
        </Stack>
      </Herobanner>
      <Grid as="section" id="pme">
        <Row>
          <Col>
            <h2 className="title">TPE ou PME</h2>
            <p className="text">
              Vous êtes une TPE ou une PME et vous souhaitez vous développer sur
              internet avec un site ultra rapide, sécurisé et optimisé pour le
              référencement ?
            </p>
            <h4 className="subtitle">Nous avons une solution pour vous !</h4>
            <p className="text">
              Nous savons qu'un site web représente un investissement important
              pour une TPE ou une PME. C'est pourquoi nous vous proposons une
              solution clé en main cadrée avec un étalement du paiement sur 12
              mois.
            </p>
            <p className="text">
              Bien plus qu'un simple site web, nous vous proposons une solution
              complète pour vous permettre de développer votre activité sur
              internet.
            </p>
            <h4 className="subtitle">Notre solution comprend :</h4>
            <ul className="list">
              <li className="list__item">
                Un site web GatsbyJS comprenant une page d'accueil, un blog, 2
                pages sur-mesure, une page de contact et une page de mentions
                légales
              </li>
              <li className="list__item">
                L'hébergement de votre site web pour une durée de 12 mois
              </li>
              <li className="list__item">
                Un nom de domaine pour une durée de 12 mois
              </li>
              <li className="list__item">
                Un shooting photo de votre entreprise ou de vos produits afin
                d'illustrer votre site web avec des photos de qualité
                professionnelle
              </li>
              <li className="list__item">
                Le développement d'une identité visuelle pour votre entreprise
                (logo, couleurs, typographie)
              </li>
              <li className="list__item">
                12 mois de suivi et de maintenance de votre site web
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default OffresPage;

export const Head: HeadFC = () => <SEO title="Offres" />;
