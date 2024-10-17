import Product from './products';
import './styles/catalog.css';

function Catalog() {
    return (
        <div className="catalog">
            <h3>This is where the catalog it's going to be.</h3>

            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    );
}

export default Catalog;