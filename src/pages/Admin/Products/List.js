import { getProducts, deleteProduct, updateProduct } from "../../../API/product";
import ContentAdmin from "../../../components/LayoutAdmin/ContentAdmin";
import { reRender } from "../../../helper/reRender";
const ProductList = {
        render: async() => {
                const response = await getProducts();
                const { data } = response;

                return (`
            <h2 class="text-center my-5">Danh Sách Sản Phẩm</h2>
            <a href="products/add" class="btn btn-success">
            Thêm mới
            </a>
            <br>
            <br>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Ảnh</th>
                    <th>Giá</th>
                    <th>Giá Khuyến Mại</th>
                    <th>Trạng Thái</th>
                    <th colspan="2">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                ${ data.map((products) => (

                    `<tr>
                        <td>
                            ${products.id}
                        </td>
                        <td>
                            ${products.name}
                        </td>
                        <td>
                            <div class="d-flex align-items-center">
                                <img
                                    src="${products.avatar}"
                                    alt=""
                                    style="width: 45px; height: 45px"
                                    class="img-fluid rounded"
                                    />
                            </div>
                        </td>
                        <td>${Number(products.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</td>
                        <td>${products.sale_price == null ? "Không có khuyến mại" : `${Number(products.sale_price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}`}</td>
                        <td>
                            <span data-id="${products.id}" id="${Number(products.status) == 0 ? "block" : "hidden"}" class="badge badge-${Number(products.status) == 0 ? "success" : "danger"} rounded-pill d-inline fs-6 text" style="cursor:pointer">${Number(products.status) == 0 ? "Hiển thị" : "Ẩn"}</span>
                        </td>
                        <td>
                            <a href="products/edit/${products.id}" class="btn btn-primary">
                                <i class="fas fa-pen-fancy"></i>
                            </a>
                            <button type="button" data-id="${products.id}" class="btn btn-danger" id="delete">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>`
                    )).join("")
                }
                </tbody>
            </table>

        `)
    },
    afterRender: () => {
        const deleteBtns = document.querySelectorAll('#delete');
        deleteBtns.forEach((btn) => {
            const data = btn.dataset;
            btn.addEventListener('click', async() => {
                await deleteProduct(data.id);
                reRender('#content', ContentAdmin,undefined, ProductList);
            });
        });

        const statusBtns1 = document.querySelectorAll('#hidden');
        statusBtns1.forEach((btn) => {
            const dataSubmit = { status: 0 }
            const data = btn.dataset;
            btn.addEventListener('click', async() => {
                await updateProduct(dataSubmit, data.id);
                reRender('#content', ContentAdmin,undefined, ProductList);
            });
        });

        const statusBtns2 = document.querySelectorAll('#block');
        statusBtns2.forEach((btn) => {
            const dataSubmit = { status: 1 }
            const data = btn.dataset;
            btn.addEventListener('click', async() => {
                await updateProduct(dataSubmit, data.id);
                reRender('#content', ContentAdmin,undefined, ProductList);
            });
        });
    },
}

export default ProductList;