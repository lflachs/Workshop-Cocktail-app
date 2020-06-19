import React from "react";
import Card from "../Components/Card";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
function App({ test }) {
  const [cocktails, loading, errors] = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );
  return (
    <div>
      <Link to="/favorites">My Favorites Cocktails</Link>
      <CardContainer>
        {loading ? (
          <Loading />
        ) : (
          cocktails.drinks.map((cocktail, idx) => (
            <Card
              key={idx}
              title={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
            />
          ))
        )}
      </CardContainer>
    </div>
  );
}

const CardContainer = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;
export default App;
