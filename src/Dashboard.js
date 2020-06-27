import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Progress,
  Container,
} from "reactstrap";
import { OctocatIcon } from "./components/OctocatIcon";

const Widget = (props) => (
  <div className="my-4">
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            {props.children}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export const Dashboard = () => {
  return (
    <Container>
      <Widget title="Upcoming Streams">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>When</th>
              <th>What</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">9</th>
              <td>June 20th, 2020</td>
              <td>
                More CyberStefan.com dashboard features: move data to JSON, add
                projects/milestones/streams.
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>June 27th, 2020</td>
              <td>
                TBD: let me know via Twitter if you want to see something
                specific!
              </td>
            </tr>
          </tbody>
        </Table>
      </Widget>
      <Widget title="Coding Projects">
        <Table striped>
          <thead>
            <tr>
              <th>Project</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                CyberStefan.com Twitch Stream Dashboard{" "}
                <a href="https://github.com/cyberstefantv/cyberstefan-site">
                  <OctocatIcon />
                </a>
              </td>
              <td className="px-2">
                <Progress
                  style={{ minWidth: 100 }}
                  color="success"
                  value="20"
                />
              </td>
            </tr>
            <tr>
              <td>
                React Native GitHub Client App{" "}
                <a href="https://github.com/cyberstefantv/cyberhub-app">
                  <OctocatIcon />
                </a>
              </td>
              <td className="px-2">
                <Progress color="success" value="10" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Widget>
    </Container>
  );
};
