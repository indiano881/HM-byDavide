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

  useEffect(()=> {

    const getProducts = async url => {
      //at page load-display all products
      try {
        const response = await fetch(url);
        const data= await response.json();
        setProducts(data)
        console.log(data)
      } catch (err) {
        console.log("error is:" + err)
      }
    }
    getProducts(API_URL)

    //at page load-display all CATEGORIES
    const getCategories = async url => {
      try {
        const response = await fetch(url);
        const data= await response.json();
        setCategory(data)
        console.log(data)
      } catch (err) {
        console.log("error is:" + err)
      }
    }
    getCategories(API_URL+ "/categories")

  },[])

  

  return (
    <>
      <Header />
      {category && <Navigation categoryArray={category}/>}
      {products && products.map((item, index)=> <Products key={index} props={item}/>)}
      <Footer />
    </>
  )
}

export default App
