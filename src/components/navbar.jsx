import './styles/navbar.css';

import { Link } from  'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </li>

      </ul>
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="search" aria-label="search" />
        <Link className="btn btn-light" to="/cart"> View Cart</Link>
        <button>Search</button>

      </div>
    </div>
  </div>
</nav>

    );
}

export default Navbar;