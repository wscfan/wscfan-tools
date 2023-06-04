function formatSigleNum(n) {
  return n >= 10 ? "" + n : "0" + n;
}

/**
 * 获取当前时间的字符串
 * @returns 格式化后的当前时间
 */
export function formatNow() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  month = formatSigleNum(month);
  let day = now.getDate();
  day = formatSigleNum(day);
  let hour = now.getHours();
  hour = formatSigleNum(hour);
  let minute = now.getMinutes();
  minute = formatSigleNum(minute);
  let second = now.getSeconds();
  second = formatSigleNum(second);
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

/**
 * 将时长格式化成字符串
 * @param {number} duration 时长
 * @returns 格式化后的时长
 */
export function formatDuration(duration) {
  if (!duration) return "";
  let minute = Math.floor(duration / 60);
  minute = formatSigleNum(minute);
  let second = duration % 60;
  second = formatSigleNum(second);
  return `${minute}′${second}″`;
}

// 创建文本输入框
function createElement(text) {
  var isRTL = document.documentElement.getAttribute("dir") === "rtl";
  var element = document.createElement("textarea");
  // 防止在ios中产生缩放效果
  element.style.fontSize = "12pt";
  // 重置盒模型
  element.style.border = "0";
  element.style.padding = "0";
  element.style.margin = "0";
  // 将元素移到屏幕外
  element.style.position = "absolute";
  element.style[isRTL ? "right" : "left"] = "-9999px";
  // 移动元素到页面底部
  let yPosition = window.pageYOffset || document.documentElement.scrollTop;
  element.style.top = `${yPosition}px`;
  //设置元素只读
  element.setAttribute("readonly", "");
  element.value = text;
  document.body.appendChild(element);
  return element;
}

/**
 * 复制文本到剪切板
 * @param {string} text 需要复制的文本
 * @param {function} cb 复制成功后回调函数
 */
export function copyText(text, cb) {
  if (navigator.clipboard) {
    // 如果浏览器支持 clipboard api
    navigator.clipboard.writeText(text).then((res) => {
      console.log("使用clipboard复制成功");
      cb && cb();
    });
  } else {
    var element = createElement(text);
    element.select();
    element.setSelectionRange(0, element.value.length);
    document.execCommand("copy");
    element.remove();
    console.log("使用 execCommand copy 复制成功");
    cb && cb();
  }
}

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
