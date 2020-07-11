import React, { useState } from "react";
import { Table, Progress, Button } from "reactstrap";
import { Widget } from "./Widget";
import { OctocatIcon } from "./OctocatIcon";
import projects from "../data/projects.json";

const calculateProjectProgress = (project) => {
  const milestoneCount = project.milestones?.length ?? 0;

  const allMilestonesCount =
    project.minimum_milestones > milestoneCount
      ? project.minimum_milestones
      : milestoneCount;

  const completedMilestonesCount = project.milestones?.filter(
    (milestone) => milestone.status === "complete"
  ).length;

  return (completedMilestonesCount / allMilestonesCount) * 100;
};

const MilestoneList = ({ milestones }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!milestones) {
    return null;
  }

  const list = milestones?.map((milestone, index) => {
    const id = `checkmark-${index}`;
    return (
      <div key={index}>
        <label htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            name="milestone"
            checked={milestone.status === "complete"}
            style={{ verticalAlign: "middle" }}
            disabled
          />{" "}
          {milestone.name}
        </label>
      </div>
    );
  });

  return (
    <div>
      <Button className="p-0" color="link" onClick={toggle}>
        <small>{isOpen ? "Hide milestones…" : "Show milestones…"}</small>
      </Button>
      {isOpen && list}
    </div>
  );
};

export const ProjectsWidget = () => (
  <Widget title="Coding Projects">
    <Table>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>
              {project.name}{" "}
              <a href={project.github}>
                <OctocatIcon />
              </a>
              <MilestoneList milestones={project.milestones} />
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
