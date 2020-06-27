import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Widget } from "./Widget";
import streams from "../data/streams.json";

const intl = Intl.DateTimeFormat();

export const StreamsWidget = () => {
  const [upcomingStreams, setUpcomingStreams] = useState([]);

  useEffect(() => {
    const byUpcomingOnly = (fromDate) => (stream) => {
      const streamDate = new Date(stream.date);
      return streamDate.getTime() >= fromDate.getTime();
    };

    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);

    setUpcomingStreams(streams.filter(byUpcomingOnly(now)));
  }, [setUpcomingStreams]);

  return (
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
          {upcomingStreams.map((stream) => (
            <tr key={stream.id}>
              <th scope="row">{stream.id}</th>
              <td>{intl.format(new Date(stream.date))}</td>
              <td>
                <b>{stream.title}</b>
                <br />
                {stream.description}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Widget>
  );
};
