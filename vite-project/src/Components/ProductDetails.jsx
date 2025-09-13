import { useParams } from "react-router-dom"
import { products } from "./data/products";

export default function ProductDetails() {
    const {productId} = useParams();
    
    const product = products.find(product => product.id ===
        parseInt(productId)
    );
    return (
      <div>
        <h1>{product.name}</h1>
        <p>price: {product.price}</p>
        <button>Add to cart</button>
      </div>
    );
}
