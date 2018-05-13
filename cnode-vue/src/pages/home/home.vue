<template>
  <div class="hello">
    <ul>
      <li v-for='item in data' :key="item.id" @click='toTopics(item.id, item.content)'>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {mapMutations} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      data: ''
    }
  },
  created() {
    axios.get(`/api/topics`, {
      params: {
        page: 1,
        limit: 10,
        tab: 'share'
      }
    }).then(res => {
      if (res.data.success) {
        this.data = res.data.data;
      }
    }).catch(e => {
      console.log(e);
    })
    console.log('keepAlive')
  },
  methods: {
    ...mapMutations([
      'CHANGE_PARAMS',
    ]),
    toTopics(id) {
      axios.get(`/api/topic`, {
        params: {
          id,
      }
      }).then(res => {
        if (res.data.success) {
          this['CHANGE_PARAMS'](res.data.data.content);
        }
      });
      this.$router.push({
        path: `/topics/${id}`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  @import './home';
</style>
