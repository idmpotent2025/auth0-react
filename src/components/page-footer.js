import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why PetSmart",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "Bring Your Pets",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Overnight Hotel",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact a Vet",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Demo Portal Built For </span>
              <PageFooterHyperlink path="https://auth0.com/">
                PetSmart
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement modern CIAM using Auth0 on any stack and
                  any device&nbsp;
                </span>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Sign Up With PetSmart Rewards
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/PetSmart.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://auth0.com/">
              Auth0 Inc
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
