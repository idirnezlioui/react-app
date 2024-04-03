import { Link } from "react-router-dom";
function Product(props) {
    const {pro,showbutton}=props
    
    return(
        <>
            <div className="card" style={{ width: "18rem"}} >
                        <img src={pro.image} className="card-img-top" alt={pro.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{pro.title}</h5>
                            <p className="card-text">{pro.description}</p>
                            <p>Price :{pro.price}$</p>
                             {showbutton && <Link
                              className="btn btn-primary" to={`/product/${pro.id}`}>Detail</Link> }
                        </div>
            </div>
        </>
    )
}
export default Product;