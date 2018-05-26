<template>
  <div class="hello">
    <nv-header :isShowGoBack='false'></nv-header>
    <section class="cnode_home">
      <nav class="cnode_home--nav">
        <ul class="cnode_home--nav-ul">
          <li @click='switchMenu(index,item.params)' v-for="(item,index) in menus" :key="item.label" :class="{'cnode_home--nav-ul_active': home.currentlyMenu === index, 'cnode_home--nav-ul_li': show}">{{item.value}}</li>
        </ul>
      </nav> 
      <section class="cnode_home-wrap">
        <div v-for='item in data' :key="item.id" class="cnode_home-wrap_list">
            <div class="cnode_home-wrap_list_link--content">
              <!-- TODO 跳转到用户详情 -->
              <a href="#">
                <img class="cnode_home-wrap_list_link--content-img" :src="item.author.avatar_url" alt="">
              </a>
              <router-link :to='`/topics/${item.id}`' class="cnode_home-wrap_list_link">
                <div class="cnode_home-wrap_list_link--content-title">
                    <p class="cnode_home-wrap_list_link--content-title_theme">
                      <span class="cnode_home-wrap_list_link--content-title-tab" :class="{'cnode_home-wrap_list_link--content-title-top': item.top || item.good}">{{item.tab | menu | topOrGood(item.top,item.good)}}</span>
                      <span class="cnode_home-wrap_list_link--content-title_reply"><i>{{item.reply_count}}</i>/{{item.visit_count}}</span>
                    </p>
                  <p class="cnode_home-wrap_list_link--content-title_txt">
                      {{item.title}}
                  </p>
                  <time class="cnode_home-wrap_list_link--content-title_time">
                    {{item.last_reply_at | lastActiveTime}}
                  </time>
                </div>
              </router-link>
            </div>
        </div>
      </section>
    <nv-page :pageCount='pages' @gotoPage='gotoPage' :active='active' :visibility='visibility'></nv-page>
    <nv-loding v-show="isShoLoding"></nv-loding>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { homeApi } from '@/api/index';

export default {
  name: 'home',
  data() {
    return {
      data: '',
      currently: '01',
      show: true,
      active: '',
      visibility: true,
      isShoLoding: false,
      pages: [
        { label: 'pre', value: '上一页', isShow: true },
        { label: 'next', value: '下一页', isShow: true }
      ],
      menus: [
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
  computed: {
    ...mapState(['home'])
  },
  created() {
    this.isShoLoding = true;
    this.menus[this.home.currentlyMenu].params.page = this.home.homePage;
    homeApi(this.menus[this.home.currentlyMenu].params)
      .then(res => {
        if (res.data.success) {
          this.data = res.data.data;
          setTimeout(() => {
            this.isShoLoding = false;
          }, 500);
        }
      })
      .catch(e => {
        this.isShoLoding = false;
        console.error(e);
      });
  },
  filters: {
    topOrGood(val, isTop, isGood) {
      if (isTop) {
        val = '置顶';
      } else if (isGood) {
        val = '精华';
      }
      return val;
    }
  },
  methods: {
    ...mapMutations(['CHANGE_CURRENTLY_MENU', 'CHANGE_HOME_PAGE']),
    switchMenu(index, params) {
      this.menus[this.home.currentlyMenu].params.page = 1;
      this['CHANGE_HOME_PAGE'](1);
      this['CHANGE_CURRENTLY_MENU'](index);
      this.isShoLoding = true;
      homeApi(params)
        .then(res => {
          if (res.data.success) {
            this.data = res.data.data;
            setTimeout(() => {
              this.isShoLoding = false;
            }, 500);
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    gotoPage(val) {
      this.active = val;
      let page;
      if (val === 'pre') {
        if (this.home.homePage === 1) return;
        page = this.menus[this.home.currentlyMenu].params.page -= 1;
        this.isShoLoding = true;
        homeApi(this.menus[this.home.currentlyMenu].params)
          .then(res => {
            if (res.data.success) {
              setTimeout(() => {
                this.isShoLoding = false;
              }, 500);
              this.data = [];
              this.data = res.data.data;
            }
          })
          .catch(e => {
            setTimeout(() => {
              this.isShoLoding = false;
            }, 500);
            console.error(e);
          });
      } else if (val === 'next') {
        page = this.menus[this.home.currentlyMenu].params.page += 1;
        this.isShoLoding = true;
        homeApi(this.menus[this.home.currentlyMenu].params)
          .then(res => {
            if (res.data.success) {
              setTimeout(() => {
                this.isShoLoding = false;
              }, 500);
              this.data = [];
              this.data = res.data.data;
            }
          })
          .catch(e => {
            setTimeout(() => {
              this.isShoLoding = false;
            }, 500);
            console.error(e);
          });
      }
      this['CHANGE_HOME_PAGE'](page);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import './home';
</style>
