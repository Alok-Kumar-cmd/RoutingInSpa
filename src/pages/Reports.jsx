import { useAppContext } from "../context/AppContext";
import { useSelector } from "react-redux";

function Home() {

  const { theme, toggleTheme } = useAppContext();
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div>
      <h1>Home Page</h1>

      <p>Current Theme: <strong>{theme}</strong></p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <p>❤️ Favorites Count: {favorites.length}</p>
    </div>
  );
}

export default Home;