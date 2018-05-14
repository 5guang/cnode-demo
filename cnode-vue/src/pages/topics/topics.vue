<template>
  <section>
    <nv-header></nv-header>
      <div v-html="content"></div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { topicApi } from '@/api/index';

export default {
  data() {
    return {
      content: ''
    };
  },
  computed: {
    ...mapState(['params', 'home'])
  },
  created() {
    this.topicApiServer()
      .then(res => {
        if (res.data.success) {
          this.content = res.data.data.content;
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    topicApiServer() {
      const params = {
        id: this.$route.params.id
      };
      return topicApi(params);
    }
  }
};
</script>

<style>

</style>
