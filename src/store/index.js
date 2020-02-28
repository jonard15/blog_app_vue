import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//get item in localstorage convert in string
let blogs = window.localStorage.getItem('blogs')

export default new Vuex.Store({
  state: {
    blogs: blogs ? JSON.parse(blogs) : [],
    readBlogs:[],
  },
  mutations: {
    SET_READ_BLOGS(state, readBlogs){
      state.readBlogs = readBlogs;
    },
    SET_BLOGS(state, blogs){
      state.blogs = blogs;
    },
    MARK_BLOG_READ(state,bloId){
      let readBlogs = state.readBlogs.concat(bloId);
      state.readBlogs = readBlogs;
      window.localStorage.readBlogs = JSON.stringify(readBlogs)
    },
    ADD_BLOG(state,blog){
      let blogs = state.blogs.concat(blog);
      state.blogs = blogs;
      window.localStorage.blogs = JSON.stringify(blogs)
    },
    GET_BLOG(state){
      window.localStorage.setItem('blogs',JSON.stringify(state.blogs))
      window.localStorage.setItem('readBlogs',JSON.stringify(state.readBlogs))
    },
    DELETE_BLOG(state,blogId){
      let blog = state.blogs.indexOf(blogId)
      state.blogs.splice(blog,1)
      this.commit('GET_BLOG')
    },
    EDIT_BLOG(state,blog){
      state.blogs.forEach(b =>{
        if(b.id == blog.id) {
          this.commit('GET_BLOG')
        }
      })
    }
  },
  actions: {
      //isRead boolean
    async readBlogs({commit}) {
      let readBlogs = await JSON.parse(window.localStorage.readBlogs);
      commit('SET_READ_BLOGS', readBlogs)
    },
    //set blogs
    async blogs({commit}) {
      let blogs = await JSON.parse(window.localStorage.blogs);
      commit('SET_BLOGS', blogs)
    },
  //marked if it isread
    markRead({commit}, blogId){
      commit('MARK_BLOG_READ',blogId);
    },
    //add blog
    async createBlog ({commit}, blogs){
      commit('ADD_BLOG',blogs);
      return blogs;
    },
    //delete blog
    async deleteBlogPost ({commit}, blog){
      commit('DELETE_BLOG',blog);
    },
    //edit blog
    async editBlogPost ({commit}, blog){
      commit('EDIT_BLOG',blog);
      return blogs;
    }
  }
})
