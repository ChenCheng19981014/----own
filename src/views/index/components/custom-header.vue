<style lang="scss" scoped>
.custom-header {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 127px;
  overflow: hidden;
  background-size: 100% 100%;
  background-image: url("../../../assets/common/header.png");
  .title {
    font-family: "hxb";
    margin-top: 28px;
    margin-left: 68px;
    font-size: 40px;
    color: #fff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  }
  .right {
    position: absolute;
    right: 30px;
    top: 10px;
    display: flex;
    font-size: 14px;
    align-items: center;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

    .time {
      margin-left: 16px;
    }
    .date {
      margin-left: 16px;
    }
    .tempture {
      margin-left: 8px;
    }

    .tempture-icon {
      margin-right: 16px;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
      }
    }
    .line {
      margin-left: 24px;
      margin-right: 24px;
      width: 1px;
      height: 12px;
      opacity: 0.8;
      background: white;
    }
  }
  .menu {
    position: absolute;
    left: 512px;
    bottom: 27px;
    display: flex;
    .menu-item {
      width: 206px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      background-size: 100% 100%;
      background-image: url("../../../assets/common/menu-button.png");
      .text {
        font-size: 20px;
        opacity: 0.8;
      }
      &:hover {
        background-image: url("../../../assets/common/menu-button-hover.png");
        .text {
          font-weight: bold;
          opacity: 1;
        }
        .icon {
          opacity: 1;
        }
        // background: red;
      }
    }
    .menu-item:nth-child(2) {
      position: relative;
      left: -28px;
    }

    .menu-item:nth-child(3) {
      position: relative;
      left: -56px;
    }

    .menu-item:nth-child(4) {
      position: relative;
      left: -84px;
    }
    .icon {
      display: flex;
      align-items: center;
      margin-right: 12px;
      width: 32px;
      opacity: 0.8;
    }
    #active {
      z-index: 2;
      background-image: url("../../../assets/common/menu-button-active.png");
      .text {
        font-weight: bold;

        opacity: 1;
      }
      .icon {
        opacity: 1;
      }
    }
  }

  .title {
    width: 334px;
    height: 45px;
    background-image: url("../../../assets/common/title.png");
    background-size: cover;
  }
}
</style>

<template>
  <div class="custom-header">
    <div class="title"></div>
    <div class="right">
      <div class="tempture-icon">
        <img :src="temptureIcon" alt="" />
      </div>
      <div class="tempture">{{ tempture }}</div>
      <div class="line"></div>
      <div class="time">{{ time }}</div>
      <div class="date">{{ date }}</div>
    </div>
    <div class="menu">
      <div
        class="menu-item"
        v-for="item of routes"
        :key="item.name"
        :id="$route.name == item.name ? 'active' : ''"
        @click="linkTo(item.name)"
      >
        <div class="icon" v-html="item.meta.icon"></div>
        <div class="text">{{ item.meta.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import routes from "@/router/routes";

import moment from "moment";
export default {
  created() {
    this.loadTime();
    this.loadTempture();
  },
  data() {
    return {
      routes: routes[0].children,
      date: "",
      time: "",
      tempture: "",
      temptureType: "",
    };
  },
  computed: {
    temptureIcon() {
      return (
        process.env.VUE_APP_BASE_ASSETS +
        "assets/images/weather/" +
        this.temptureType +
        ".svg"
      );
    },
  },
  methods: {
    linkTo(name) {
      this.$router.push({ name });
    },
    loadTime() {
      this.date = moment().format("YYYY-MM-DD");
      this.time = moment().format("HH:mm:ss");
      setTimeout(() => {
        this.loadTime();
      }, 1000);
    },
    loadTempture() {
      this.tempture = "27°C";
      this.temptureType = "下雨";
    },
  },
};
</script>
