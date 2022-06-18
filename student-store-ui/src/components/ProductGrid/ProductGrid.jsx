import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
          {props.response.map((element) => {
            return(
              <ProductCard key={element.id} info={element}></ProductCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
