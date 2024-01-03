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
