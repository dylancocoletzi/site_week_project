import * as React from "react"
import "./ProductCard.css"
import {Link} from "react-router-dom"

export default function ProductCard(props) {
    console.log("Card", props)
    return(
        <div className="product-card">
            <div className="media">
                {/* <a href="">
                    <img src={props.info.image} alt=""/>
                </a> */}
                <Link to={"/products/" + props.info.id}>
                    <img src={props.info.image} alt=""/>
                </Link>
            </div>
            <div className="product-info">
                <div className="main-info">
                    <p>{props.info.name}</p>
                    <p className="product-price">${props.info.price}</p>
                </div>
                {props.des ? 
                <div className="desc">
                <p>{props.info.description}</p>
                </div>: null}
                {/* <div className="desc">
                    <p>{props.info.description}</p>
                </div> */}
                <div className="actions">
                    <div className="buttons">
                        <button className="add">
                            <i className="material-icons">add</i>
                        </button>
                        <button className="remove">
                            <i className="material-icons">remove</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
