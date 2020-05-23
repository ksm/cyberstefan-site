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

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Upcoming Streams</CardTitle>
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
                    <th scope="row">6</th>
                    <td>Saturday, May 30th, 2020</td>
                    <td>CyberStefan.com Dashboard</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Saturday, June 6th, 2020</td>
                    <td>
                      TBD: let me know on Twitter! Possibly React Native app
                      with TypeScript.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Coding Projects</CardTitle>
              <Table striped>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CyberStefan.com Twitch Stream Dashboard</td>
                    <td class="px-2">
                      <Progress
                        style={{ "min-width": 100 }}
                        color="success"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>React Native GitHub Client App</td>
                    <td class="px-2">
                      <Progress color="success" value="0" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
