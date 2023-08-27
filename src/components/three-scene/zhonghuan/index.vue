<template>
  <div
    class="three-scene-tongli"
    ref="three-scene-tongli"
    onselectstart="return false;"
  >
    <!-- <Load v-show="!loadingEnd"></Load> -->
    <div
      @pointerdown="
        (e) => {
          e.stopPropagation();
        }
      "
      class="btn"
    ></div>

    <div
      v-show="loadingEnd"
      :class="`lineInfo ` + `lineInfo_${item} `"
      v-for="(item, index) in lineArray"
      :key="index + item"
    >
      <div>{{ lineChinseseMap[item] }}</div>
    </div>
  </div>
</template>

<script>
// chang 事件 实例
let sceneChange = null;
// 场景
let scene = null;
import Engine from "run-scene-v2";
import store from "./../../../store/index";
import * as THREE from "three";
import { fn } from "./Change";
// import bus from "../../../utils/bus.js";
import bus from "../../../lib/bus";
import Load from "./../components/load";
import { webLineDomMap, lineArray, lineChinseseMap } from "./const";
const { RunScene, Utils } = Engine;
export default {
  name: "zhongHuan",
  components: {
    Load,
  },
  data() {
    return {
      webLineDomMap: webLineDomMap,
      lineArray: lineArray,
      lineChinseseMap: lineChinseseMap,
      loadingEnd: false,
      path:
        // "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202308221436074679711001202353",
        "./assets/s.lt",
    };
  },
  async mounted() {
    // 加载场景
    this.load();

    // 遮罩
    this.setBgc(scene);
  },

  watch: {
    "$route.path": function(to, from) {
      if (to === "/produce") {
        bus.$emit("snapshot", "厂房关闭");
        bus.$emit("snapshot", "车间启动");
        bus.$emit("camera-anima", "生产管理");
      } else {
        bus.$emit("camera-anima", "厂区全景");
        bus.$emit("snapshot", "厂房启动");
        bus.$emit("snapshot", "车间关闭");
      }
    },
  },
  methods: {
    bus() {},
    // 加载场景
    async load() {
      // 加载场景
      const runScene = await this.loadScene(this.path);

      // 场景加载完回调
      runScene.on("loaded", () => {
        // 自适应
        this.resize(store.state.fitLayoutRatio, scene);

        // changejs
        fn(scene, { Utils, Three: THREE }, {});

        // 结束回调
        this.onDone();
      });
    },

    // 加载场景
    loadScene(path) {
      scene = new RunScene({
        render2: true,
        instance: {
          enable: true,
        },
        renderConfig: {
          // 是否允许设置模型位置后自动渲染最新效果
          matrixAutoUpdate: true,
          scriptFrame: 60,
          event: {
            ignores: ["resize"],
          },
        },
      }).load({
        path: path,
        dom: this.$refs["three-scene-tongli"],
      });

      return scene;
    },

    // 打印点击到的模型
    logClickModel(model) {
      console.log("第二场景点击的模型为:", model.name);
    },

    // 自适应
    resize: (x, runScene) => {
      let map = runScene.assetsEx.engineDom.getBoundingClientRect();
      runScene.setSize(map.width / x, map.height / x);
    },

    async setBgc(runScene) {
      const dom = runScene.assetsEx.engineDom;
      const backgroudDom = document.createElement("div");
      backgroudDom.style.position = "absolute";
      backgroudDom.style.left = "50%";
      backgroudDom.style.top = "50%";
      backgroudDom.style.transform = "translate(-50%,-50%)";
      backgroudDom.style.width = "100%";
      backgroudDom.style.height = "100%";
      dom.appendChild(backgroudDom);
      backgroudDom.style.backgroundRepeat = "no-repeat";
      backgroudDom.style.backgroundSize = "100% 100%";
      backgroudDom.classList.add("bgc");
    },

    // 加载完回调
    onDone() {
      this.loadingEnd = true;

      // 路径
      const path = window.location.hash
        .replace("#", "")
        .replace("/", "")
        .trim();

      if (path === "produce") {
        bus.$emit("snapshot", "厂房关闭");
        bus.$emit("snapshot", "车间启动");
        bus.$emit("camera-anima", "生产管理");
      } else {
        bus.$emit("snapshot", "厂房启动");
        bus.$emit("snapshot", "车间关闭");
      }

      // 挂载bus事件
      this.bus();
    },
  },
  // 场景自带销毁
  destroyed() {
    scene && scene.dispose();
  },
};
</script>

<style lang="scss" scoped>
// 场景
.three-scene-tongli {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: auto;
}

.three-scene-tongli .btn {
  position: absolute;
  z-index: 3;
}

.three-scene-tongli .lineInfo {
  width: 20px;
  height: 20px;
  z-index: 3000000;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}

.three-scene-tongli .show {
  opacity: 1 !important;
}

.three-scene-tongli .block {
  display: block !important;
}

.three-scene-tongli .none {
  display: none;
}

.showOpacity {
  opacity: 1 !important;
}

:deep(.bgc) {
  z-index: 2;
  pointer-events: none;
  // background-image: url("./../../../assets/three-scene/scene-mask.png");
}

:deep(.css2dRenderer) {
  z-index: 2;
  pointer-events: none;
}
</style>
