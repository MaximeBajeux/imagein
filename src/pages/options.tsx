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

const OptionsPage: React.FC<PageProps> = ({ data }: PageProps) => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Nos options
        </h1>
      </Herobanner>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item>
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>
              <Link to="/offres">Nos offres</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>Nos options</BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section id="basic">
        <Row>
          <Col xs={12}>
            <h2 className="mb-2">Le site internet</h2>
            <h3 className="mb-2">Les basiques</h3>
            <p>
              Détaillons ensemble les options que nous vous proposons pour votre
              site internet dans le cadre de notre formule basique à partir de
              250€ par mois pendant un an.
            </p>
            <ul>
              <li>
                <strong>Un site internet</strong> : Nous développons pour vous
                un site internet sur mesure et ultra performant, optimisé pour
                le SEO. Vous avez le choix de l'espace d'administration
                <sup className="orange">*</sup> (Wordpress, Strapi, Contentful,
                etc.).
                <br />
                <small>
                  <sup className="orange">*</sup> Les éventuels surcoûts
                  d'abonnement aux CMS (Strapi, Contentful) ne sont pas pris en
                  compte.
                </small>
                <br />
                Notre formule de base comprend un site internet de 5 pages dont
                une page d'accueil et une page de contact. Les 3 autres pages
                sont à choisir parmi les pages suivantes :
                <ul>
                  <li>Page de présentation corporate, landing page</li>
                  <li>Fil d'actualité</li>
                  <li>Menu de restaurant</li>
                  <li>Service de réservation ou de prise de rendez-vous</li>
                  <li>Service de click and collect (sans paiement en ligne)</li>
                  <li>landing page</li>
                  <li>
                    Page de liste (articles, services, réalisations, etc.)
                  </li>
                  <li>Page de détail (article, service, réalisation, etc.)</li>
                </ul>
                <br />
                <p>
                  Si la page de vos rêves n'est pas dans la liste, elle est
                  probablement dans la liste des options premium ci-dessous.
                  Sinon, nous vous la développons sur mesure.
                </p>
                <p className="mt-1">
                  Au delà de 5 pages, nous vous facturons 25€/mois par page
                  basique supplémentaire.
                </p>
                <h3 className="mtb-2">Les pages premium</h3>
                <p>
                  Les coûts indiqués ci-dessous sont des coûts mensuels sur 12
                  mois.
                </p>
                <ul>
                  <li>Forum, blog avec espace commentaire: 50€/mois</li>
                  <li>
                    Page de liste de produits avec paiement en ligne : 50€/mois
                    (achat, abonnement, click and collect)
                  </li>
                  <li>
                    Page de détail de produit avec paiement en ligne : 50€/mois
                    (achat, abonnement, click and collect)
                  </li>
                  <li>
                    Tunnel de commande : 150€/mois
                    <sup className="orange">*</sup>
                  </li>
                  <li>Page unique sur mesure : 150€/mois</li>
                </ul>
                <br />
              </li>
              <li>
                <strong>Un nom de domaine</strong> : nous vous aidons à choisir
                un nom de domaine
              </li>
              <li>
                <strong>Un hébergement</strong> : nous vous aidons à choisir un
                hébergement
              </li>
              <li>
                <strong>Un certificat SSL</strong> : nous vous aidons à choisir
                un certificat SSL
              </li>
              <li>
                <strong>Un design</strong> : nous vous aidons à choisir un
                design
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export default OptionsPage;
