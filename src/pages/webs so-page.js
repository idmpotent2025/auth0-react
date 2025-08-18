import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Loading from "../components/Loading";

const JoinMembership = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (isLoading || isAuthenticated) return;

    const params = new URLSearchParams(location.search);
    const token = params.get("session_transfer_token");

    const redirectOptions = {
      appState: { returnTo: "/join-membership" },
      authorizationParams: {},
    };

    if (token) {
      redirectOptions.authorizationParams.session_transfer_token = token;
    }

    loginWithRedirect(redirectOptions);
  }, [isAuthenticated, isLoading, loginWithRedirect, location.search]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <Container className="mt-5">
      <h1>Choose a Subscription Plan</h1>
      <Button color="primary" className="mb-3" onClick={() => alert("Subscribed to Basic!")}>
        Basic – $5/month
      </Button>
      <Button color="secondary" className="mb-3" onClick={() => alert("Subscribed to Pro!")}>
        Pro – $10/month
      </Button>
      <Button color="success" className="mb-3" onClick={() => alert("Subscribed to Premium!")}>
        Premium – $20/month
      </Button>
    </Container>
  );
};

export default JoinMembership;
