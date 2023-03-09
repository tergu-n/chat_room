/**
 * 改变字符串特定字符的颜色
 * 将返回值赋值给 dom 元素 innerHTML 属性
 * names[i].innerHTML = replaceHandle(names[i].innerText, searchStr);
 * @param parentStr
 * @param searchStr
 */
export function replaceHandle (parentStr: string, searchStr: string) {
    // let exp = new RegExp(`${searchStr}`, 'g');
    // let res = parentStr.replace(exp, "<span style='color: #4aaaff'>" + searchStr + "</span>");
    // return res;
    if (searchStr.length === 0) {
        return "<span style='color: #272832'>" + parentStr + "</span>";
    } else {
        let exp = new RegExp(`${searchStr}`, 'g');
        let res = parentStr.replace(exp, "<span style='color: #4aaaff'>" + searchStr + "</span>");
        return res;
    }
}
