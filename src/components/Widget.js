import React from "react";
import { Card, CardHeader, Row, Col } from "reactstrap";

export const Widget = (props) => (
  <div className="mb-3">
    <Row>
      <Col>
        <Card>
          <CardHeader>{props.title}</CardHeader>
          {props.children}
        </Card>
      </Col>
    </Row>
  </div>
);
