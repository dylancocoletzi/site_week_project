import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useState, useEffect} from "react"
import { BrowserRouter , Route, Routes,  Link} from "react-router-dom"
import axios from "axios"
import "./App.css"

export default function App() {
  const [isFetching, setisFetching] = useState(false);
  const [response, setResponse] = useState([])
  const [category, setCategory] = useState("all categories")
  const [search, setSearch] = useState("")
  const [original, setOriginal] = useState(response)

  useEffect(() => {
    const getProducts = async() =>{
      setisFetching(true)

      try{
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
        setResponse(response.data.products)
      }catch{
        setisFetching(false)
      }
    }
    getProducts()
  }, [])

  const handleOnSubmit = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar />
          <Navbar />
          <Hero></Hero>
          <Routes>
            <Route path="/"
             element={ 
              <Home original={original} handleOnSubmit={handleOnSubmit} search={search} setSearch={setSearch} category={category} setCategory={setCategory} response={response}/>
             }>
            </Route> 

            <Route path="/products/:productId" element={
              <ProductDetail></ProductDetail>
            }></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
