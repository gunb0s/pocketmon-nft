import React from "react";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import MintCard from "../components/MintCard";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  display: flex;
`;

const Background = styled.div`
  background-image: url("sangrok.png");
  flex: 13;
  height: 100%;
`;

const Home = () => {
  return (
    <Main>
      <Navigation />
      <Section>
        <Background />
        <MintCard />
      </Section>
    </Main>
  );
};

export default Home;
