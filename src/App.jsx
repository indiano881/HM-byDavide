import "./global.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import Footer from "./components/Footer"
import {useState, useEffect} from "react";


function App() {
  const [products, setProducts] = useState(null);
  const [catProduct, setCatProduct] = useState(null);
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
        
      } catch (err) {
        console.log("error is:" + err)
      }
    }
    getCategories(API_URL+ "/categories")
  },[])



  useEffect(()=>{
    
 //at page REFRESH-display all CATEGORIES
 const getCategories = async url => {
  try {
    const response = await fetch(url);
    const data= await response.json();
    setCategory(data)
    
  } catch (err) {
    console.log("error is:" + err)
  }
}
getCategories(API_URL+ "/categories")



//at page REFRSH-displöay products by category
 const getProuctSingleCategory= async url => {
   try {
    const response= await fetch(url);
    const data = await response.json();
    setCatProduct(data)
   } catch (err) {
    console.log("error " + err)
   }
 }
 getProuctSingleCategory(API_URL + "/category/" + selectedCategory)
 

  }, [selectedCategory])

  

  return (
    <>
      <Header />
      {category && <Navigation categoryArray={category} setSelectedCategory={setSelectedCategory} setProducts={setProducts}/>}
      {products && products.map((item, index)=> <Products key={index} props={item}/>)}
      {catProduct && catProduct.map((item, index)=> <Products key={index} props={item}/>)}
      <Footer />
    </>
  )
}

export default App
