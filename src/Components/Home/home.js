import "./home.css";
import Productcard from "../productcard/productcard";



const Home = (props) => {
    console.log(props);
    const { products } = props;


    return(
        <div>
            <h2 className="home">Home Component</h2>
            <div className="products-container">
            <h1>Products:
                {
                    products.map((product,index) => {
                        return   <Productcard product={product} key={index}/>

                    })
                }
            </h1>
            </div>
          
        </div>
    );
};

export default Home