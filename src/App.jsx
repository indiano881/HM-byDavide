import "./global.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import Footer from "./components/Footer"
import {useState, useEffect} from "react";


function App() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null)
  const [selectedCategory, setSelectedCategory] =useState(null)

  const API_URL= 'https://fakestoreapi.com/products';


  

  return (
    <>
      <Header />
      
      <Footer />
    </>
  )
}

export default App
