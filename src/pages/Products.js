import { getProducts, deleteProduct, editProduct } from "../API/product";
import { reRender } from "../helper/reRender";
const Product = {
        render: async() => {
                const response = await getProducts();
                const { data } = response;
                return `
                <a href="/products/add" class="btn btn-success">Thêm Mới</a>
        <h2 class="text-center" style="margin-bottom: 50px">Sản Phẩm</h2>
        <div class="row">
            ${data.map((product) => (
                `<div class="col-3">
                    <p>ID: ${product.id}</p>
                    <p>Tên Sản Phẩm: ${product.name}</p>
                    <p>Mô Tả: ${product.description}</p>
                    <p>Đơn Giá: ${Number(product.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</p>
                    ${product.status == 1 ? `<p>Trạng Thái: <span class='text-success' id='block' style='cursor: pointer;' data-id='${product.id}'>Hiển Thị</span></p>` : `<p>Trạng Thái: <span class='text-danger' id='hidden' style='cursor: pointer;' data-id='${product.id}'>Ẩn</span></p>`}
                    <a href="/products/detail/${product.id}" class="btn btn-default">Chi Tiết</a>
                    <a href="/products/edit/${product.id}" class="btn btn-primary">Sửa</a>
                    <button class="btn btn-danger" data-id="${product.id}">Xóa</button>
                    <hr>
                </div>
                `
            )).join('')}
        </div>
        `
    },
    afterRender: () => {
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            const data = btn.dataset;
            btn.addEventListener('click', async () => {
                await deleteProduct(data.id);
                reRender(Product);
            });
        });

        const statusBtns1 = document.querySelectorAll('#hidden');
        statusBtns1.forEach((btn) => {
            const dataSubmit = { status: 1 }
            const data = btn.dataset;
            btn.addEventListener('click', async () => {
                await editProduct(dataSubmit, data.id);
                reRender(Product);
            });
        });

        const statusBtns2 = document.querySelectorAll('#block');
        statusBtns2.forEach((btn) => {
            const dataSubmit = { status: 0 }
            const data = btn.dataset;
            btn.addEventListener('click', async () => {
                await editProduct(dataSubmit, data.id);
                reRender(Product);
            });
        });
    },
}

export default Product;