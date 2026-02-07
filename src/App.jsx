function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>React Routing SPA</h1>

        <p style={styles.subtitle}>
          Full Stack Experiment – Client Side Routing
        </p>

        <hr style={styles.line} />

        <p style={styles.text}>
          <strong>Name:</strong> Alok Kumar
        </p>
        <p style={styles.text}>
          <strong>UID:</strong> 23BAI70536
        </p>

        <p style={styles.footer}>
          Built with ❤️ using React, Vite & React Router
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "14px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px",
  },
  line: {
    margin: "20px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  text: {
    fontSize: "16px",
    margin: "8px 0",
    color: "#444",
  },
  footer: {
    marginTop: "25px",
    fontSize: "14px",
    color: "#777",
  },
}

export default App
