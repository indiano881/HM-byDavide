import "./global.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import Footer from "./components/Footer"
import {useState, useEffect} from "react";


function App() {
  const [products, setProducts] = useState(null);

  const API_URL= 'https://fakestoreapi.com/products';

  const getData= async url => {
    try {
      let response= await fetch(url);
      let data= await response.json();
      setProducts(data)
    } catch (err) {
      console.log("error is" + err)
    }
    
  }

  getData(API_URL)

  useEffect(()=>{



  }, [products])



  return (
    <>
      <Header />
      <Navigation />
      <section className="main-container">
      {products && products.map((item, index) => <Products key={index} props={item} />)}
      </section>
      <Footer />
    </>
  )
}

export default App
