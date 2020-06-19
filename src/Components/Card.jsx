import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";

const Card = ({ title, image }) => {
  const {
    handleAddFavorite,
    favorite,
    handleDeleteFavorite,
  } = React.useContext(AppContext);

  return (
    <CardBody>
      <Link to={`/cocktails/${title}`}>
        <h1>{title}</h1>
        <CardImage src={image} />
      </Link>
      {favorite.includes(title) ? (
        <p onClick={() => handleDeleteFavorite(title)}>Delete favorite</p>
      ) : (
        <p onClick={() => handleAddFavorite(title)}>Add to favorite</p>
      )}
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
