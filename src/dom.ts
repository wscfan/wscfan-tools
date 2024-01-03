/**
 * 将数据对象渲染成DOM元素
 * @param {object} obj 树形结构的数据对象 {tag: "div", children: [{tag: "span", children: "hello world"}]}
 * @param {object} root dom对象
 */
export function render(obj, root) {
  const el = document.createElement(obj.tag);
  if (typeof obj.children === "string") {
    const text = document.createTextNode(obj.children);
    el.appendChild(text);
  } else if (obj.children) {
    // 递归调用render, el作为root参数
    obj.children.forEach((child) => render(child, el));
  }
  // 将元素添加到root
  root.appendChild(el);
}
