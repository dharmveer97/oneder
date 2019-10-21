import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  .title {
    color: #ffffff !important;
    font-size: 2.9rem !important;
  }
`;

const HeroHeader = () => (
  <section className="section">
    <Container className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-1 has-text-light is-spaced is-uppercase has-text-white">
                  I'm Creative One Page Template by Colorlib
                </h1>
                <a className="button is-info is-rounded is-medium">
                  Get In Touch
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroHeader;
