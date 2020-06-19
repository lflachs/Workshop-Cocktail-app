import React from "react";
import { AppContext } from "../context/Context";
import { Link } from "react-router-dom";
const Favorites = () => {
  const { favorite } = React.useContext(AppContext);
  return (
    <div>
      <Link to="/">Go Home</Link>
      {favorite.length === 0 ? (
        <h1>No Favorites</h1>
      ) : (
        <ul>
          {favorite.map((fav, idx) => (
            <Link key={idx} to={`/cocktails/${fav}`}>
              <li>{fav}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
