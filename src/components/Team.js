import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .text {
    color: #007bff !important;
  }
`;

const Team = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div
          className="column is-three-fifths
            is-offset-one-fifth">
          <h2 className="title is-spaced is-2 has-text-centered text">
            Our Team
          </h2>
          <p className="subtitle is-5 has-text-centered">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima minima neque tempora reiciendis.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Team;
