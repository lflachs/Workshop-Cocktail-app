import React, { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [favorite, setFavorite] = React.useState(
    JSON.parse(localStorage.getItem("favoriteCocktails")) || []
  );
  React.useEffect(() => {
    localStorage.setItem("favoriteCocktails", JSON.stringify(favorite));
  }, [favorite]);

  const handleAddFavorite = (element) => {
    if (!favorite.includes(element)) {
      setFavorite([...favorite, element]);
    }
  };
  const handleDeleteFavorite = (element) => {
    setFavorite(favorite.filter((fav) => fav !== element));
  };
  const values = { favorite, handleAddFavorite, handleDeleteFavorite };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
