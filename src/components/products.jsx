import QuantityPicker from './quantityPicker';
import './styles/products.css';

function Product(props) {
    function add(){
        console.log("adding to cart");
    }

    return (
        <div className="product">
            <img src= {"./img/"+props.data.image} alt="" />
            {}
            <h3>{props.data.title}</h3>
            <span>{props.key}</span>
            <label>$total</label>
            <label>${props.data.price}</label>

            <QuantityPicker></QuantityPicker>

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;


