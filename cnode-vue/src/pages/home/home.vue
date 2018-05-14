<template>
  <div class="hello">
    <nv-header></nv-header>
    <ul>
      <li v-for='item in data' :key="item.id" >
        <router-link :to='`/topics/${item.id}`'>
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { homeApi } from '@/api/index';

export default {
  name: 'HelloWorld',
  data() {
    return {
      data: '',
      params: {
        page: 1,
        limit: 10,
        tab: 'share'
      }
    };
  },
  created() {
    homeApi(this.params)
      .then(res => {
        if (res.data.success) {
          this.data = res.data.data;
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    ...mapMutations(['CHANGE_PARAMS'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import './home';
</style>
