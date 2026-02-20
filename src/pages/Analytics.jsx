import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

function Analytics() {
  const { state, dispatch } = useAppContext();

  const totalFavorites = useMemo(() => {
    return state.favorites.length;
  }, [state.favorites]);

  return (
    <div>
      <h1>Analytics Page</h1>
      <h2>Total Favorites: {totalFavorites}</h2>

      <button onClick={() =>
        dispatch({ type: "ADD_FAV", payload: "Item " + Date.now() })
      }>
        Add Favorite
      </button>

      <button onClick={() =>
        dispatch({ type: "CLEAR_FAV" })
      }>
        Clear Favorites
      </button>
    </div>
  );
}

export default Analytics;