import { createProduct } from "../API/product";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <h2 class="text-center" style="margin-bottom: 50px">Thêm Mới Sản Phẩm</h2>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên Sản Phẩm:</label>
                        <input type="text" id="name" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Giá:</label>
                        <input type="number" id="price" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Trạng Thái:</label>
                        <select id="status" class="form-control">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Mô Tả</label>
                        <textarea rows="" cols="" class="form-control" id="description"></textarea>
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="button" class="btn btn-success">Thêm</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-success');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;
            const description = document.querySelector('#description').value;

            const submitData = { name, price, status, description };
            await createProduct(submitData);
            window.location.replace('/products');
        })
    }
}
export default ProductAdd;