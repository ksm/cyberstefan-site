import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";

export const Widget = (props) => (
  <div className="my-4">
    <Row>
      <Col>
        <Card>
          <CardHeader>{props.title}</CardHeader>
          <CardBody>{props.children}</CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);
