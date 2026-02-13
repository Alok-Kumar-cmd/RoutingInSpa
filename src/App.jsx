import { Routes, Route, Link, useParams } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Welcome to my React Routing Single Page Application.</p>
      <p>This project demonstrates client-side routing using React Router DOM.</p>

      <hr />

      <p><strong>Name:</strong> Alok Kumar</p>
      <p><strong>UID:</strong> 23BAI70536</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>ℹ️ About Page</h2>
      <p>This SPA was developed as part of the Full Stack Experiment.</p>
      <p>It showcases navigation without page reload using React Router.</p>
      <p>React Router enables smooth user experience and state preservation.</p>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>📞 Contact Page</h2>
      <p>You can reach out for collaboration or project discussions.</p>
      <p>Email: alok@example.com</p>
      <p>LinkedIn: linkedin.com/in/alok</p>
    </div>
  )
}

function Products() {
  return (
    <div>
      <h2>🛍 Products Page</h2>
      <p>Select a product to view its details:</p>

      <ul>
        <li><Link to="/products/101">Product 101</Link></li>
        <li><Link to="/products/202">Product 202</Link></li>
        <li><Link to="/products/303">Product 303</Link></li>
      </ul>
    </div>
  )
}

function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <h2>📦 Product Detail</h2>
      <p>You are viewing details for:</p>
      <p><strong>Product ID:</strong> {id}</p>
      <p>This demonstrates dynamic routing using URL parameters.</p>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h2>❌ 404 – Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI" }}>
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
    </div>
  )
}

export default App
