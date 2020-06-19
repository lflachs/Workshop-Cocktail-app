import React from "react";
import styled from "styled-components";

const Card = ({ title, image }) => {
  return (
    <CardBody>
      <h1>{title}</h1>
      <CardImage src={image} alt={title} />
      <p>Add to favorite</p>
    </CardBody>
  );
};

const CardImage = styled("img")`
  height: 200px;
`;

const CardBody = styled("div")`
  width: 200px;
  margin-right: 30px;
`;
export default Card;
