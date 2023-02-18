function formatSigleNum(n) {
  return n >= 10 ? "" + n : "0" + n;
}

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

console.log(formatNow());