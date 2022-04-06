import React from "react";
import styled from "styled-components";

const Mint = styled.section`
  flex: 7;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  -webkit-box-shadow: 3px 6px 35px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 6px 35px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 6px 35px 5px rgba(0, 0, 0, 0.75);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;
  width: 40%;
  background-color: rgba(22, 167, 240, 0.7);
`;

const Mascot = styled.div`
  background-image: url("N195.png");
  background-size: cover;
  width: 50%;
  height: 30%;

  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  margin-top: 0.7rem;
  padding: 0.3rem 0.7rem;
  background-color: rgb(22, 167, 240);
  border: none;
  border-radius: 0.3rem;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
  }
`;

const MintCard = () => {
  return (
    <Mint>
      <Card>
        <Mascot />
        <h5>Minting Pocketmons</h5>
        <p>wating for master..</p>
        <Button>Mint</Button>
      </Card>
    </Mint>
  );
};

export default MintCard;
