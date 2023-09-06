import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Row from "../components/row/row";
import Col from "../components/col/col";

const PolitiqueDeConfidentialitePage = () => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Politique de confidentialité d'Image IN
        </h1>
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
              href="/politique-de-confidentialite"
              title="Politique de confidentialité"
              position={2}
              disabled={true}
            >
              Politique de confidentialité
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section className="blogpost">
        <h2>Article 1: Champ d'application</h2>
        <p>
          La présente Politique de Confidentialité définit les modalités selon
          lesquelles Image IN traite les données à caractère personnel
          collectées sur son site web.
        </p>

        <h2>Article 2: Collecte des données à caractère personnel</h2>
        <p>
          2.1. Dans le cadre de la demande de devis, Image IN collecte les
          données suivantes :
        </p>
        <ul>
          <li>Adresse électronique.</li>
        </ul>
        <p>
          2.2. Les outils analytiques tels que le Facebook Pixel ID et Google
          Analytics 4 sont utilisés sur ce site. Ils nécessitent l'usage de
          cookies pour la collecte de données relatives à l'interaction des
          visiteurs avec le site.
        </p>

        <h2>Article 3: Finalité du traitement</h2>

        <p>Les données sont traitées pour les finalités suivantes :</p>
        <ul>
          <li>Traiter les demandes de devis ;</li>
          <li>
            Analyser le trafic et les interactions sur le site à des fins
            d'optimisation.
          </li>
        </ul>
        <h2>Article 4: Conservation des données</h2>
        <p>
          Les données à caractère personnel sont stockées sur la plateforme
          Airtable et sont conservées indéfiniment, à moins qu'une demande
          explicite de suppression ne soit formulée par la personne concernée.
        </p>

        <h2>Article 5: Droits des personnes concernées</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la législation française en vigueur, toute personne dispose des
          droits suivants :
        </p>
        <ul>
          <li>Droit d'accès aux données ;</li>
          <li>Droit de rectification ;</li>
          <li>Droit à l'effacement ;</li>
          <li>Droit à la limitation du traitement ;</li>
          <li>Droit à la portabilité des données ;</li>
          <li>Droit d'opposition.</li>
        </ul>
        <p>
          Pour exercer ces droits, il convient de s'adresser à Maxime Bajeux,
          référent en matière de protection des données, à [adresse e-mail de
          contact].
        </p>
        <h2>Article 6: Utilisation de cookies</h2>
        <p>
          Les cookies déposés par le Facebook Pixel ID et Google Analytics 4
          permettent d'analyser la fréquentation du site et l'interaction des
          utilisateurs. Les visiteurs peuvent configurer leur navigateur pour
          refuser les cookies.
        </p>

        <h2>Article 7: Modifications</h2>
        <p>
          Image IN se réserve le droit de modifier la présente Politique de
          Confidentialité à tout moment, notamment en application des
          changements apportés aux lois et réglementations en vigueur.
        </p>

        <h2>Article 8: Contact</h2>
        <p>
          Pour toute question relative à la présente Politique de
          Confidentialité, veuillez vous adresser à Maxime Bajeux, référent en
          matière de protection des données, à contact@image-in.net.
        </p>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <SEO
    title="Image IN - Politique de confidentialité"
    description="Politique de confidentialité d'Image IN"
    pathname="/politique-de-confidentialite/"
  />
);

export default PolitiqueDeConfidentialitePage;
