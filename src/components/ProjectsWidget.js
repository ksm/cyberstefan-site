import React from "react";
import { Table, Progress } from "reactstrap";
import { Widget } from "./Widget";
import { OctocatIcon } from "./OctocatIcon";
import projects from "../data/projects.json";

const calculateProjectProgress = (project) => {
  const allMilestonesCount =
    project.minimum_milestones > project.milestones.length
      ? project.minimum_milestones
      : project.milestones.length;

  const completedMilestonesCount = project.milestones.filter(
    (milestone) => milestone.status === "complete"
  ).length;

  return (completedMilestonesCount / allMilestonesCount) * 100;
};

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
        {projects.map((project) => (
          <tr key={project.id}>
            <td>
              {project.name}{" "}
              <a href={project.github}>
                <OctocatIcon />
              </a>
            </td>
            <td className="px-2">
              <Progress
                style={{ minWidth: 100 }}
                color="success"
                value={calculateProjectProgress(project)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Widget>
);
