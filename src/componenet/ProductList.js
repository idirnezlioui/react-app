import Product from "./product";
import{useEffect,useState} from "react"
function ProductList() {
    const api_url="https://fakestoreapi.com/products" 

    const [prods,setprod]=useState([])

    useEffect(()=>{
        fetch(api_url)
        .then((rps)=>rps.json())
        .then((data)=>setprod(data))
    },[])

    return(
        <>
        <div className="text-center">
            <h2>Vous prduits</h2>
        </div>
        <div className="container">
            <div className="row">
                {prods.map((pro) => {
                    return (
                        <div className="col-3" key={pro.id}>
                            <Product pro={pro}/>
                        </div>
                    )
                })}      
            </div>
        </div>
        
        </>
    )
}
export default ProductList;