/**
 * @description 正则表达式
 */

//邮箱
export const Email=/^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/

//手机号
export const Phone=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

//身份证号
export const ID=/^\d{15}|\d{18}$/

//QQ号
export const QQ=/[1-9][0-9]{4,}/

//中文
export const CN=/[\u4e00-\u9fa5]/
