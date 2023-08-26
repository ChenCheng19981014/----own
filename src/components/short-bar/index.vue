<style lang="scss" scoped>
.short-bar {
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  .bar-item {
    width: 120px;
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #a5d8fc;

      text-align: center;
      margin-bottom: 8px;
    }
    .bar-main {
      display: flex;
      justify-content: space-between;
      .bar-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .bar {
          width: 20px;
          height: 18px;
          margin: 0 auto;
          margin-top: 4px;
          margin-bottom: 4px;
        }
        .bar-value {
          text-align: center;
          font-size: 12px;
        }
        .bar-title {
          font-size: 12px;
          color: #a5d8fc;
          text-align: center;
        }
      }
      .bar-item:nth-child(1) {
        .bar {
          background: rgba(0, 120, 255, 1);
        }
        .bar-value {
          color: rgba(0, 120, 255, 1);
        }
      }
      .bar-item:nth-child(2) {
        .bar {
          background: #03afca;
        }
        .bar-value {
          color: #03afca;
        }
      }
    }
  }
}
</style>

<template>
  <div class="short-bar">
    <div class="bar-item">
      <div class="title">{{ leftTitle }}</div>
      <div class="bar-main">
        <div class="bar-item" v-for="item of left" :key="item.name">
          <div class="bar-value">{{ item.value }}</div>
          <div
            class="bar"
            :style="`height:${(item.value / getLeftAll) * 14}px`"
          ></div>
          <div class="bar-title">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="bar-item">
      <div class="title">{{ rightTitle }}</div>
      <div class="bar-main">
        <div class="bar-item" v-for="item of right" :key="item.name">
          <div class="bar-value">{{ item.value }}</div>
          <div
            class="bar"
            :style="`height:${(item.value / getRightAll) * 14}px`"
          ></div>
          <div class="bar-title">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "short-bar",
  props: {
    leftTitle: String,
    rightTitle: String,
    left: {
      type: Array,
    },
    right: {
      type: Array,
    },
  },
  computed: {
    getLeftAll() {
      let max = 0.01;
      this.left.map((e) => {
        if (e.value > max) {
          max = e.value;
        }
      });
      return max;
    },
    getRightAll() {
      let max = 0.01;
      this.right.map((e) => {
        if (e.value > max) {
          max = e.value;
        }
      });
      return max;
    },
  },
};
</script>