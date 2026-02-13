import { Routes, Route, Link, useParams } from "react-router-dom"

function Home() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>React Routing SPA</h1>
      <p style={styles.subtext}>
        Full Stack Experiment – Client Side Routing
      </p>

      <div style={styles.divider}></div>

      <p style={styles.text}>
        Welcome to my Single Page Application built using React & Vite.
      </p>
      <p style={styles.text}>
        This project demonstrates smooth navigation without page reload.
      </p>

      <div style={styles.infoBox}>
        <p><strong>Name:</strong> Alok Kumar</p>
        <p><strong>UID:</strong> 23BAI70536</p>
      </div>
    </div>
  )
}

function About() {
  return (
    <div style={styles.card}>
      <h2 style={styles.pageTitle}>About</h2>
      <p style={styles.text}>
        This SPA was developed as part of the Full Stack Lab Experiment.
      </p>
      <p style={styles.text}>
        React Router DOM enables client-side navigation and dynamic routing.
      </p>
    </div>
  )
}

function Contact() {
  return (
    <div style={styles.card}>
      <h2 style={styles.pageTitle}>Contact</h2>
      <p style={styles.text}>Feel free to connect:</p>
      <p style={styles.text}>📧 alok@example.com</p>
      <p style={styles.text}>🔗 linkedin.com/in/alok</p>
    </div>
  )
}

function Products() {
  return (
    <div style={styles.card}>
      <h2 style={styles.pageTitle}>Products</h2>
      <p style={styles.text}>Select a product:</p>

      <div style={styles.productList}>
        <Link style={styles.productBtn} to="/products/101">Product 101</Link>
        <Link style={styles.productBtn} to="/products/202">Product 202</Link>
        <Link style={styles.productBtn} to="/products/303">Product 303</Link>
      </div>
    </div>
  )
}

function ProductDetail() {
  const { id } = useParams()

  return (
    <div style={styles.card}>
      <h2 style={styles.pageTitle}>Product Detail</h2>
      <p style={styles.text}>Viewing product:</p>
      <h3 style={styles.highlight}>Product ID: {id}</h3>
    </div>
  )
}

function NotFound() {
  return (
    <div style={styles.card}>
      <h2 style={styles.pageTitle}>404</h2>
      <p style={styles.text}>Page Not Found</p>
      <Link style={styles.backBtn} to="/">⬅ Back Home</Link>
    </div>
  )
}

function App() {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <Link style={styles.navlink} to="/">Home</Link>
        <Link style={styles.navlink} to="/about">About</Link>
        <Link style={styles.navlink} to="/contact">Contact</Link>
        <Link style={styles.navlink} to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f6d365, #fda085)", // warm tone
    padding: "40px 20px",
    fontFamily: "Poppins, sans-serif",
  },

  navbar: {
    background: "rgba(255,255,255,0.35)",
    backdropFilter: "blur(8px)",
    padding: "12px 20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "35px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  navlink: {
    textDecoration: "none",
    color: "#5a3e2b",
    fontWeight: "500",
    fontSize: "15px",
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    maxWidth: "520px",
    margin: "auto",
    boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
  },

  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "30px",
    marginBottom: "5px",
    color: "#333",
  },

  subtext: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "15px",
  },

  divider: {
    height: "1px",
    background: "#eee",
    margin: "15px 0 20px",
  },

  pageTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },

  text: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
  },

  infoBox: {
    marginTop: "20px",
    padding: "14px",
    background: "#fff4ec",
    borderRadius: "10px",
    fontSize: "14px",
  },

  productList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  },

  productBtn: {
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    background: "#fda085",
    color: "white",
    textAlign: "center",
    fontSize: "14px",
  },

  highlight: {
    color: "#f76b1c",
  },

  backBtn: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "#f76b1c",
    color: "white",
    fontSize: "14px",
  },
}

export default App
