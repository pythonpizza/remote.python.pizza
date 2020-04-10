import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import ScheduleItem from "@/Components/ScheduleItem";
import { SPEAKERS, SCHEDULE } from "@/dataset";

export default class Schedule extends React.Component {
  render() {
    return (
      <section id="schedule" className="schedule">
        <Container size={Sizes.large}>
          <Container size={Sizes.small}>
            <h1>Schedule (time is UTC!)</h1>
          </Container>
          <ul>
            {SCHEDULE.map((schedule, index) => (
              <ScheduleItem
                key={index}
                schedule={schedule}
                speaker={
                  typeof schedule.speaker !== "undefined"
                    ? SPEAKERS[schedule.speaker]
                    : null
                }
              />
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}
