import Product from "./product";
import{useEffect,useState} from "react"
function ProductList() {
    const api_url="https://fakestoreapi.com/products" 
    const api_cat="https://fakestoreapi.com/products/categories"
    //const api_cat_name="https://fakestoreapi.com/products/category/jewelery"

    const [prods,setprod]=useState([])
    const [catg,setCatg]= useState([])

    const getALLproduct=()=>{
        fetch(api_url)
        .then((rps)=>rps.json())
        .then((data)=>setprod(data))
    }

    const getCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then((rps) => rps.json())
            .then((data) => setprod(data));
    };


    useEffect(()=>{
        
        getALLproduct()
        fetch(api_cat)
        .then((rps)=>rps.json())
        .then((data)=>setCatg(data))
    },[])

    return(
        <>
        <div className="text-center">
            <h2>Vous prduits</h2>
        </div>
        <div className="container">
            
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu">
                            {catg.map((cat)=>{
                                return(
                                    <li className="dropdown-item" onClick={()=>
                                        getCategory(cat)} key={cat}>{cat}</li>
                                )
                            })}
                            
                        </ul>
                        <button className="btn btn-secondary " type="button" aria-expanded="false" onClick={()=>{
                            getALLproduct()

                        }}>
                            ALL
                        </button>
                    </div>

             
            <div className="row">
                {prods.map((pro) => {
                    return (
                        <div className="col-3" key={pro.id}>
                            <Product pro={pro}  showbutton={true}/>
                        </div>
                    )
                })}      
            </div>
        </div>
        
        </>
    )
}
export default ProductList;