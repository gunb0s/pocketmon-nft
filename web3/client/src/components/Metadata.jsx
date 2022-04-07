import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getMetadata } from "../utils/getData";
import styled from "styled-components";

const ImageWrapper = styled.div`
  padding: 2rem;
`;

const Attributes = styled.div`
  margin-bottom: 1rem;
`;

const Metadata = ({ idx }) => {
  const [image, setImage] = useState("");
  const [attributes, setAttributes] = useState("");

  useEffect(() => {
    getMetadata(idx).then((res) => {
      setImage(res.image);
      if (res.attributes instanceof Array) {
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
        <Button variant="primary">Waiting for trainer</Button>
      </Card.Body>
    </Card>
  );
};

export default Metadata;
