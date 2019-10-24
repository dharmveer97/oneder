import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const FeedBack = props => {
  const { title, subtitle, img } = props;
  return (
    <Wrapper>
      <div className="card">
        <div className="media">
          <figure className="image">
            <img className="" src={img} alt="names" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-5">{title}</p>
          <p className="subtitle is-6">{subtitle}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeedBack;
