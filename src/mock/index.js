/**
 * @description 自动化mock
 */

const componentsContext = require.context("./", true, /.js$/)

if(process.env.VUE_APP_BASE_IS_MOCK){
    componentsContext.keys().forEach(component => {
       componentsContext(component)
    })
}
