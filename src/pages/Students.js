const Student = {
        render: async() => {
                const response = await fetch('https://6291d18f9d159855f08095e4.mockapi.io/students');
                const students = await response.json();

                return `
        <h2 class="text-center" style="margin-bottom: 50px">Sinh Viên</h2>
        <div class="row">
            ${students.map((stu) => (
                `<div class="col-3" style="max-width:322px;">
                    <p>Mã Sinh Viên: ${stu.id_stu}</p>
                    <p>Tên Sinh Viên: ${stu.name}</p>
                </div>
                `
            )).join('')}
        </div>
        `
    }
}

export default Student;