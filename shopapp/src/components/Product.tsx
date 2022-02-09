import { Link } from "react-router-dom";
import IProduct from "../model/IProduct";
import { Button } from "./Button";

type IAppProps = {
    product: IProduct
}

function Product(props:IAppProps) {
    let {id, name, image} = props.product;
    return (
        <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <Link to={`/details/${id}`}>
                         <img src={image} alt={name} style={{width:'100%', height:'200px'}}/>
                    </Link>
                    <Button className="cart-btn fa fa-cart-plus"/>
                </div>
            </div>
        </div>
    )
}

export default Product;