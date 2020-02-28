<template>
    <v-card width:250px hover :to="{name:'single-blog',params:{id:blog.id}}" >
        <v-img
            height="250"
            width="250"
            :src="blog.url"
          ></v-img>
            <v-card-title>{{blog.title}}</v-card-title>
        <v-card-text>
        <div class="green--text" v-if="isRead">Viewed</div>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['blog'],
    computed: {
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

<style scoped lang="scss">
</style>