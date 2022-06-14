import Cart from "./Cart";
import Nav from "./Nav";
const Header = {
    render: async() =>
        `<div style="margin-bottom:50px">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                            src="https://image.bnews.vn/MediaUpload/Medium/2020/03/30/fpt-new-logo.png"
                            height="15"
                            alt="Logo"
                            loading="lazy"/>
                        </a>
                        ${await Nav.render()}
                    </div>
                    <div class="d-flex align-items-center">
                        <div id="cart">
                        ${Cart.render()}
                        </div>
                        <div>
                            <a
                                class="d-flex align-items-center hidden-arrow"
                                href="/admin"
                            >
                                <img
                                    src="https://icon-library.com/images/icon-user/icon-user-15.jpg"
                                    class="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </div>`
}
export default Header;