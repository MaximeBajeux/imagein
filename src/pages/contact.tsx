import { PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Herobanner from "../components/herobanner/herobanner";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Button from "../components/button/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BreadCrumb from "../components/breadcrumb/breadcrumb";

const Contact: React.FC<PageProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSending, setIsSending] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    try {
      setIsSending(true);
      const { name, email, phone, message } = data;
      // fetch to /api/airtable
      fetch("/api/airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(
              "Une erreur est survenue, veuillez réessayer plus tard."
            );
          }
          return res.json();
        })
        .then((_) => {
          setIsSending(false);
          setSuccess("Votre message a bien été envoyé !");
        })
        .catch((_) => {
          setIsSending(false);
          setError("Une erreur est survenue, veuillez réessayer plus tard.");
        });
    } catch (err) {
      setIsSending(false);
      setError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "4rem" }}>
          Comment nous contacter ?
        </h1>
        <p>
          (Pour obtenir un fantastique site internet ultra performant et fait
          avec amour ! 😍)
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
              Accueil
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/contact/"
              title="Nous contacter"
              position={2}
              disabled={true}
            >
              Nous contacter
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>

      <section id="contact">
        <Row className="mtb-2">
          <Col xs={12} md={7} className="mtb-2" style={{ fontSize: "1.2rem" }}>
            <h2 className="mb-2">Écrivez-nous !</h2>
            <p className="mb-2">
              ☕ Vous avez un projet ? Une question ? Une envie de partager un
              café bien chaud ? N'hésitez pas à nous contacter !
            </p>
            <p className="mb-2">
              🍪 Nous on aime le café, les cookies et vous faire gagner en
              visibilité sur le net !
            </p>
            <p className="mb-2">
              📝 Essayez de nous donner le plus de détails possible sur votre
              projet, ça nous aidera à vous répondre plus vite ! De manière
              synthétique, ce qu'on besoin de savoir pour vous faire un devis
              c'est:
            </p>

            <ul className="mb-2">
              <li>
                📝 Quel est votre besoin ? (Site vitrine, e-commerce, blog, ...)
              </li>
              <li>
                🔗 Est-ce qu'il y a un existant ? Si oui, envoyez nous le lien !
              </li>
              <li>📅 Quel est votre délai ? (Si vous en avez un)</li>
              <li>💰 Quel est votre budget ? (Si vous en avez un)</li>
            </ul>
            <p className="mb-2">Au plaisir de vous lire ! 🤗</p>
          </Col>
          <Col xs={12} md={5} className="mtb-2">
            <Card>
              <Card.Content>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="name">
                      Votre nom<sup className="orange">*</sup>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Peter Parker"
                      {...register("name", { required: true })}
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <span className="form-error">Ce champ est requis</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Votre e-mail<sup className="orange">*</sup>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="spiderman.pro@gmail.com"
                      {...register("email", { required: true })}
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <span className="form-error">Ce champ est requis</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Votre téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="06 71 37 05 37"
                      {...register("phone", {})}
                      aria-required="false"
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <span className="form-error">Ce champ est requis</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Votre message<sup className="orange">*</sup>
                    </label>
                    <textarea
                      id="message"
                      placeholder="J'ai un projet..."
                      {...register("message", { required: true })}
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                    ></textarea>
                    {errors.message && (
                      <span className="form-error">Ce champ est requis</span>
                    )}
                  </div>
                  <div className="form-group mtb-2">
                    <Button
                      as="submit"
                      disabled={error || success || isSending}
                    >
                      C'est parti !
                    </Button>
                    {isSending && (
                      <span className="form-event sending">
                        Envoi en cours...
                      </span>
                    )}
                    {success && (
                      <span className="form-event success">{success}</span>
                    )}
                    {error && <span className="form-event error">{error}</span>}
                  </div>
                  <div style={{ color: "lightgrey", lineHeight: "1" }}>
                    <small>
                      En soumettant ce formulaire, j'accepte que les
                      informations saisies soient exploitées dans le cadre de la
                      demande de contact et de la relation commerciale qui peut
                      en découler.
                    </small>
                  </div>
                </form>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export default Contact;

export const Head = () => {
  return (
    <SEO
      title="Image IN - Comment nous contacter ?"
      description="Vous avez un projet ? Une question ? Posez la nous et nous vous répondrons dès que possible ! Devis gratuit !"
      pathname="/contact/"
    />
  );
};
