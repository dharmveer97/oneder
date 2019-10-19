import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const HeroHeader = () => (
  <section className="section">
    <Container className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-1 has-text-light">
                  I am Creative One Page Template by Colorlib
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroHeader;
