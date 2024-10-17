import './styles/products.css';
import QuantityPicker from './quantityPicker';

function Product() {
    function add(){
        console.log("adding to cart");
    }
    return (
        <div className="product">
            <img src="https://picsum.photos/250/200" alt="" />
            <h3>I'm a product</h3>

            <label>$total</label>
            <label>$price</label>

            <QuantityPicker />

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;


