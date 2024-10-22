import {useState} from 'react';
import "./styles/quantityPicker.css";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

function increase() {
    const val = quantity + 1;
    setQuantity(val);
    props.onChange(); // notify listener/parent
}

function decrease() {
    // min = 1
    if(quantity == 1) return;

    const val = quantity -1;
    setQuantity(val);
    props.onChange(); // notify
}

    return (
        <div className="qt-picker">
            <button className='btn btn-sm btn-primary' onClick={decrease} disabled={quantity == 1}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-primary' onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;