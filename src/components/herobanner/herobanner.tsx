import React, { ReactNode, useEffect, useState } from "react";
import Grid from "../grid/grid";
import Row from "../row/row";
import Spotlight from "../spotlight/spotlight";

import "./herobanner.scss";

const Herobanner = ({
  words,
  children,
}: {
  words?: string[];
  children: ReactNode;
}) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    if (!words || words.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      const index = words.indexOf(word);
      const nextIndex = index + 1 === words.length ? 0 : index + 1;
      setWord(words[nextIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, [word]);

  useEffect(() => {
    if (words) setWord(words[0]);
  }, [words]);

  return (
    <Grid as="section" className="herobanner dark">
      <Row className="fullwidth">
        <Spotlight>
          {word && (
            <Spotlight.Title length={word.length}>
              <h1 className="herobanner__title">{word}</h1>
            </Spotlight.Title>
          )}
          <Spotlight.Content>{children}</Spotlight.Content>
        </Spotlight>
      </Row>
    </Grid>
  );
};

export default Herobanner;
