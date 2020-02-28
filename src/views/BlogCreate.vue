<template>
    <v-container>
        <v-row>
            <v-col md="4" cols="12">
                <h1 class="d-flex justify-center"> Create New Blog </h1>
                <BlogForm :blog="blog" :saveBlog="createBlog" buttonText="Create Blog" />
            </v-col>
            <v-col md="8" cols="12">
                {{blog.id}}<br>
                {{blog.title}}<br>
                {{blog.description}}<br>
                <img :src="blog.url" />
            </v-col>
        </v-row>
    </v-container> 
</template>

<script>
import BlogForm from '@/components/BlogForm'
    export default{
        data() {
            return {
                blog: {}
            }
        },
        components: {
            BlogForm
        },
        methods:{
            async createBlog() {
                let blog = await this.$store.dispatch('createBlog',this.blog) 
                this.$router.push({name:'single-blog',params:{id:blog.id}})  
            } 
        }
    }
</script>

<style lang="scss" scoped>
</style>
