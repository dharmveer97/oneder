import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HeroHeader from '../components/HeroHaader';
import Buisness from '../components/Buisness';
import Team from '../components/Team';
import TeamMemberData from '../components/TeamMemberData';
import Tabs from '../components/Tabs';

const TopContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/mainimage.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  transform: translate(0);
  background-position: center center;
  @media screen and (max-width: 600px) {
  background-size: 100% 70%;
  }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <TopContainer>
          <Header />
          <HeroHeader />
        </TopContainer>
        <Buisness />
        <Team />
        <TeamMemberData />
        <Tabs />
      </Layout>
    );
  }
}
