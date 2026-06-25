import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {
  const [products,setProduct]=useState([])
   
  async function getdata(){
        const data=await fetch("http://localhost:3000/api/products");
        const result= await data.json();
        console.log(result);
        setProduct(result);      
  }
  useEffect(()=>{
    getdata();
  },[])


  return (
    <div>
      <h2>Products</h2>

      <div>
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <div>
              <img src="https://picsum.photos/200?random=1" alt={product.name} />
              <h4>{product.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;