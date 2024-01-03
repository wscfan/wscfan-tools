function formatSigleNum(n) {
  return n >= 10 ? "" + n : "0" + n;
}

/**
 * 获取当前时间的字符串
 * @returns 格式化后的当前时间
 */
export function formatNow() {
  let now = new Date();
  let year: number | string = now.getFullYear();
  let month: number | string = now.getMonth() + 1;
  month = formatSigleNum(month);
  let day: number | string = now.getDate();
  day = formatSigleNum(day);
  let hour: number | string = now.getHours();
  hour = formatSigleNum(hour);
  let minute: number | string = now.getMinutes();
  minute = formatSigleNum(minute);
  let second: number | string = now.getSeconds();
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
  let minute: number | string = Math.floor(duration / 60);
  minute = formatSigleNum(minute);
  let second: number | string = duration % 60;
  second = formatSigleNum(second);
  return `${minute}′${second}″`;
}
