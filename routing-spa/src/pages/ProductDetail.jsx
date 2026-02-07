import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  return <h3>Product ID: {id}</h3>
}
