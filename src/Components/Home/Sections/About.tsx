import * as React from "react";

import Container, { Sizes } from "@/Components/Container";

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <Container size={Sizes.medium}>
          <h1>Python Pizza</h1>
          <p>
            <b>Python Pizza</b> is a micro conference organized by the Python Community.
          </p>
          <br />
          <p>
            But this one is a truly special edition, a virus won't keep us apart!
            And we decided to use this unfortunate circumstances to give something back: all proceeds will go to <a href="https://www.msf.org/">Doctors Without Borders</a></Container>
          </p>
        <br />
        <p>
          We believe in and encourage practical sessions, in which developers
          share their experience and lessons from real-world projects, each
          talk is 10 mins long.
          </p>
        <p>Thanks to the Python Pizza (Naples!) that started this format!</p>
        </Container>
      </section>
    );
  }
}
