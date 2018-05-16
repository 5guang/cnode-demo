<template>
  <div class="hello">
    <nv-header></nv-header>
    <section class="cnode_home">
      <nav class="cnode_home--nav">
        <ul class="cnode_home--nav-ul">
          <li @click='switchMenu(item.label,item.params)' v-for="item in menu" :key="item.label" :class="{'cnode_home--nav-ul_active': currently === item.label, 'cnode_home--nav-ul_li': show}">{{item.value}}</li>
        </ul>
      </nav> 
      <ul class="cnode_home-wrap">
        <li v-for='item in data' :key="item.id" class="cnode_home-wrap_list">
          <router-link :to='`/topics/${item.id}`' class="cnode_home-wrap_list_link">
            <div class="cnode_home-wrap_list_link--content">
              <img class="cnode_home-wrap_list_link--content-img" :src="item.author.avatar_url" alt="">
              <div class="cnode_home-wrap_list_link--content-title">
                <p>
                  <span class="cnode_home-wrap_list_link--content-title-tab" :class="{'cnode_home-wrap_list_link--content-title-top': item.top}">{{item.tab | menu}}</span>
                </p>
                <p class="cnode_home-wrap_list_link--content-title_txt">
                  {{item.title}}
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { homeApi } from '@/api/index';

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
        {label: 'share', value: '分享'},
        {label: 'good', value: '精华'},
        {label: 'ask', value: '问答'},
        {label: 'job', value: '招聘'},
      ]
      menuList.forEach(item => {
        if (item.label === val) {
          res = item.value;
        }
      })
      return res;
    },
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
