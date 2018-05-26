<template>
    <section class="cnode-load">
        <div class="loadEffect"> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
        </div>
        <div class="model"></div>
    </section>
</template>

<script>
export default {
  name: 'nv-loding',
};
</script>

<style lang="less" scoped>
.cnode-load{
  width: 100%;
  position: fixed;
  top:50%;
  // left: 40%;
  margin: 0 auto;
}
.model{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background: #fff;
  z-index: 98;
  width: 100%;
  height: 100%;
}
.loadEffect {
  width: 1rem;
  height: 1rem;
  position: relative;
  margin: 0 auto;
  z-index: 100;
}
.loadEffect span {
  display: inline-block;
  width: .16rem;
  height: .16rem;
  border-radius: 50%;
  background: rgb(51, 56, 51);
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -.08rem;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: .14rem;
  top: .14rem;
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -.08rem;
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: .14rem;
  right: .14rem;
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -.08rem;
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: .14rem;
  bottom: .14rem;
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -.08rem;
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: .14rem;
  left: .14rem;
  -webkit-animation-delay: 1.04s;
}
</style>

