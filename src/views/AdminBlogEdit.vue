<template>
    <v-container>
        <BlogForm :blog="blog" :saveBlog="saveBlog" buttonText="Save Blog" />
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import BlogForm from '@/components/BlogForm'

export default {
  components: {
      BlogForm
  },
  computed: {
      ...mapState(['blogs']),
    blog() {
            return this.blogs.find(blg => blg.id == this.$route.params.id)
        },
  },
  methods: {
      async saveBlog() {
          await this.$store.dispatch('editBlogPost',this.blog);
          this.$router.push({name:'admin-blog-list'}) 
      }
  }
}
</script>

<style scoped lang="scss">
</style>
