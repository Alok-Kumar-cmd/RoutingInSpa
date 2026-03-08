import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/slices/favoritesSlice";

function Projects() {

  const dispatch = useDispatch();   // STEP 6 (connect to Redux)

  return (
    <div>
      <h1>Projects Page</h1>

      <button
        onClick={() => dispatch(addFavorite("Project 1"))}
      >
        Add Project 1 to Favorites
      </button>

      <button
        onClick={() => dispatch(addFavorite("Project 2"))}
      >
        Add Project 2 to Favorites
      </button>

    </div>
  );
}

export default Projects;