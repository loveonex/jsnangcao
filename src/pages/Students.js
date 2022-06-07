import { getStudents, deleteStudent } from "../API/student";
import { reRender } from "../helper/reRender";
const Student = {
        render: async() => {
                const response = await getStudents();
                const { data } = response;
                return `
                <a href="/students/add" class="btn btn-success">Thêm Mới</a>
        <h2 class="text-center" style="margin-bottom: 50px">Sinh Viên</h2>
        <div class="row">
            ${data.map((stu) => (
                `<div class="col-3">
                    <p>ID: ${stu.id}</p>
                    <p>Mã Sinh Viên: ${stu.id_stu}</p>
                    <p>Tên Sinh Viên: ${stu.name}</p>
                    <a href="/students/detail/${stu.id}" class="btn btn-default">Chi Tiết</a>
                    <a href="/students/edit/${stu.id}" class="btn btn-primary">Sửa</a>
                    <button class="btn btn-danger" data-id="${stu.id}">Xóa</button>
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
                await deleteStudent(data.id);
                reRender(Student);
            });
        });
    },
}

export default Student;