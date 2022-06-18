import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img className="codepath-logo"src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt=""/>
          </a>
        </div>
        <div className="socials">
          <img className="twitter-icon" src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" alt=""/>
          <img className="instagram-icon" src="./src/components/Navbar/insta-icon.jpeg" alt=""/>
          <img className="facebook-icon"src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt=""/>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
            </li>
          <li>
            <a href="/#Contact">Contact Us</a>
            </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
