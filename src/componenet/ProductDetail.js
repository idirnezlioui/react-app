 import { useParams } from "react-router-dom";
 import { useEffect,useState } from "react";
 import Product from "./product";
function ProductDetail() {
    const parms = useParams()
    const api_url="https://fakestoreapi.com/products"
    const [products,setProduct]=useState({})
    useEffect(()=>{
        fetch(`${api_url}/${parms.ProductId}`).then((rps)=>rps.json()).then((products)=>setProduct(products))
    },[parms.ProductId])
    console.log(parms)

    return(
       <Product pro={products} showbutton={false}/>

    )
}
export default ProductDetail;