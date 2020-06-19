import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../Components/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { AppContext } from "../context/Context";
const ProductPage = ({ match }) => {
  const { name } = useParams();

  const [cocktail, loading, errors] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const {
    handleAddFavorite,
    favorite,
    handleDeleteFavorite,
  } = React.useContext(AppContext);

  return (
    <div>
      <BackButton />
      {loading ? (
        <Loading />
      ) : cocktail.drinks ? (
        <>
          <CocktailImg src={cocktail.drinks[0].strDrinkThumb} />
          <h1>{cocktail.drinks[0].strDrink}</h1>
          <p>{cocktail.drinks[0].strInstructions}</p>
          {favorite.includes(cocktail.drinks[0].strDrink) ? (
            <button
              onClick={() => handleDeleteFavorite(cocktail.drinks[0].strDrink)}
            >
              Delete favorite
            </button>
          ) : (
            <button
              onClick={() => handleAddFavorite(cocktail.drinks[0].strDrink)}
            >
              Add to favorite
            </button>
          )}
        </>
      ) : (
        <h1>Cocktail {name} not found</h1>
      )}
    </div>
  );
};

const CocktailImg = styled("img")`
  height: 200px;
`;

export default ProductPage;
