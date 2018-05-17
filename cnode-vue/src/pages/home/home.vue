<template>
  <div class="hello">
    <nv-header></nv-header>
    <section class="cnode_home">
      <nav class="cnode_home--nav">
        <ul class="cnode_home--nav-ul">
          <li @click='switchMenu(item.label,item.params)' v-for="item in menu" :key="item.label" :class="{'cnode_home--nav-ul_active': currently === item.label, 'cnode_home--nav-ul_li': show}">{{item.value}}</li>
        </ul>
      </nav> 
      <section class="cnode_home-wrap">
        <div v-for='item in data' :key="item.id" class="cnode_home-wrap_list">
          <router-link :to='`/topics/${item.id}`' class="cnode_home-wrap_list_link">
            <div class="cnode_home-wrap_list_link--content">
              <!-- TODO 跳转到用户详情 -->
              <a href="#">
                <img class="cnode_home-wrap_list_link--content-img" :src="item.author.avatar_url" alt="">
              </a>
              <div class="cnode_home-wrap_list_link--content-title">
                  <p class="cnode_home-wrap_list_link--content-title_theme">
                    <span class="cnode_home-wrap_list_link--content-title-tab" :class="{'cnode_home-wrap_list_link--content-title-top': item.top || item.good}">{{item.tab | menu | topOrGood(item.top,item.good)}}</span>
                    <span class="cnode_home-wrap_list_link--content-title_reply"><i>{{item.reply_count}}</i>/{{item.visit_count}}</span>
                  </p>
                <p class="cnode_home-wrap_list_link--content-title_txt">
                    {{item.title}}
                </p>
                <time class="cnode_home-wrap_list_link--content-title_time">
                  {{item.last_reply_at | lastActiveTime(true)}}
                </time>
              </div>
            </div>
          </router-link>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { homeApi } from '@/api/index';
import { MillisecondToDate } from '@/utils/util';


export default {
  name: 'home',
  data() {
    return {
      data: '',
      currently: '01',
      show: true,
      menu: [
        {
          label: '01',
          value: '全部',
          params: {
            page: 1,
            limit: 20,
            tab: 'all',
            mdrender: true
          }
        },
        {
          label: '02',
          value: '精华',
          params: {
            page: 1,
            limit: 20,
            tab: 'good',
            mdrender: true
          }
        },
        {
          label: '03',
          value: '分享',
          params: {
            page: 1,
            limit: 20,
            tab: 'share',
            mdrender: true
          }
        },
        {
          label: '04',
          value: '问答',
          params: {
            page: 1,
            limit: 20,
            tab: 'ask',
            mdrender: true
          }
        },
        {
          label: '05',
          value: '招聘',
          params: {
            page: 1,
            limit: 20,
            tab: 'job',
            mdrender: true
          }
        }
      ]
    };
  },
  created() {
    homeApi(this.menu[0].params)
      .then(res => {
        if (res.data.success) {
          this.data = res.data.data;
        }
      })
      .catch(e => {
        console.error(e);
      });
  },
  filters: {
    menu(val) {
      let res = 'dsag'
      const menuList = [
        {label: 'share', value: '分享', top: '置顶'},
        {label: 'good', value: '精华', top: '置顶'},
        {label: 'ask', value: '问答', top: '置顶'},
        {label: 'job', value: '招聘', top: '置顶'},
      ]
      menuList.forEach(item => {
        if (item.label === val) {
          res = item.value;
        }
      })
      return res;
    },
    topOrGood(val, isTop, isGood) {
      if (isTop) {
        val = '置顶';
      } else if (isGood) {
        val = '精华';
      }
      return val;
    },
    lastActiveTime(time) {
      return MillisecondToDate(time);
    }
  },
  methods: {
    ...mapMutations(['CHANGE_PARAMS']),
    switchMenu(label, params) {
      this.currently = label;
      homeApi(params)
        .then(res => {
          if (res.data.success) {
            this.data = res.data.data;
          }
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import './home';
</style>
