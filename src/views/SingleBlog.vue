<template>
<v-container>
    <v-row>
        <v-col md="6" cols="12">
            <v-card width:340px>
                <v-img :src="blog.url" />
             </v-card>
        </v-col>
        <v-col md="6" cols="12">
            <h1>{{ blog.title}}</h1>
            <div class="green--text ml-2" v-if="isRead">Viewed</div>
            <div v-else><v-btn color="primary" small v-on:click="markRead">Mark Read</v-btn></div>
            <div class="description">{{blog.description}}</div>
        </v-col>
    </v-row>    
</v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        blog() {
            return this.$store.state.blogs.find(vid => vid.id == this.$route.params.id)
        },
        isRead() {
            return this.$store.state.readBlogs.includes(this.blog.id);
        }
    },
    methods: {
        ...mapActions(['readBlogs']),
           markRead() {
                this.$store.dispatch('markRead',this.blog.id)
            }
    },
    created() {
        this.readBlogs();
    }
}
</script>

<style>
.description{
    padding: 20px;
    line-height: 2;
}
</style>