import * as React from "react";

import Wave from "@/Components/Wave";

import "./index.css";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--info">
          <h1>Python Pizza</h1>
          <h2>
            <a target="_blank" rel="noopener noreferrer">
              remote @ your couch
            </a>
          </h2>
          <h2>25 April 2020 - 08:00 UTC</h2>
        </div>

        <Wave />
      </div>
    );
  }
}
