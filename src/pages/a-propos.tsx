import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Button from "../components/button/button";
import Stack from "../components/stack/stack";

const AProposPage = () => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          À propos d'Image IN
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
              href="/a-propos"
              title="À propos"
              position={2}
              disabled={true}
            >
              A propos
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section className="blogpost">
        <h2>
          Image IN, une entreprise spécialisée dans la création de sites web
          performants
        </h2>
        <p>
          Initialement pensé pour être un GIE, Image IN est devenue une
          entreprise individuelle, se spécialisant dans la partie développement
          informatique plus que dans les autres domaines de la communication.
        </p>
        <p>
          Néanmoins Image IN est forte de son réseau d'indépendants et peut vous
          proposer des solutions de communication complètes et performantes.
        </p>
        <h2>La personne derrière Image IN</h2>
        <p>
          Je m'appelle Maxime et je suis le fondateur d'Image IN. Je suis
          développeur web depuis 2015 et j'ai décidé de créer Image IN en 2019.
          Je suis passionné par le développement web et je suis toujours à la
          recherche de nouvelles technologies pour améliorer mes compétences et
          mes sites web.
        </p>
        <p>
          Je suis également passionné par le SEO et le design. J'aime créer des
          sites web qui sont à la fois beaux et performants.
        </p>
        <p>
          Je mets ici mon CV afin que, si vous êtes en recherche d'un freelance
          pour un projet, vous puissiez voir mes compétences et mon expérience.
        </p>
        <Stack direction="horizontal" position="center" className="dark">
          <Button as="a" to="/CV_2023_Maxime_Bajeux.pdf" target="_blank">
            Télécharger mon CV
          </Button>
        </Stack>
        <h2>
          La vocation derrière Image IN: aider les PME et les associations à se
          doter de technologies performantes
        </h2>
        <p>
          Image IN a pour vocation d'aider les PME et les associations à se
          doter de technologies performantes. Je suis convaincu que les
          technologies de l'information et de la communication sont un levier
          important pour le développement des entreprises et des associations.
        </p>
        <p>
          Or, les PME et les associations ont souvent des budgets limités et
          sont sollicitées de toute part par des vendeurs de rêves qui leurs
          promettent monts et merveilles avec des prix d'appel très bas.
        </p>
        <p>
          La réalité, c'est que ces sites montrent des performances médiocres.
          Aussi, sans stratégie de communication, ils ne servent à rien. Et
          c'est là que Image IN intervient.
        </p>
        <p>
          Image IN vous propose des sites web performants, à des prix
          abordables. Mais surtout, Image IN vous propose une stratégie de
          communication adaptée à votre entreprise ou à votre association.
        </p>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <SEO
    title="Image IN - A propos"
    description="A propos d'Image IN"
    pathname="/a-propos/"
  />
);

export default AProposPage;
