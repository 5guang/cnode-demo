<template>
  <section>
    <p>{{home.ad}}</p>
      <div v-html="params"></div>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'params',
      'home'
    ])
  },
  created() {
    let params = this.$route.params.id;
    console.log(params);
    console.log(this.$router);
  },
  methods: {
  }
};
</script>

<style>

</style>
