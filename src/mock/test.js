import { mock } from "mockjs"

//测试数据
mock("http://localhost/test",{
    code:200,
    msg:"成功",
    data:"测试数据"
})