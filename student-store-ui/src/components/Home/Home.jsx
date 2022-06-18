import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavBar from "../SubNavBar/SubNavBar"
import {useState} from "react"
import "./Home.css"

export default function Home(props) {

  const filterCategory = Boolean(props.category) && props.category.toLowerCase() !== "all categories"
  ? props.response.filter((cat) => cat.category === props.category.toLowerCase()) :
  props.response;


  const filterSearch = Boolean(props.search)
  ? filterCategory.filter((product) => product.name.toLowerCase().indexOf(props.search) != -1) : filterCategory


  return (
    <div className="home">
      <nav className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input type="text" value={props.search} onChange={props.handleOnSubmit} name="search" placeholder="Search"/>
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
                    {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((i) => {
                      return(
                        <li key={i}>
                          <button className={i} onClick={() => props.setCategory(i)}>{i}</button>
                        </li>
                      )
                    })}
                </ul>
            </div>
        </div>
    </nav>
      <ProductGrid response={filterSearch}></ProductGrid>
      <About></About>
      <Contact></Contact>
      <Foot></Foot>
    </div>
  )
}

export function About(){
return(
  <div className="about" id="About">
    <div className="content">
      <h3>About</h3>
      <div className="summary">
        <div className="text">
          <p>
          The codepath student store offers great products at great prices from a great team and for a great cause.
          </p>
          <p>
          We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
          </p>
          <p>
          All proceeds go towards bringing high quality CS education to college students around the country.
          </p>
        </div>
        <div className="media">
          <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt=""/>
        </div>
      </div>
    </div>
  </div>
)
}

export function Contact(){
  return(
    <div className="contact" id="Contact">
      <div className="content">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">
                Email
                : 
              </span>
              <span>code@path.org</span>
            </li>
            <li>
            <span className="label">
                Phone
                : 
              </span>
              <span>1-800-CODEPATH</span>
            </li>
            <li>
            <span className="label">
                Address
                : 
              </span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
            <li>
              <span>Socials: </span>
              <span className="socials">
                
              </span>
            </li>
          </ul>
          <div className="media">
            <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Foot(){
  return (
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="links">
            <div className="link-column">
              <h4>Catergories</h4>
              <ul>
                <li>All Catergories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Find a Store</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money Refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Socials</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Our App</h4>
              <ul>
                <li>
                  <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt=""/>
                </li>
                <li>
                  <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt=""/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span className="payment-options">
            <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt=""/>
            <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt=""/>
            <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt=""/>
            <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt=""/>
          </span>
        </div>
      </div>
    </footer>
  )
}

