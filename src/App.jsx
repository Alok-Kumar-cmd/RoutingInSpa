import { Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h2>🏠 Home Page</h2>
}

function About() {
  return <h2>ℹ️ About Page</h2>
}

function Contact() {
  return <h2>📞 Contact Page</h2>
}

function Products() {
  return (
    <>
      <h2>🛍 Products</h2>
      <ul>
        <li><Link to="/products/101">Product 101</Link></li>
        <li><Link to="/products/202">Product 202</Link></li>
      </ul>
    </>
  )
}

function ProductDetail() {
  return <h2>📦 Product Detail Page</h2>
}

function NotFound() {
  return <h2>❌ 404 – Page Not Found</h2>
}

function App() {
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
