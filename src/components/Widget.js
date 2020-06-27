import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

export const Widget = (props) => (
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
