import * as React from "react"
import {useState} from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props){
    console.log("View", props)
    const [des, setDes] = useState(true)
    return(
        <div className="product-view">
            <h1 className="product-id">Product # {props.productId}</h1>
    <ProductCard des={des} info={props.product}></ProductCard>
        </div>
    )
}