import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
//import { Container, Button } from "reactstrap";
//import Loading from "../components/Loading";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
//import { getPublicResource } from "../services/message.service";



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
/* <CodeSnippet title="Public Message" code={message} /> */
return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Public Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a <strong>public message</strong> from an
              external API.
            </span>
            <span>
              <strong>Any visitor can access this page.</strong>
            </span>
          </p>
        </div>
      </div>
    </PageLayout> 
                );
};

//export default WebSSOPage;
