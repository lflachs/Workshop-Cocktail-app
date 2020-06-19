import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import Loading from "../Component/Loading";
import { useParams, useHistory } from "react-router-dom";

const ProductPage = () => {
  const history = useHistory();
  const { name } = useParams();
  const [cocktail, loading, errors] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      {loading ? (
        <Loading />
      ) : (
        <>
          <img
            src={cocktail.drinks[0].strDrinkThumb}
            alt={cocktail.drinks[0].strDrink}
          />
          <h1>{cocktail.drinks[0].strDrink}</h1>
        </>
      )}
    </div>
  );
};

export default ProductPage;
