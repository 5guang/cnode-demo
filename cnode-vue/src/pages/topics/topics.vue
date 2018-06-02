<template>
  <section>
    <nv-header @toGoBack='toGoHome'></nv-header>
    <section class='cnode_details'>
      <div class="cnode_details-title">
        <span class="cnode_details-title--tab" v-show="data.top || data.good">置顶</span><h1 class="cnode_details-title--text" v-text="data.title"></h1>
        <div class="cnode_details-title--changes">
          <span class="cnode_details-title--changes-span">发布于 {{data.create_at | lastActiveTime}}</span>
          <span class="cnode_details-title--changes-span">作者 <span style="color:rgb(98, 154, 238)">{{loginname}}</span></span>
          <span class="cnode_details-title--changes-span">{{data.visit_count}} 次浏览</span>
          <span class="cnode_details-title--changes-span">最后一次编辑是 {{data.last_reply_at | lastActiveTime}}</span>
          <span class="cnode_details-title--changes-span">来自 {{data.tab | menu}}</span>
        </div>
      </div>
      <div class="cnode_details-content" v-html="data.content"></div>
    </section>
    <div class="cnode_reply--count" v-if="data.reply_count > 0">{{data.reply_count}} 回复</div>
    <section class="cnode_reply" v-if="data.reply_count > 0">
      <ul class="cnode_reply-information">
        <li class="cnode_reply-information-content" v-for="(item,index) in data.replies" :key="index">
          <div class="cnode_reply-information-content--top">
            <div class="cnode_reply-information-content--top_left">
              <span class="cnode_reply-information-content--top_left--info">
                <span>{{item.author.loginname}}</span>
                <span>{{index + 1}}楼</span>
                <span>{{item.create_at | lastActiveTime}}</span>
                <span class="cnode_reply-information-content--top_left--info_author" v-if="item.author.loginname === loginname">作者</span>
              </span>
            </div>
            <div class="cnode_reply-information-content--top_right">
              <span class="cnode_reply-information-content--top_right-zan" v-if="item.ups.length > 0" >
                <i class="cnode_reply-information-content--top_right-zan--icon" :class="{'up': uped(item.ups)}" @click="like(item)">赞</i><span>&nbsp {{item.ups.length}}</span>
                <span v-if="home.token">回复</span>
              </span>
            </div>
          </div>
          <span class="cnode_reply-information-content--top_left--avatar">
              <img class="cnode_reply-information-content--top_left--avatar-img" :src="item.author.avatar_url" alt="title">
          </span>
          <div class="cnode_reply-information-content--main" >
            <div v-html="item.content"></div>
          </div>
        </li>
      </ul>
    </section>
    <nv-loding v-show="isShoLoding"></nv-loding>
    <nv-toTop :isShowTop='isShowTop'></nv-toTop>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { topicApi, replyApi } from '@/api/index';

export default {
  data() {
    return {
      data: '',
      loginname: '',
      isShoLoding: false,
      isShowTop: false,
      upOrDown: '',
    };
  },
  computed: {
    ...mapState(['params', 'home']),
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1500) {
          this.isShowTop = true;
        } else {
          this.isShowTop = false;
        }
      });
    });
  },
  created() {
    this.isShoLoding = true;
    this.topicApiServer()
      .then(res => {
        if (res.data.success) {
          setTimeout(() => {
            this.isShoLoding = false;
          }, 500);
          this.data = res.data.data;
          this.loginname = res.data.data.author.loginname;
        }
      })
      .catch(err => {
        this.isShoLoding = false;
        console.error(err);
      });
  },
  methods: {
    topicApiServer() {
      const params = {
        id: this.$route.params.id
      };
      return topicApi(params);
    },
    toGoHome() {
      this.$router.push({
        name: 'Home',
      });
    },
    like(data) {
      if (!this.home.token) {
        alert('您还未登录，请点击右上角登录');
        return;
      }
      const body = {
        accesstoken: this.home.token,
        id: data.id,
      };
      console.log(body);
      this.$sync(async () => {
        try {
          const res = await replyApi('', body);
          if (res.data.success) {
            if (res.data.action === 'up') {
              data.ups.push(this.data.id);
            } else {
              const index = data.ups.indexOf(this.data.id);
              data.ups.splice(index, 1);
            }
          }
        } catch (e) {
          console.error(e);
        }
      });
    },
    uped(ups) {
      return ups.indexOf(this.data.id) >= 0;
    },
  },
};
</script>

<style lang="less">
@import './topics';
</style>

