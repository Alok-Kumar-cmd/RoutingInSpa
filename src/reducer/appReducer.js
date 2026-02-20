export const initialState = {
  favorites: []
};

export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case "REMOVE_FAV":
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== action.payload)
      };

    case "CLEAR_FAV":
      return {
        ...state,
        favorites: []
      };

    default:
      return state;
  }
}