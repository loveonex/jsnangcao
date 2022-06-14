const Footer = {
    render: (name = "Đây là Footer") => (
        `
        <div style="margin-top:50px">
            <div class="container">
            <footer class="text-center text-lg-start bg-dark text-muted">
            <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div class="me-5 d-none d-lg-block">
                    <span>Liên Hệ Với Tôi Qua Các Trang Mạng Xã Hội:</span>
                </div>
                <div>
                    <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #3b5998;"
                    href="#!"
                    role="button"
                    ><i class="fab fa-facebook-f"></i
                ></a>

                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #55acee;"
                    href="#!"
                    role="button"
                    ><i class="fab fa-twitter"></i
                ></a>

                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #dd4b39;"
                    href="#!"
                    role="button"
                    ><i class="fab fa-google"></i
                ></a>

                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #ac2bac;"
                    href="#!"
                    role="button"
                    ><i class="fab fa-instagram"></i
                ></a>

                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #0082ca;"
                    href="#!"
                    role="button"
                    ><i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        class="btn btn-primary btn-floating m-1"
                        style="background-color: #333333;"
                        href="#!"
                        role="button"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Công Ty
                    </h6>
                    <p>
                        Công Ty TNHH Một Mình Tao LOVEONEX
                    </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Sản Phẩm
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Angular</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">React</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Vue</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Laravel</a>
                    </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Hữu Ích
                        </h6>
                        <p>
                            <a href="/" class="text-reset">Trang Chủ</a>
                        </p>
                        <p>
                            <a href="/about" class="text-reset">Giới Thiệu</a>
                        </p>
                        <p>
                            <a href="/news" class="text-reset">Tin Tức</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Thông Tin
                    </h6>
                    <p><i class="fas fa-home me-3"></i>Nam Từ Liêm - Hà Nội</p>
                    <p>
                        <i class="fas fa-envelope me-3"></i>
                        namtvph13226@fpt.edu.vn
                    </p>
                    <p><i class="fas fa-phone me-3"></i>+ 84 886458972</p>
                    <p><i class="fas fa-print me-3"></i>+ 84 839551901</p>
                    </div>
                </div>
                </div>
            </section>
            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                Code By LOVEONEX
            </div>
            </footer>
            <div>
        </div>
        `
    )
}
export default Footer;