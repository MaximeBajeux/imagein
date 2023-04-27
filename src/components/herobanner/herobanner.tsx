import React from "react";
import Grid from "../grid/grid";
import Row from "../row/row";
import Col from "../col/col";
import Spotlight from "../spotlight/spotlight";
import Card from "../card/card";
import GlowButton from "../glowbutton/glowbutton";
import Stack from "../stack/stack";

import "./herobanner.scss";

const Herobanner = () => {
  const words = [
    "Performance",
    "Créativité",
    "Ergonomie",
    "SEO",
    "Design",
    "Photographie",
    "UI/UX",
    "Marketing",
    "Développement",
  ];
  const [word, setWord] = React.useState(words[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const index = words.indexOf(word);
      const nextIndex = index + 1 === words.length ? 0 : index + 1;
      setWord(words[nextIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, [word]);

  return (
    <Grid as="section" className="herobanner dark">
      <Row className="fullwidth">
        <Spotlight>
          <Spotlight.Title length={word.length} transitionFilter="blur(10px)">
            <h1 className="herobanner__title">{word}</h1>
          </Spotlight.Title>
          <Spotlight.Content>
            <h1 className="herobanner__title">
              Agence spécialisée dans l'hyper performance
            </h1>
            <h3 className="herobanner__subtitle">
              Vous souhaitez mettre toutes les chances de votre côté pour
              convertir un maximum de prospects ?
            </h3>
            <h3 className="herobanner__subtitle">
              Nous vous créons un site ultra rapide et optimisé pour le SEO !
            </h3>
            <Stack
              direction="horizontal"
              position="center"
              gap={5}
              style={{ marginTop: "3rem" }}
            >
              <GlowButton>Je veux un site</GlowButton>
              <GlowButton>En savoir plus</GlowButton>
            </Stack>
          </Spotlight.Content>
        </Spotlight>
      </Row>
    </Grid>
  );
};

export default Herobanner;
