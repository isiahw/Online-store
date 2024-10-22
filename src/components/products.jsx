import QuantityPicker from './quantityPicker';
import './styles/products.css';
import {useState} from "react"
function Product(props) {
    const [quantity, setQuantity] = useState(1);


    function add(){
        console.log("adding to cart");
    }

    function handleQuantity (qty) {
        console.log("quantity changed", qty);
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        // ton of logic
        return total.toFixed(2);
    }


    return (
        <div className="product">
            <img src= {props.data.image} alt=""></img>
            
            <h3>{props.data.title}</h3>
            
            <div className="product-price">
                <label className='total'>${getTotal()}</label>
                <label classNmae='price'>${(+props.data.price).toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;


