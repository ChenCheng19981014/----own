import Cookies from "js-cookie";


/**
 * @description 公用工具类
 */

/**
 * @description 下载文件
 */
export const downloadFile = (fileUrl, fileName) => {
  const a = document.createElement("a")
  a.style.display = 'none'
  a.setAttribute("target", "_blank")
  a.setAttribute("download", fileName)
  a.href = fileUrl
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}


/**
 * @description 获取token
 * @returns {String} token值 
 */
export const getToken = () => localStorage.getItem("token");

/**
 * @description 设置token
 * @param {String} token token值 
 */
export const setToken = (token = "") => localStorage.setItem("token", token);


/**
 * @description 获取本地cookie
 * @param {String} name  Cookie key
 * @returns {String} Cookie值
 */
export const getCookie = (name) => Cookies.get(name);


/**
 * @description 数字千分位转换
 * @param {Number|String} num 被转换的数字
 * @param {String} separator 千分位转换替代符
 * @returns {String} 数字千分位转换值
 */
export const numberTranslateThousandth = (num, separator = ",") => {
  num += ""
  return num.replace(/\d/g, function () {
    if ((num.length - arguments[1] - 1) % 3 === 0 && num.length - 1 !== arguments[1]) {
      return arguments[0] + separator
    } else {
      return arguments[0]
    }
  })

}

export const isFish=()=>{
  return (document.body.offsetWidth/window.innerHeight)>3
}



export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}