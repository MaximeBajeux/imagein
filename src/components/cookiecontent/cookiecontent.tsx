import React from "react";
import { CookieConsent } from "react-cookie-consent";

const CookieContentContainer = () => {
  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      declineButtonText="Refuser"
      buttonText="Accepter"
      ariaAcceptLabel="Accepter"
      ariaDeclineLabel="Refuser"
      disableStyles={true}
      cookieName="gatsby-gdpr-google-analytics"
      containerClasses="cookie-consent"
    >
      Ce site utilise des cookies pour améliorer votre expérience utilisateur.
    </CookieConsent>
  );
};

export default CookieContentContainer;
