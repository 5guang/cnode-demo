<template>
    <section class="top_wrap" v-if="isShowTop" @click="toTop">
        <div class="cnode_to_top">
            <span class="cnode_to_top-arrow"></span>
        </div>
    </section>
</template>

<script>
export default {
  name: 'nv-toTop',
  props: {
    isShowTop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toTop() {
      let time = setInterval(() => {
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(time);
        }
        document.documentElement.scrollTop -= 200;
      }, 10);
    }
  }
};
</script>

<style lang="less" scoped>
.top_wrap {
  position: fixed;
  right: 3%;
  bottom: 5%;
  .cnode_to_top {
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid rgb(117, 100, 100);
    border-radius: 25%;
    background: rgba(15, 15, 15, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    &-arrow {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border: 0.03rem solid rgb(246, 247, 248);
      transform: rotate(45deg);
      border-bottom: none;
      border-right: none;
      color:rgb(98, 154, 238);
    }
  }
}
</style>


