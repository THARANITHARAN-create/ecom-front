import { useParams } from "react-router-dom";
import { products } from "../data/productData";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
