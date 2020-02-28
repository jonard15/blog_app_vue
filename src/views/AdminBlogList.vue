<template>
<v-container>
    <h1 class="d-flex justify-center"> Blog List </h1>
        <v-btn small color="primary" to="/blog/new">Create New Blog</v-btn>
        <div class="grid-table">
            <div>Title</div>
            <div>Description</div>
            <div>Action</div>
        </div>
        <div v-for="blog in blogs" :key="blog.id" class="grid-table">
            <div>{{blog.title}}</div>
            <div>{{blog.description | abbreviate }}</div>
            <div class="action">
                <v-btn color="primary" :to="{name:'single-blog',params:{id:blog.id}}" x-small>Show</v-btn>
                <v-btn color="primary" :to="{name:'admin-blog-edit',params:{id:blog.id}}" x-small>Edit</v-btn>
                <v-btn color="error" @click="deleteBlogPost(blog)" x-small>Delete</v-btn>
            </div>
        </div>
</v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
      ...mapState(['blogs'])
  },

  filters: {
     abbreviate(text) {
         return text && text.slice(0, 50)
     }
  },
  methods: {
      deleteBlogPost(blog){
        let response = confirm(`Are you sure you want to delete ${blog.title}`)
        if (response) {
            this.$store.dispatch('deleteBlogPost', blog)
        }
      }
  }
}
</script>

<style scoped lang="scss">
.grid-table{
    display:grid;
    grid-template-columns: repeat(auto-fill, 33%);
    padding: 10px;
    border-bottom: 1px black solid;

    &:nth-of-type(2n) {
        background-color: #dedede;
    }

    .action{
        *{
            margin:5px;
        }
    }
}
</style>
