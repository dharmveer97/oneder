import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  .text {
    color: #007bff !important;
  }
  .text-one {
    color: #808080 !important;
  }
  .lines {
    line-height: 2rem;
    color: #808080 !important;
    margin-top: 2rem;
  }
  span {
    color: #71bc42;
  }
  .button {
    margin-top: 2rem;
  }
`;

const Buisness = () => (
  <section className="section">
    <Container className="container">
      <h2 className="title is-2 has-text-centered text">About Oneder</h2>
      <div className="columns is-variable is-8">
        <div className="column is-6">
          <figure className="image is-3by2">
            <img
              src="https://colorlib.com/preview/theme/oneder/images/hero_1.jpg"
              alt="placeholder"
            />
          </figure>
        </div>

        <div className="column is-6">
          <div className="container">
            <div classNAme="">
              <h3 className="title is-3 has-text-weight-medium is-spaced">
                For the next great business
              </h3>
              <p className="text-one lines">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                tempora cumque eligendi in nostrum labore omnis quaerat.
              </p>
            </div>
            <ul className="lines">
              <li>
                <span classNAme="icon">
                  <i className="fas fa-check" />
                </span>
                Officia quaerat eaque neque
              </li>
              <li>
                <span classNAme="icon is-left">
                  <i className="fas fa-check" />
                </span>
                Possimus aut consequuntur incidunt
              </li>
              <li>
                <span classNAme="icon is-left">
                  <i className="fas fa-check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li>
                <span classNAme="icon is-left">
                  <i className="fas fa-check" />
                </span>
                Consectetur adipisicing elit
              </li>
            </ul>
            <a className="button is-info is-rounded is-medium">Get In Touch</a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Buisness;
