
import "./styles/home.css";

import { Link } from  'react-router-dom';


function Home() {
    return (
        <div className="home">
            <h1>Organic Food 1 click away!!</h1>

            <Link to="/catalog">Check the catalog out!</Link>
        </div>
    )
}

export default Home;