<template>
  <section>
    <nv-header @toGoBack='toGoHome'></nv-header>
    <section class='cnode_details'>
      <div class="cnode_details-title">
        <span class="cnode_details-title--tab" v-show="data.top || data.good">置顶</span><h1 class="cnode_details-title--text" v-text="data.title"></h1>
        <div class="cnode_details-title--changes">
          <span class="cnode_details-title--changes-span">发布于 {{data.create_at | lastActiveTime}}</span>
          <span class="cnode_details-title--changes-span">作者 {{loginname}}</span>
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
              <span class="cnode_reply-information-content--top_right-zan" v-if="item.ups.length > 0">
                <i class="cnode_reply-information-content--top_right-zan--icon" >赞</i><span>&nbsp {{item.ups.length}}</span>
              </span>
            </div>
          </div>
          <span class="cnode_reply-information-content--top_left--avatar">
              <img class="cnode_reply-information-content--top_left--avatar-img" :src="item.author.avatar_url" alt="title">
          </span>
          <div class="cnode_reply-information-content--main">
            <div v-html="item.content"></div>
          </div>
        </li>
      </ul>
    </section>
    <nv-loding v-show="isShoLoding"></nv-loding>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { topicApi } from '@/api/index';

export default {
  data() {
    return {
      data: '',
      loginname: '',
      isShoLoding: false
    };
  },
  computed: {
    ...mapState(['params', 'home'])
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
      this.$router.go(-1);
    }
  },
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = true; // 让 A 缓存，即不刷新
    next();
  }
};
</script>

<style lang="less">
@import './topics';
</style>

