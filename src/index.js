// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navigo from 'navigo';
import Header from "./components/LayoutClient/Header";
import Footer from "./components/LayoutClient/Footer";
import Home from './pages/Client/Home';
import About from './pages/Client/About';
import News from './pages/Client/News';
import Product from './pages/Client/Products';
import ProductDetail from "./pages/Client/ProductDetail";
import CartDetail from "./pages/Client/CartDetail";

import CategoriesList from "./pages/Admin/Categories/List";
import CategoriesEdit from "./pages/Admin/Categories/Edit";
import CategoriesAdd from "./pages/Admin/Categories/Add";

import ProductAdd from "./pages/Admin/Products/Add";
import ProductEdit from "./pages/Admin/Products/Edit";
import ProductList from "./pages/Admin/Products/List";

import ContentAdmin from "./components/LayoutAdmin/ContentAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
// const router = new Navigo('/', { linksSelector: 'a' });
import router from "./helper/router";

export const render = async(Header, Footer, content, id, rule) => {
    if (Header) {
        document.querySelector("#header").innerHTML = await Header.render();
        document.querySelector("#footer").innerHTML = Footer.render();
    }
    document.querySelector("#content").innerHTML = await content.render(id, rule);


    if (content.afterRender) {
        content.afterRender();
    }
    if (rule) {
        if (rule.afterRender) {
            rule.afterRender();
        }
    }

}

router.on({
    '/': () => render(Header, Footer, Home, undefined, undefined),
    '/about': () => render(Header, Footer, About, undefined, undefined),
    '/news': () => render(Header, Footer, News, undefined, undefined),
    '/cart': () => render(Header, Footer, CartDetail, undefined, undefined),

    '/products': () => render(Header, Footer, Product, undefined, undefined),
    '/products/detail/:id': ({ data }) => render(Header, Footer, ProductDetail, data.id, undefined),

    '/categories/:id': ({ data }) => render(Header, Footer, Product, data.id, undefined),


    '/admin': () => render(undefined, undefined, ContentAdmin, undefined, HomeAdmin),

    '/admin/products': () => render(undefined, undefined, ContentAdmin, undefined, ProductList),
    '/admin/products/add': () => render(undefined, undefined, ContentAdmin, undefined, ProductAdd),
    '/admin/products/edit/:id': ({ data }) => render(undefined, undefined, ContentAdmin, data.id, ProductEdit),

    '/admin/categories': () => render(undefined, undefined, ContentAdmin, undefined, CategoriesList),
    '/admin/categories/add': () => render(undefined, undefined, ContentAdmin, undefined, CategoriesAdd),
    '/admin/categories/edit/:id': ({ data }) => render(undefined, undefined, ContentAdmin, data.id, CategoriesEdit)

})

router.resolve();

// const setValueA = () => new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve([1, 2, 3]);
//         } else {
//             reject('bị lỗi');
//         }
//         // a = [1, 2, 3];
//     }, 1000);
// });

// const printA = async() => {
//     const result = await setValueA();
//     console.log('chờ result nhận kết quả rồi mới chạy log này:', result);
//     result.push(4);
//     console.log('sau khi thực hiện push ra kq này:', result);
// }

// printA();