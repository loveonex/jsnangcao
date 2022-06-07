import { createStudent } from "../API/student";

const StudentAdd = {
    render: () => {
        return (
            `<div>
                <h2 class="text-center" style="margin-bottom: 50px">Thêm Mới Sinh Viên</h2>
                <form class="col-md-5">
                    <div class="form-group">
                        <label for="">Tên:</label>
                        <input type="text" id="name" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">MSV:</label>
                        <input type="text" id="id_stu" class="form-control"/>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="">Avatar:</label>
                        <input type="file" id="avatar" class="form-control"/>
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
            const id_stu = document.querySelector('#id_stu').value;
            const avatar = document.querySelector('#avatar').value;

            const submitData = { name, id_stu, avatar };
            await createStudent(submitData);
            window.location.replace('/students');
        })
    }
}
export default StudentAdd;