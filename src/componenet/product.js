function Product(props) {
    const {pro}=props
    
    return(
        <>
            <div className="card" style={{ width: "18rem" }} >
                        <img src={pro.image} className="card-img-top" alt={pro.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{pro.title}</h5>
                            <p className="card-text">{pro.description}</p>
                            <button href="#" className="btn btn-primary">Detail</button>
                        </div>
            </div>
        </>
    )
}
export default Product;