import { editProduct, getProduct } from "../API/product";
const ProductEdit = {
    render: async(id) => {
        const response = await getProduct(id);
        const { data } = response;

        return (
            `<div>
                <h2 class="text-center" style="margin-bottom: 50px">Chỉnh Sửa Sản Phẩm</h2>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên Sản Phẩm:</label>
                        <input type="text" id="name" value="${data.name}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Giá:</label>
                        <input type="number" id="price" value="${data.price}" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Trạng Thái:</label>
                        <select id="status" class="form-control">
                            <option value="1" ${Number(data.status) == 1 ? "selected" : ""}>Hiển Thị</option>
                            <option value="0" ${Number(data.status) == 0 ? "selected" : ""}>Ẩn</option>
                        </select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Mô Tả</label>
                        <textarea rows="" cols="" class="form-control" id="description">${data.description}</textarea>
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" data-id="${data.id}">Sửa</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-primary');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;
            const description = document.querySelector('#description').value;

            const submitData = { name, price, status, description };
            await editProduct(submitData, submitBtn.dataset.id);
            window.location.replace('/products');
        })
    }
}
export default ProductEdit;