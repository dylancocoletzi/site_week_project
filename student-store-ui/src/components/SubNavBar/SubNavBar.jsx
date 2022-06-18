import * as React from "react"
import {useEffect} from "react"
import "./SubNavBar.css"

export default function SubNavBar(props) {
    console.log("sub", props)

    const filterCategory = Boolean(props.category) && props.category.toLowerCase() !== "all"
    ? props.products.filter((cat) => cat.category === props.category.toLowerCase()) :
    props.product;

    const filterSearch = Boolean()
  return (
    <nav className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search"/>
                    <i className="material-icons">search</i>
                </div>
                <div className="links">
                    <span className="help">
                        <i className="material-icons">help</i>
                        Help
                    </span>
                    <div className="cart">
                        <a href="">
                            My Cart
                            <i className="material-icons">shopping_cart</i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="hamburger-menu">
                    <i className="material-icons">menu</i>
                </div>
                <ul className="category-menu">
                    <li className="is-active">
                        <button>All Categories</button>
                    </li>
                    <li>
                        <button >Clothing</button>
                    </li>
                    <li>
                        <button>Food</button>
                    </li>
                    <li>
                        <button>Accessories</button>
                    </li>
                    <li>
                        <button>Tech</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}