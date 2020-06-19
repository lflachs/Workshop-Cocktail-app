import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return <Button onClick={history.goBack}>Return</Button>;
};
const Button = styled("button")`
  display: block;
`;

export default BackButton;
