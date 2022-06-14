import { createCategory } from "../../../API/category";
import router from "../../../helper/router";

const CategoriesAdd = {
    render: () => {
        return (
            `<div>
                <h2 class="text-center my-5">Thêm Mới Danh Mục</h2>
                <span id="error" class="text-danger">
                        </span>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên Danh Mục</label>
                        <input type="text" id="name" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Trạng Thái:</label>
                        <select id="status" class="form-control">
                            <option value="1">Ẩn</option>
                            <option value="0">Hiển Thị</option>
                        </select>
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
            const status = document.querySelector('#status').value;
            let error = document.querySelector('#error');
            if (!name || !status) {
                return error.innerHTML = "Vui Lòng Không Để Trống";
            }

            const submitData = { name, status };
            await createCategory(submitData);
            router.navigate('admin/categories');
        })
    }
}
export default CategoriesAdd;