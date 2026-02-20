import { useAppContext } from "../context/AppContext";

function Home() {
  const { theme, toggleTheme, state } = useAppContext();

  return (
    <div>
      <h1>Home Page</h1>

      <p>Current Theme: <strong>{theme}</strong></p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <p>❤️ Favorites Count: {state.favorites.length}</p>
    </div>
  );
}

export default Home;