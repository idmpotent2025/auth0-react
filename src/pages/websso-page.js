import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
//import { Container, Button } from "reactstrap";
//import Loading from "../components/Loading";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";


export const WebSSOPage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (isLoading || isAuthenticated) return;

    const params = new URLSearchParams(location.search);
    const token = params.get("session_transfer_token");

    const redirectOptions = {
      appState: { returnTo: "/profile" },
      authorizationParams: {},
    };

    if (token) {
      redirectOptions.authorizationParams.session_transfer_token = token;
    }

    loginWithRedirect(redirectOptions);
  }, [isAuthenticated, isLoading, loginWithRedirect, location.search]);

  

  if (!isAuthenticated) {
    return <p>Redirecting to login...</p>;
  }

 return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

//export default WebSSOPage;
