import React from "react";
import Grid from "../grid/grid";
import Row from "../row/row";
import Col from "../col/col";
import Spotlight from "../spotlight/spotlight";

import "./herobanner.scss";

const Herobanner = () => {
  return (
    <Grid as="section" className="herobanner dark">
      <Row className="wide">
        <Col xs={12} md={6} className="herobanner__text">
          <Spotlight>
            <h1 className="herobanner__title">
              Votre site web performant clé en main
            </h1>
            <h3>Vous souhaitez créer un site web pour votre entreprise ?</h3>
            <h3>Notre agence s'en charge pour vous !</h3>
          </Spotlight>
        </Col>
        <Col xs={12} md={6} className="herobanner__image">
          👍
        </Col>
      </Row>
    </Grid>
  );
};

export default Herobanner;
