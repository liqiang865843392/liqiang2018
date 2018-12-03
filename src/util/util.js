//获取cookie、
export function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
  let exdate = new Date();
  exdate.setTime(exdate.getTime() + expiredays);
  document.cookie = c_name + "=" + encodeURI(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie (name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};


//获取当前时间，格式YYYY-MM-DD
export function getNowFormatDate() {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

//获取当月最后一天，格式YYYY-MM-DD
export function getEndDate() {
  let date = new Date();let y = date.getFullYear();let m = date.getMonth();
  let lastDay = new Date(y, m + 1, 0);
  let y1 = lastDay.getFullYear();let m1 = lastDay.getMonth()+1;
  let seperator1 = "-";
  let d1 = lastDay.getDate();
  if (m1 >= 1 && m1 <= 9) {
    m1 = "0" + m1;
  }
  if (d1 >= 0 && d1 <= 9) {
    d1 = "0" + d1;
  }
  let lastdate = y1 + seperator1 + m1 + seperator1 + d1;
  return lastdate;
}

//生成一个随机数
export function RndNum(n){
    let rnd="";
    for(let i=0;i<n;i++)
        rnd+=Math.floor(Math.random()*10);
    return rnd;
}