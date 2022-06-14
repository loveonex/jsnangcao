import NavAdmin from "./NavAdmin";
const ContentAdmin = {
    render: async(id, content) =>
        `
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a class="ripple d-flex justify-content-center" href="/" data-mdb-ripple-color="primary" style="text-align:right">
                    <img id="MDB-logo" src="https://caodang.fpt.edu.vn/wp-content/uploads/photo.jpg" width="100px" alt="MDB Logo" draggable="false">
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <h2 class="text-center">Dashboard</h2>
            </div>

            <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="dropdown">
                    <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="/admin" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                        <li>
                            <a class="dropdown-item" href="#">My profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
    </nav>
    <div class="row">
        ${NavAdmin.render()}
        <div class="justify-content-center col-9">
        ${await content.render(id)}
        </div>
    </div>
        `
}
export default ContentAdmin;