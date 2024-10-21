import './styles/catalog.css';
import Product from './products.jsx';
import DataService from './services/dataService.js';
import {useState, useEffect} from 'react';



function Catalog() {

    const[products, setProducts] = useState([])

    useEffect(function() {
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
    }
    return (
        <div className="catalog">
            <h3>We have {products.length} new products for you!</h3>
            <br/>

            {
                products.map((item)=>(
                    <Product key={item._id} data={item}></Product>
                ))
            }

    
        </div>
    );
}

export default Catalog;