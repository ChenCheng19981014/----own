/**
 * @description vue 路由管理类
 */

import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

import routes from "./routes"

import beforeEach from "./before-each"

let router = new Router({
  routes
})

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

beforeEach(router)

export default router