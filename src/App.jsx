import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Products/>}/>
         <Route path="/mapproduct/:id" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
