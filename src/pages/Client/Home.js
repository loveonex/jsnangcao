import { getProducts } from "../../API/product";
import { getCategories } from "../../API/category";
const Home = {
        render: async() => {
                const response = await getProducts();
                let { data } = response;
                data = data.filter((product) => product.status == 0);
                return `
        <div class='container'>
        <h2 class="text-center" style="margin-bottom: 50px">Trang Chủ</h2>
        <div class="row">
            ${data.map((product) => (
                `<div class="col-3">
                    <a href="/products/detail/${product.id}" style="color:#000">
                        <img src="${product.avatar}" alt="" style="width:305px">
                        <h5>${product.name}</h5>
                        <p>Đơn Giá: 
                        <span>
                        ${product.sale_price == null ? "" : `${Number(product.sale_price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})} | `}
                        </span>
                        <span class="${product.sale_price == null ? "" : "text-decoration-line-through text-danger"}">
                        ${Number(product.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}
                        </span>
                        </p>
                        <hr>
                    </a>
                </div>
                `
            )).join('')}
        </div>
        </div>
        `
    }
}
export default Home;