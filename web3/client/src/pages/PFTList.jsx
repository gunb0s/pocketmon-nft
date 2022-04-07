import React from "react";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Metadata from "../components/Metadata";

const Gallery = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0.5rem;
`;

const PFTList = () => {
  return (
    <>
      <Navigation />
      <Gallery>
        {new Array(8).fill(0).map((v, idx) => {
          return <Metadata key={idx} idx={idx + 1} />;
        })}
      </Gallery>
    </>
  );
};

export default PFTList;
