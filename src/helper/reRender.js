export const reRender = async(elementRender, content, id, rule) => {
    document.querySelector(elementRender).innerHTML = await content.render(id, rule);


    if (content.afterRender) {
        content.afterRender();
    }
    if (rule) {
        if (rule.afterRender) {
            rule.afterRender();
        }
    }
}