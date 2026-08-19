export function ProductCard({name="NewProduct",price,image}){
    return(
        <div className="card">
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <h6>Rs.{price}</h6>
        </div>
    )
}