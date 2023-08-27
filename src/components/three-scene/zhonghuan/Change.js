// const console = {
//   log: () => { }
// }

// import bus from "../../../utils/bus.js";
import bus from "../../../lib/bus";
import * as THREE from "three";
import { webLineDomMap, lineArray } from './const'
let Bus = bus;
const fn = (runScene, inputData = {}, constant = {}) => {

  const fn = (map) => {
    const {
      runScene,
      Utils,
      store,
      core,
      getModel,
      constant,
      bus,
      Three,
      camera,
      scene,
      controls,
      renderer,
    } = map;

    // 场景刷新
    const reflash = () => {
      runScene.sceneEx.aotuOpenUpdate();
    };

    const { } = constant;

    // 场景初始化
    class InitScene {
      name = "initScene";
      mounted() {
        // 脚本
        runScene.script.playAll();
        // 入场动画
        runScene.cameraEx.setTemp("厂区全景", { time: 2 });
        // 初始化
        this.init();
      }

      // 初始化
      init() {
      }

      // 蓝图功能
      blueprintFn(name) {
        runScene.graph.runCustom(name);
      }
      // 快照
      snapShotFn(name) {
        // 快照
        runScene.snapshot.set(name);
        // 视角
        runScene.cameraEx.setTemp(name, { time: 1 });
      }
    }

    // 快照
    class SnapShotFn {
      name = "snapShotFn";

      lastSnapShot = "";

      mounted() {
        // 快照
        Bus.$on("snapshot", this.snapShot.bind(this));
      }

      // 快照
      snapShot(name) {
        // 快照
        runScene.snapshot.set(name);
      }
    }

    // 边框
    class Border {
      name = "border";

      borderMap = {
        换位工序1: "hwgx01",
        换位工序2: "hwgx02",
        换位工序3: "hwgx03",
        产线01: "HW01_gq",
        产线02: "HW02_gq",
        产线03: "HW03_gq",
        产线04: "HW04_gq",
        产线05: "HW05_gq",
        产线06: "HW06_gq",
        产线07: "HW07_gq",
        产线08: "HW08_gq",
        产线09: "HW09_gq",
        产线10: "HW10_gq",
        产线11: "HW11_gq",
        产线12: "HW12_gq",
        产线13: "HW13_gq",
      };

      // 边框模型表
      borderModelMap = {};

      mounted() {
        // 获取模型
        this.getModel();
        // 初始化边框
        this.initBorder(false);
        // bus 选中边框
        Bus.$on("showBorder", this.showBorder.bind(this));
      }

      // 获取模型
      getModel() {
        Object.keys(this.borderMap).map((spriteName) => {
          const borderName = this.borderMap[spriteName];
          this.borderModelMap[spriteName] = null;
          this.borderModelMap[spriteName] = getModel(borderName);
        });
      }

      // 初始化边框
      initBorder(isShow) {
        Object.keys(this.borderModelMap).map((spriteName) => {
          const m = this.borderModelMap[spriteName];
          m.visible = isShow;
        });
      }

      // 选中边框
      showBorder(showName) {
        Object.keys(this.borderModelMap).map((spriteName) => {
          const m = this.borderModelMap[spriteName];
          if (showName === spriteName) {
            m.visible = true;
          } else {
            m.visible = false;
          }
        });
      }

      // 边框返回上层
      borderBackToUp(level) {
        Object.keys(this.borderModelMap).map((spriteName) => {
          const m = this.borderModelMap[spriteName];
          // 最外面 全部隐藏
          if (level === 1) {
            m.visible = false;
          } else if (level === 2) {
            // 第二层 只显示选中的
            if (spriteName.includes("换位工序")) {
              if (core.sprite.selectArea === spriteName) {
                m.visible = true;
              }
            }
            else {
              m.visible = false
            }
          }
        });
      }
    }

    // 看板
    class Sprite {
      name = "sprite";
      // 相机位置的映射表
      cameraPositionMap = {
        换位工序1: { m: null },
        换位工序2: { m: null },
        换位工序3: { m: null },
        产线01: { m: null },
        产线02: { m: null },
        产线03: { m: null },
        产线04: { m: null },
        产线05: { m: null },
        产线06: { m: null },
        产线07: { m: null },
        产线08: { m: null },
        产线09: { m: null },
        产线10: { m: null },
        产线11: { m: null },
        产线12: { m: null },
        产线13: { m: null },
      };
      // 可以被点击的标牌
      clickModel = {
        '换位工序1': "换位工序1点击",
        '换位工序2': "换位工序2点击",
        '换位工序3': "换位工序3点击",
      }

      areaProduceLineMap = {
        换位工序1: [
          "产线01",
          "产线02",
          "产线03",
          "产线04",
          "产线05",
          "产线06",
          "产线07",
        ],
        换位工序2: ["产线08", "产线09", "产线10", "产线11"],
        换位工序3: ["产线12", "产线13"],
      };
      // 层级
      level = 1;
      // 区域
      selectArea = null;
      // 产线
      selectProductLine = null;

      mounted() {
        this.getModel();
        // 前端选中的层级
        Bus.$on("scene-setLevel", this.setLevel.bind(this));
        //前端发给3d切换区域
        Bus.$on("scene-setArea", this.setArea.bind(this));
        //前端发给3d切换产线
        Bus.$on("scene-setProductLine", this.setProductLine.bind(this));
      }

      // 3d点击 精灵图---总入口******
      clickSpriteFn(name) {
        if (!core.events.cameraPositionMap[name]) return;

        // 区域  名称
        const cameraName = core.events.cameraPositionMap[name];

        // 只隐藏对应的区域 不隐藏产线
        if (cameraName.includes("换位工序")) this.showSprite(cameraName, false);

        // 修改选中的层级
        this.changeLevel(cameraName);
      }


      // 3d选中 看板总入口 *****
      changeLevel(name) {
        // 第一层
        if (name.includes("换位工序")) {
          this.level = 2;
          // 选中 大区域
          this.changeSelectedArea(name);
        } else if (name.includes("产线")) {
          // 第二层
          this.level = 3;
          // 选中 产线
          this.changeSelectedProduceLine(name);
        }

        // 设置当前的层次
        Bus.$emit("changeLevel-status", this.level);
        // 当前层级
      }

      // 选中区域
      changeSelectedArea(areaName) {
        // 更新web 页面上选中的区域
        Bus.$emit("changeSelectedArea", areaName);
        // 更新选中区域
        this.selectArea = areaName;
        // 3d场景 选中区域的事件
        this.setArea(areaName);
      }

      // 选中的产线
      changeSelectedProduceLine(lineName) {
        // 更新web 页面上选中的产线
        Bus.$emit("changeSelectedProduceLine", lineName);
        // 更新选中产线
        this.selectProductLine = lineName;
        // 3d场景 选中产线的事件
        this.setProductLine(lineName);

        // 选中后展示对应的 产线dom
        core.domSprite.showCurrentLineSprite(lineName)
      }

      // 获取模型
      getModel() {
        Object.keys(this.cameraPositionMap).map((key) => {
          const model = getModel(key);
          this.cameraPositionMap[key].m = model;
        });
      }

      // 显示隐藏 精灵图
      showSprite(name, isShow) {
        if (!this.cameraPositionMap[name]) return;
        const { m } = this.cameraPositionMap[name];
        // 看板 模型
        m.visible = isShow;

        // 点击的看板模型
        getModel(this.clickModel[name]).visible = isShow;
      }

      // 设置选中的层级
      setLevel(level) {
        console.log('前端选中的level', level);
        // 视角
        this.angeleBackToUp(level);
        // 精灵图
        this.spriteBackToUp(level);
        // 边框
        core.border.borderBackToUp(level);
        // 2d转dom
        core.domSprite.domSpriteFn(level);
      }

      // 前端选中的  区域
      setArea(area) {
        // 选中区域之前清空之前显示的产线dom
        core.domSprite.showAllLineSprite(false);
        // 更新选中的区域
        this.selectArea = area;
        // 隐藏对应的区域标牌
        core.sprite.showOneSprite(area);
        // 聚焦 事件
        core.camera.cameraAnima(area);
        // 显示对应的边框
        core.border.showBorder(area);

      }

      // 前端选中的  产线
      setProductLine(line) {
        this.selectProductLine = line;
        // 聚焦 事件
        core.camera.cameraAnima(line);
        // 显示对应的边框
        core.border.showBorder(line);

        // 显示对应产线的看板信息
        core.domSprite.showCurrentLineSprite(line)
      }

      // 视角返回
      angeleBackToUp(level) {
        this.level = level;
        // 第一曾 选择区域
        if (level === 2) {
          // 清空选中的产线
          this.selectProductLine = null;
          Bus.$emit("camera-anima", this.selectArea);
        } else if (level === 1) {
          // 返回 总的视角
          Bus.$emit("camera-anima", "生产管理");
          // 清空选中的区域
          this.selectArea = null;
        }
      }

      // 模型显示隐藏返回
      spriteBackToUp(level) {
        Object.keys(this.cameraPositionMap).map((key) => {
          const { m } = this.cameraPositionMap[key];
          const name = m.name;
          if (level === 1) {
            // 普通的看板
            m.visible = true;
            // 点击的看牌模型
            if (name.includes('换位工序')) {
              getModel(this.clickModel[name]).visible = true;
            }
          } else if (level === 2) {
            if (this.areaProduceLineMap[this.selectArea].includes(name)) {
              m.visible = true;
            }
          }
        });
      }

      // 只单独显示一个 区域标牌
      showOneSprite(area) {
        // 循环区域的
        Object.keys(this.cameraPositionMap).forEach((areaName) => {
          if (areaName.includes('换位工序')) {
            const { m } = this.cameraPositionMap[areaName];

            if (area === areaName) {
              m.visible = false;
              // 看牌
              getModel(this.clickModel[areaName]).visible = false;

              // console.log('应该关闭的这个:', areaName, getModel(this.clickModel[area]));
            } else {
              m.visible = true;
              // 看牌
              getModel(this.clickModel[areaName]).visible = true;

              // console.log('开启这个 ', areaName);
            }
          }

        });
      }
    }

    // 添加的2dDom
    class DomSprite {
      name = 'domSprite';
      // 产线模型表
      lineModelMap = {}

      mounted() {
        // 初始化
        // this.init()

        // 获取模型表
        this.getModel()

        // 添加2d dom
        this.addDom();

        // 默认关闭显示的看板
        this.showAllLineSprite(false)

        console.log(this.lineModelMap, 'this.lineModelMap');
      }

      // 初始化
      init() {
        let a = {}
        let b = {}
        let c = []
        getModel('points').children.forEach((p) => {
          const name = p.name;
          a[name] = {}
          b[name] = []
          p?.children.forEach((s) => {
            const name = s.name
            a[p.name][s.name] = { name }
            b[p.name].push(name)
            c.push(name)
          })
        })
        // console.log(a, 'aaa');
        // console.log(JSON.stringify(b), 'bbb');
        console.log(JSON.stringify(c), 'cc');
      }

      // 获取模型表
      getModel() {
        getModel('points').children.forEach((parent) => {
          const name = parent.name;
          this.lineModelMap[name] = {}
        })
      }

      // 添加dom
      addDom() {
        lineArray.map(async (lineName) => {
          const num = lineName.indexOf('_');
          const lineNum = lineName.substring(0, num);
          const dom = document.querySelector(`.lineInfo_${lineName}`);
          const m = getModel(lineName);
          if (!dom || !m) return;
          let sprite = Utils.domTo2Dui(dom);
          sprite.name = `${lineName}_sprite`;
          m.add(sprite);

          // 将dom模型放入到对应的表里
          Object.keys(this.lineModelMap).map((linePoint) => {
            if (linePoint.includes(lineNum)) {
              this.lineModelMap[linePoint][lineName] = sprite
            }
          })

        });
      }

      // 显示对应的产线看板
      showCurrentLineSprite(lineName) {
        const EnglishName = lineName.replace('产线', 'HW')
        Object.keys(this.lineModelMap).map((everyLine) => {
          const allLineModel = this.lineModelMap[everyLine]
          // 只显示选中对应产线的dom
          if (everyLine.includes(EnglishName)) {
            Object.values(allLineModel).map((m) => {
              m.visible = true
            })
          } else {
            Object.values(allLineModel).map((m) => m.visible = false)
          }
        })
      }

      // 关闭 开启 所有 对应的产线看板
      showAllLineSprite(isShow = false) {
        Object.keys(this.lineModelMap).map((everyLine) => {
          const allLineModel = this.lineModelMap[everyLine]
          Object.values(allLineModel).map((m) => m.visible = isShow)
        })
      }

      // 切换 层级发生的事情
      domSpriteFn(level) {
        // 第一层和第二层都是隐藏的
        if (level === 1 || level === 2) {
          this.showAllLineSprite(false);
        }

      }

    }

    // 相机视角
    class Camera {
      name = "camera";
      mounted() {
        //相机动画
        Bus.$on("camera-anima", this.cameraAnima.bind(this));
      }

      // 相机动画
      cameraAnima(place) {
        runScene.cameraEx.setTemp(place, { time: 1 });
      }
    }

    // 基本事件
    class Events {
      name = "events";

      clickModel = null;

      isRunning = true;

      lastClickModel = null;

      cameraPositionMap = {
        换位工序1点击: "换位工序1",
        换位工序2点击: "换位工序2",
        换位工序3点击: "换位工序3",
        产线01: "产线01",
        产线02: "产线02",
        产线03: "产线03",
        产线04: "产线04",
        产线05: "产线05",
        产线06: "产线06",
        产线07: "产线07",
        产线08: "产线08",
        产线09: "产线09",
        产线10: "产线10",
        产线11: "产线11",
        产线12: "产线12",
        产线13: "产线13",
      };

      constructor() {
        runScene.cb.model.click.add(
          "trigger-click",
          this.triggerClick.bind(this)
        );

        //setSelect
      }

      // 防抖 点击次数过多
      myDebounce(fn, delay) {
        let timer = null; // 创建一个用来存放定时器的变量
        return function () {
          clearTimeout(timer); //只要触发就清除
          timer = setTimeout(() => {
            fn.apply(this, arguments);
          }, delay);
        };
      }

      triggerClick = (model) => {
        if (!model) return;

        // 点击事件
        this.clickSprite(model);

        this.lastClickModel = model;

        // console.log('点击的模型', model, '-----');
      };

      // 点击事件
      clickSprite(model) {
        const name = model.name;

        // 相机视角
        this.cameraAngle(name);

        // 看板点击的事件
        core.sprite.clickSpriteFn(name);
      }

      cameraAngle(name) {
        if (!this.cameraPositionMap[name]) return;
        const cameraName = this.cameraPositionMap[name];
        Bus.$emit("camera-anima", cameraName);
      }

      // 3d坐标转2位坐标
      get2DVec(map) {
        const { camera, model, outDom } = map;
        const { clientWidth, clientHeight } = outDom;
        const halfWidth = clientWidth / 2;
        const halfHeight = clientHeight / 2;
        const camPos = new Three.Vector3();
        const camDir = new Three.Vector3();
        camera.getWorldPosition(camPos);
        camera.getWorldDirection(camDir);
        const objPos = new Three.Vector3();
        model.updateMatrixWorld();
        objPos.setFromMatrixPosition(model.matrixWorld);
        const ndcPos = objPos.clone();
        ndcPos.project(camera);
        const objDir = new Three.Vector3();
        objDir.subVectors(objPos, camPos);
        objDir.normalize();
        const dotValue = camDir.dot(objDir);
        const sign = dotValue > 0 ? 1 : -1;
        const left = (1 + sign * ndcPos.x) * halfWidth;
        const top = (1 - sign * ndcPos.y) * halfHeight;
        return {
          left,
          top,
        };
      }

      // 3d坐标转2位坐标
      get2DVec(map) {
        const { camera, model, outDom } = map;
        const { clientWidth, clientHeight } = outDom;
        const halfWidth = clientWidth / 2;
        const halfHeight = clientHeight / 2;
        const camPos = new Three.Vector3();
        const camDir = new Three.Vector3();
        camera.getWorldPosition(camPos);
        camera.getWorldDirection(camDir);
        const objPos = new Three.Vector3();
        model.updateMatrixWorld();
        objPos.setFromMatrixPosition(model.matrixWorld);
        const ndcPos = objPos.clone();
        ndcPos.project(camera);
        const objDir = new Three.Vector3();
        objDir.subVectors(objPos, camPos);
        objDir.normalize();
        const dotValue = camDir.dot(objDir);
        const sign = dotValue > 0 ? 1 : -1;
        const left = (1 + sign * ndcPos.x) * halfWidth;
        const top = (1 - sign * ndcPos.y) * halfHeight;
        return {
          left,
          top,
        };
      }

      getXy(model) {
        const map = { outDom: document.querySelector("#app"), model, camera };

        const { left: x, top: y } = this.get2DVec(map);

        const ps = { x, y };

        return ps;
      }

      dispose() {
        controls.removeEventListener("start", this.controlStart);
      }
    }

    return [Events, SnapShotFn, InitScene, Camera, Sprite, Border, DomSprite];
  };

  const modules = fn({
    runScene,
    getModel: runScene.modelEx.getModel.bind(runScene.modelEx),
    core: runScene.custom,
    ...runScene.assetsEx.get(),
    ...inputData,
    constant,
    window: null,
  });

  if (!modules) return;

  modules
    .map((TheClass) => {
      const ins = new TheClass();
      if (!ins.name) throw TypeError("代码出错");
      runScene.custom[ins.name] = ins;
      return ins;
    })
    .map((ins) => ins?.mounted?.());
};
export { fn };
