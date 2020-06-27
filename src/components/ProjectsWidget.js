import React from "react";
import { Table, Progress } from "reactstrap";
import { Widget } from "./Widget";
import { OctocatIcon } from "./OctocatIcon";

export const ProjectsWidget = () => (
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
            <Progress style={{ minWidth: 100 }} color="success" value="20" />
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
);
