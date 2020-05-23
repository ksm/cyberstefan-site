import React from "react";
import { Jumbotron } from "reactstrap";

export const Header = () => {
  return (
    <div class="mt-3">
      <Jumbotron>
        <h1>👋</h1>
        <p>
          This website is a dashboard for{" "}
          <a href="https://www.twitch.tv/cyberstefan">my coding stream</a>.
          Fairly basic right now, but the idea is to keep adding upgrades during
          the stream.
        </p>
        <p>
          You'll find me discussing the progress and take-aways of these
          projects on <a href="https://twitter.com/cyberstefantv">Twitter</a>.
        </p>
      </Jumbotron>
    </div>
  );
};
