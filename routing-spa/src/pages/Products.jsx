import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
      <h2>Products</h2>
      <Link to="/products/101">Product 101</Link><br/>
      <Link to="/products/202">Product 202</Link>
    </>
  )
}
