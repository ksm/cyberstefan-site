import React from "react";
import { Container } from "reactstrap";
import { StreamsWidget, ProjectsWidget } from "./components";

export const Dashboard = () => {
  return (
    <Container>
      <StreamsWidget />
      <ProjectsWidget />
    </Container>
  );
};
