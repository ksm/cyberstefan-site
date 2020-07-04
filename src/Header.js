import React, { useState } from "react";
import { Jumbotron, Collapse, Button } from "reactstrap";
import signature from "./assets/signature.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mt-3">
      <Jumbotron className="py-4">
        <h2>
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
            👋
          </span>{" "}
          Hey there,
        </h2>
        <p>
          This is a dashboard for the CyberStefan coding stream:{" "}
          <a href="https://www.twitch.tv/cyberstefan">twitch.tv/cyberstefan</a>.
          The stream is a space where I tinker on various coding projects and do
          so socially. Please drop by and say hi!
        </p>
        <p>
          I stream every Saturday at 4 PM ET (that's 1 PM PT, or 22:00 CET if
          you're viewing from Europe).
        </p>
        <Collapse isOpen={isOpen}>
          <div>
            <p>
              The idea behind this dashboard is to visualize and almost gamify
              the stream's projects and milestones. That way you're more engaged
              and I'm more motivated.
            </p>
            <p>
              Find me discussing all things stream on{" "}
              <a href="https://twitter.com/cyberstefantv">Twitter</a>.
            </p>
            <p>Yours sincerely,</p>
            <p>
              <img src={signature} alt="CyberStefan's signature" />
            </p>
          </div>
        </Collapse>
        <Button className="p-0" color="link" onClick={toggle}>
          {isOpen ? "Read less..." : "Read more..."}
        </Button>
      </Jumbotron>
    </div>
  );
};
