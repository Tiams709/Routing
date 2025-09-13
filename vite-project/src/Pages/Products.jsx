import { Link } from "react-router-dom"
import { products } from "../Components/data/products";

export default function Products() {
    return( <div >
      <h1>Explore Our Products</h1>
      <div className="products">
        {products.map(product => (
            <div key={product.id} className="product">
                <h2>{product.name}</h2>
            <p>price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
                </div>
        ))}
      </div>
            </div>
    );
}
