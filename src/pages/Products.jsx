import { products } from '../data/products'

function Products() {
  return (
    <section className="products">
      <h2>Nos Produits</h2>
      <div className="products-slider">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="btn btn-outline">En savoir plus</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products 