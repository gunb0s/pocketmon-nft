import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getMetadata } from "../utils/getData";
import styled from "styled-components";
import axios from "axios";

const ImageWrapper = styled.div`
  padding: 2rem;
`;

const Attributes = styled.div`
  margin-bottom: 1rem;
`;

{
  /* <div key={i}>
{v.trait_type}: {v.value}
</div> */
}

const Metadata = ({ idx }) => {
  const [image, setImage] = useState("");
  const [attributes, setAttributes] = useState("");
  const [minted, setMinted] = useState(false);

  useEffect(() => {
    getMetadata(idx).then((res) => {
      setImage(res.image);
      if (res.attributes instanceof Array) {
        let idx = res.attributes[0].value;
        axios.get(`http://localhost:8080/token/${idx}`).then((data) => {
          if (data.data.message !== undefined) {
            setMinted(false);
          } else {
            setMinted(true);
          }
        });

        setAttributes(
          res.attributes.map((v, i) => (
            <div key={i}>
              {v.trait_type}: {v.value}
            </div>
          ))
        );
      }
    });
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <ImageWrapper>
        <Card.Img variant="top" src={image} />
      </ImageWrapper>
      <Card.Body>
        <Attributes>{attributes}</Attributes>
        {minted ? (
          <Button variant="dark">left for training</Button>
        ) : (
          <Button variant="primary">Waiting for trainer</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Metadata;
