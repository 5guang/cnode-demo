<template>
  <header class="cnode_header">
    <div v-show="isShowGoBack" class="cnode_header-goBack" @click="toGoBack">
      <span class="cnode_header-goBack--arrow"></span>
    </div>
    <div class="cnode_header--go_home">
      <h1 class="cnode_header--go_home-text">CNODE</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nv-header',
  data() {
    return {
      menu: [
        { label: '01', value: '全部' },
        { label: '02', value: '精华' },
        { label: '03', value: '分享' },
        { label: '04', value: '问答' },
        { label: '05', value: '招聘' }
      ]
    };
  },
  props: {
    isShowGoBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toGoBack() {
      this.$emit('toGoBack');
    }
  }
};
</script>

<style lang="less" scoped>
@height: 1rem;
@border-color: #dbdbdb;
.cnode_header {
  display: block;
  width: 100%;
  height: @height;
  border-bottom: 1px solid @border-color;
  background-color: rgb(68, 68, 68);
  background-size: contain;
  position: relative;
  top: 0;
  left: 0;
  box-shadow: 0 1px #e8e8e8;
  &-goBack {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    &--arrow {
      width: 0.25rem;
      height: 0.25rem;
      display: inline-block;
      border: 2px solid #ccc;
      transform: rotate(45deg) translateY(-50%);
      border-right: none;
      border-top: none;
      position: absolute;
      top: 50%;
      left: 5%;
    }
  }
  &--go_home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-text {
      color: #5f99b1;
      font-size: .5rem;
      font-family: Comic Sans MS;
    }
  }
}
</style>



