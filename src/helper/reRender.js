import Header from "../components/Header";
import Footer from "../components/Footer";
export const reRender = async(content, id) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#content").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();


    if (content.afterRender) {
        content.afterRender();
    }

}