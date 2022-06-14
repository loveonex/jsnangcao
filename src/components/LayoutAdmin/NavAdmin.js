const NavAdmin = {
    render: () =>
        `
        <div class="sidenav bg-dark col-2 px-5 py-5" style="width:240px">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link-light" href="/admin/products" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-layer-group"></i> Product
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="/admin/products">List Products</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/admin/products/add">Add Product</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link-light" href="/admin/categories" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-bars"></i> Categories
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="/admin/categories">List Categories</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/admin/categories/add">Add Category</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; height: 850px; right: 0px;">
                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 700px;"></div>
            </div>
        </div>
        `
}
export default NavAdmin;