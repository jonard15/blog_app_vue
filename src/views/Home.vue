<template>
<v-container>
  <div class="home">
    <h1 class="display-2 ma-2 d-flex justify-center"> All Blogs </h1>
      <div class="d-flex flex-wrap" md="4" cols="12">
        <div v-for="blog in blogs" :key="blog.id">
          <BlogList :blog="blog" class="ma-3"></BlogList>
        </div>
      </div>
  </div>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import BlogList from '@/components/BlogList'

export default {
  name: 'Home',
  components: {
    BlogList
  },
  mounted(){
    this.$store.dispatch('blogs');
  },
  computed: {
      ...mapState(['blogs']),
      
  },
}
</script>

<style scoped lang="scss">
</style>
