/**
 * @description vue状态管理
 */

import store from "vuex"
import Vue from "vue"
import { isFish } from "../utils";

Vue.use(store)


export default new store.Store({
    state: {
        units:{},
        unitsMutiply:{},
        locations:{},
        fish:isFish(),
        showLeft1:true,
        showLeft2:isFish(),
        showRight1:isFish(),
        showRight2:true,
        fitLayoutRatio: 0,
        onChangeRunSceneCallback: {},
        onResizeCallBack: {},
    },
    mutations: {
        setFitLayoutRatio(store, ratio) {
            store.fitLayoutRatio = ratio;
            Object.values(store.onResizeCallBack).map((fn) => fn(ratio));
        },
    },
    actions: {
    }
})


