import React from "react";
import { Jumbotron } from "reactstrap";
import signature from "./assets/signature.svg";

export const Header = () => {
  return (
    <div class="mt-3">
      <Jumbotron>
        <h2>👋 Hey there,</h2>
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
        <p>
          The idea behind this dashboard is to visualize and almost gamify the
          stream's projects and milestones. That way you're more engaged and I'm
          more motivated.
        </p>
        <p>
          Find me discussing all things stream on{" "}
          <a href="https://twitter.com/cyberstefantv">Twitter</a>.
        </p>
        <p>Yours sincerely,</p>
        <p>
          <img src={signature} alt="CyberStefan's signature" />
        </p>
      </Jumbotron>
    </div>
  );
};
