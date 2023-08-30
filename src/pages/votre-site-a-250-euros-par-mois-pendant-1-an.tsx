import React from "react";

import { useRef, useState } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { PageProps, graphql } from "gatsby";

import Row from "../components/row/row";
import Col from "../components/col/col";
import Herobanner from "../components/herobanner/herobanner";
import Button from "../components/button/button";
import Stack from "../components/stack/stack";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Carousel from "../components/carousel/carousel";
import { Link } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import Tab from "../components/tab/tab";

const OptionsPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    draggable: true,
    easing: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const settingsPage = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    easing: "ease-in-out",
  };

  const sliderRef = useRef(null);
  const [index, setindex] = useState(0);
  const tabCallback = (index: number) => {
    setindex(index);
    sliderRef?.current?.slickGoTo(index);
  };

  const setRef = (slider: any) => {
    sliderRef.current = slider;
  };

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "4rem" }}>
          Offre à 250€/mois pendant 1 an
        </h1>
        <p>
          Vous pensez être éligible à notre offre à{" "}
          <span className="orange">250€</span> par mois pendant un an <br />
          et vous souhaiteriez en savoir plus sur ce qu'elle comprend ?<br />
          Vous êtes au bon endroit !
        </p>
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
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/offres"
              title="Nos offres"
              position={2}
              disabled={false}
            >
              <Link to="/offres">Nos offres</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/offres/votre-site-a-250-euros-par-mois-pendant-1-an"
              title="Nos options"
              position={3}
              disabled={true}
            >
              Votre site à 250€/mois
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mb-2">
          <Tab callback={tabCallback}>
            <Tab.Item>Développement</Tab.Item>
            <Tab.Item>Design</Tab.Item>
          </Tab>
        </Col>
      </Row>
      <Carousel settings={settingsPage} setRef={setRef}>
        <section id="development">
          <Row>
            <Col xs={12}>
              <h2 className="mb-2">Le site internet</h2>
            </Col>
            <Col xs={12}>
              <p className="mb-1">
                Nous développons pour vous un site internet sur mesure, ultra
                performant et optimisé pour le SEO, pour lequel vous avez le
                choix de l'espace d'administration
                <sup className="orange">*</sup> (Wordpress, Mdx, Strapi,
                Contentful, etc.).
              </p>
              <small>
                <sup className="orange">*</sup> Les éventuels surcoûts
                d'abonnement aux CMS (Strapi, Contentful) ne sont pas pris en
                compte.
              </small>
            </Col>
          </Row>
          <Row className="middle mt-2">
            <Col xs={12} md={6}>
              <h3 className="mb-2">Les types de pages</h3>
              <p className="mb-1">
                Notre formule de base comprend un site internet comportant{" "}
                <strong className="orange">5 types de pages</strong>{" "}
                différentes. Ces pages peuvent être dupliquées à l'infini, comme
                par exemple dans un blog.
              </p>
              <p className="mb-1">
                5 pages, c'est suffisant pour un site vitrine, un site de
                présentation ou un site de réservation. Et seulement pour{" "}
                <strong className="orange">250€/mois</strong> pendant 1 an !
              </p>
              <p>
                Au delà de 5 pages, nous vous facturons{" "}
                <strong className="orange">25€/mois</strong> par page
                supplémentaire.
              </p>
            </Col>
            <Col xs={12} md={6} className="p-1">
              <Carousel settings={settings} className="mtb-2">
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/landing.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/article.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/blog.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/contact.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/booking.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/galerie.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/menu.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/page.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
          <Row className="middle mt-1 rtl">
            <Col xs={12} md={6}>
              <p className="mb-1">
                Certaines pages sont complexes à réaliser, (pages avec gestion
                d'utilisateurs, de panier, etc). Afin de vous garantir la{" "}
                <strong className="orange">meilleure qualité</strong> possible,
                elles ne sont pas incluses dans notre formule de base.
              </p>
              <p className="mb-1">
                Dans tous les cas, contactez nous afin que nous étudions
                ensemble votre projet et que nous vous proposions un devis
                adapté à vos besoins !
              </p>
              <Stack direction="horizontal" className="center">
                <Button as="Link" className="reverse" to="/contact">
                  Nous contacter
                </Button>
              </Stack>
            </Col>
            <Col xs={12} md={6} className="p-1">
              <Carousel settings={settings} className="mtb-2">
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/eshop.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/product.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/social.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/app.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
                <div className="carousel__item-container">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/templates/game.png"
                    alt="Landing page"
                    placeholder="blurred"
                    layout="fixed"
                    width={170}
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h3 className="mb-2">L'hébergement</h3>
            </Col>
            <Col xs={12}>
              <p className="mb-1">
                Avec notre formule de base, nous vous offrons aussi si vous le
                désirez
              </p>
              <ul className="withPuce">
                <li>
                  <p>
                    L'achat de votre nom de domaine
                    <sup className="orange">*</sup> (par exemple votre-site.com
                    ou votre-site.fr) pour une durée d'un an.
                  </p>
                  <small>
                    <sup className="orange">*</sup> d'une valeur de inférieure à
                    15€
                  </small>
                </li>
                <li>
                  <p>
                    La création de votre certificat SSL (https) pour sécuriser
                    vos données et votre site internet via let's encrypt.
                  </p>
                </li>
                <li>
                  <p>
                    L'hébergement de votre site internet sur notre solution
                    cloud pour une durée d'un an.
                  </p>
                </li>
                <li>
                  <p>
                    Un an de maintenance et de support technique pour votre site
                    internet.
                  </p>
                </li>
              </ul>
            </Col>
            <Col xs={12}>
              <h4 className="mtb-2">Et après 1 an ?</h4>
              <p>
                Après 1 an le site vous appartient, vous pouvez donc choisir de
                le gérer vous même ou de continuer à nous faire confiance pour
                le gérer.
              </p>
              <p>
                Si vous choisissez de continuer à nous faire confiance, nous
                vous proposerons un contrat de maintenance et de support
                technique pour une durée d'un an renouvelable pour seulement
                50€/mois. Ce contrat comprend :
                <ul className="withPuce">
                  <li>Le renouvellement de votre nom de domaine.</li>
                  <li>
                    La gestion de votre certificat SSL (https) pour sécuriser
                    vos données et votre site internet.
                  </li>
                  <li>
                    L'hébergement de votre site internet sur notre solution
                    cloud.
                  </li>
                  <li>
                    La maintenance et le support technique pour votre site
                    internet.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </section>
        <section id="graphism">
          <Row>
            <Col xs={12}>
              <h2 className="mb-2">Design</h2>
              <p className="mb-2">
                L'apparence de votre site internet est ce qui restera le plus
                dans la tête de vos clients, il est donc important de le soigner
                afin qu'il soit le plus agréable et identifiable possible. Pour
                cela nous avons intégré à notre formule tout ce qu'il faut pour
                que votre site internet soit le plus beau possible.
              </p>
              <Row className="middle">
                <Col xs={12} md={6} className="p-0">
                  <h3 className="mb-2">Création de logo</h3>
                  <p className="mb-1">
                    Si votre entreprise n'a pas encore de logo ou si vous
                    souhaitez le changer, nous vous proposons de le créer pour
                    vous.
                  </p>
                  <p className="mb-1">
                    Nous réalisons nos logos en vectoriel afin que vous puissiez
                    les utiliser sur tous vos supports de communication.
                  </p>
                  <p className="mb-1">
                    Nos logos sont simples mais particulièrement efficaces ! Des
                    couleurs qui vous correspondent, une typographie qui vous
                    ressemble et une forme qui vous représente, voilà ce qui
                    fait un bon logo.
                  </p>
                  <p>
                    Si vous souhaitez un logo plus complexe ou un logo seul en
                    dehors de notre formule, nous vous invitons à nous contacter
                    afin que nous puissions vous proposer un devis adapté à vos
                    besoins.
                  </p>
                </Col>
                <Col xs={12} md={6} className="p-2 center">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/logo-making.png"
                    alt="Adapt Habitat logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={380}
                  />
                </Col>
              </Row>
              <Row className="middle rtl">
                <Col xs={12} md={6} className="p-0">
                  <h3 className="mb-2">Création de charte graphique</h3>
                  <p className="mb-1">
                    Votre charte graphique est l'ensemble des éléments
                    graphiques de votre entreprise ou de votre marque.
                  </p>
                  <p className="mb-1">
                    Afin que votre site internet soit en accord avec votre
                    image, nous intégrons votre charte graphique à votre site
                    internet ou la créons pour vous.
                  </p>
                  <p className="mb-1">
                    Tous les assets graphiques que nous créons pour votre site
                    internet vous sont fournis afin que vous puissiez les
                    utiliser sur tous vos supports de communication.
                  </p>
                  <p>
                    Vous pouvez également nous faire confiance afin d'étendre
                    votre charte graphique à tous vos supports de communication
                    (cartes de visite, flyers, etc.).
                  </p>
                </Col>
                <Col xs={12} md={6} className="p-2 center">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/charte-graphique.png"
                    alt="Adapt Habitat charte graphique"
                    placeholder="blurred"
                    layout="fixed"
                    width={380}
                  />
                </Col>
              </Row>

              <Row className="middle">
                <Col xs={12} md={6} className="p-0">
                  <h2 className="mb-2">Photographie</h2>
                  <p className="mb-1">
                    Dans le cadre de notre à 250€/mois pendant 1 an, nous vous
                    offrons un shooting photo avec notre photographe
                    professionnelle !
                  </p>
                  <p className="mb-1">
                    Le shooting photo se fait dans vos locaux ou notre studio
                    photo afin que nous photographions vos produits, vos locaux
                    ou vos employés. Cette séance photo dure 2h et vous permet
                    d'obtenir 10 photos de qualité professionnelle en haute
                    définition afin d'illustrer votre site internet et vos
                    supports de communication.
                  </p>
                  <p className="mb-1">
                    Si vous habitez en dehors de notre zone de chalandise, des
                    frais de déplacement peuvent s'appliquer.
                  </p>
                  <p>
                    Si vous souhaitez plus de photos ou programmer des séances
                    photos supplémentaires, nous vous invitons à nous contacter
                    afin que nous puissions vous proposer un devis adapté à vos
                    besoins.
                  </p>
                </Col>
                <Col xs={12} md={6} className="p-2 center">
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="../images/photos-produits.png"
                    alt="Ophelie bajeux photographie - photos produits de donuts"
                    placeholder="blurred"
                    layout="fixed"
                    width={380}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Carousel>
    </Layout>
  );
};

export const query = graphql`
  query Options {
    file(id: { eq: "5299b03d-6622-58b3-864b-a05a8fdd3a9e" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;

export const Head: React.FC<PageProps> = ({ data }: PageProps) => {
  const image = getImage(data?.file?.childImageSharp?.gatsbyImageData);

  return (
    <SEO
      title="Nos options"
      description="Vous êtes une PME et vous souhaitez un site internet ? Alors vous êtes peut être éligible à notre offre à 250€/mois pendant 1 an !"
      pathname="/votre-site-a-250-euros-par-mois-pendant-1-an/"
      image={image?.images?.fallback?.src}
    />
  );
};

export default OptionsPage;
