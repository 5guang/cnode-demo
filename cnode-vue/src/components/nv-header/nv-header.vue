<template>
  <header class="cnode_header">
    <div v-show="isShowGoBack" class="cnode_header-goBack" @click="toGoBack">
      <span class="cnode_header-goBack--arrow"></span>
    </div>
    <div class="cnode_header--go_home">
      <h1 class="cnode_header--go_home-text">CNODE</h1>
    </div>
    <div class="cnode_header--login">
      <img :src="home.personalInfo.avatar_url" class="loginImg" v-if="home.token">
      <span @click="openLogin" class="cnode_header--login-text">{{home.personalInfo.loginname}}</span>
      <!-- <p class="cnode_header--login-text">个人中心</p> -->
    </div>

   <div class="cnode_login-wrap" v-show="isShowLogin">
     <section class="cnode_login" >
       <div>
         <input type="text" v-model="accessToken"  placeholder="请输入accessToken" >
       </div>
       <div>
         <button @click="login">确定</button>
       </div>
     </section>
   </div>
    <div class="maskLazy" v-show="isShowLogin" @click="isShowLogin = false"></div>
  </header>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { loginApi } from '@/api';
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
        ],
        accessToken: '',
        isShowLogin: false,
      };
    },
    computed: {
      ...mapState([
        'home'
      ]),
    },
    props: {
      isShowGoBack: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      ...mapMutations([
        'SAVE_TOKEN',
        'SAVE_PERSONAL_INFO',
      ]),
      toGoBack() {
        this.$emit('toGoBack');
      },
      login() {
        if (!this.accessToken) return;
        const body = {
          accesstoken: this.accessToken, // eef85f0b-96de-427d-b7b3-b403c55ab803
        };
        loginApi('',body).then((res) => {
          if (res.data.success) {
            this['SAVE_TOKEN'](body.accesstoken);
            this['SAVE_PERSONAL_INFO'](res.data);
            this.isShowLogin = false;
          }
        }).catch(err => {
          alert('请输入正确的accessToken');
          this.accessToken = '';
        })
      },
      openLogin() {
        if (this.home.token) {
          console.log(this.home.token);
        } else {
          this.isShowLogin = true;
        }
      },
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
  &--login{
    position: absolute;
    right: 5%;
    top:20%;
    &-text{
      font-size: .25rem;
      color: rgb(210, 214, 205);
    }
  }
}
  .loginImg{
    width: .6rem;
    height: .6rem;
    vertical-align:middle;
    border-radius: .1rem;
  }
  .cnode_login{
    padding-top: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      padding: .03rem 0;
      border: 1px solid #b3b3b3;
      border-radius: 4px;
      line-height: 1.9;
      text-indent: .125rem;
      width: 5.5rem;
    }
    button {
      margin-top: .2rem;
      display: inline-block;
      width: 3rem;
      padding: .05rem;
      color: #ffffff;
      border:0px;
      background: #e63322;
      text-align: center;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      border-radius: 5px;
    }
  }
  .cnode_login-wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    width: 85%;
    border-radius: .2rem;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: .2s;
    height: 2rem;
    z-index: 100;
  }
  .maskLazy{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0, .5);
    z-index: 99;
    width: 100%;
    height: 100%;
  }
</style>



