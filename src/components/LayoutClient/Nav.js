import { getCategories } from "../../API/category";

const Nav = {
        render: async() => {
                const response = await getCategories();
                let { data } = response;
                data = data.filter((category) => category.status == 0);
                return (`
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/">Trang Chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">Giới Thiệu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/news">Tin Tức</a>
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="/products"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    Sản Phẩm
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                ${
                    data.map(category => (
                        `
                        <li>
                        <a class="dropdown-item" href="/categories/${category.id}">${category.name}</a>
                        </li>
                        `
                    )).join('')
                }
                </ul>
            </li>
        </ul>
        `)
    }
}
export default Nav;