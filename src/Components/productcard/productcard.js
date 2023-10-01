import  "./product.css" 

const Productcard = (props) => {

 const { product } = props;
return (
 <div className="product-container">
 <h6>Product Name: {product.name} </h6>
 {product.description && (
   <div className="description">{product.description}</div>
 )}
 <h6>Price: {product.price} </h6>
 {product.imgUrl && (
   <div>
     <img
       className="product-image"
       src={product.imgUrl}
       alt={product.name}
     />
   </div>
 )}
 <div className="info">
   {product.quantity < 20 ? (
     <span className="few-items">Only few items left!</span>
   ) : (
     <span className="available">Available</span>
   )}
 </div>
 </div>
    )
}

export default Productcard