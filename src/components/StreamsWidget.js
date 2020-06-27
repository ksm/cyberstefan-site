import React from "react";
import { Table } from "reactstrap";
import { Widget } from "./Widget";

export const StreamsWidget = () => (
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
            TBD: let me know via Twitter if you want to see something specific!
          </td>
        </tr>
      </tbody>
    </Table>
  </Widget>
);
