import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "../Component/Card";
import styled from "styled-components";

function Homepage() {
  const [cocktails, loading, errors] = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );

  return (
    <div>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <CardContainer>
          {cocktails.drinks.map((cocktail) => (
            <Card title={cocktail.strDrink} image={cocktail.strDrinkThumb} />
          ))}
        </CardContainer>
      )}
    </div>
  );
}

const CardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export default Homepage;
