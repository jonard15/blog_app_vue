import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleBlog from '../views/SingleBlog.vue'
import BlogCreate from '../views/BlogCreate.vue'
import AdminBlogList from '../views/AdminBlogList.vue'
import AdminBlogEdit from '../views/AdminBlogEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/blog',
    name: 'admin-blog-list',
    component: AdminBlogList
  },
  {
    path: "/admin/blog/:id/edit",
    name: "admin-blog-edit",
    component: AdminBlogEdit,
    params:true
  },
  {
    path:"/blog/new",
    name: "create-new",
    component: BlogCreate
  },
  {
    path: "/blogs/:id",
    name: "single-blog",
    component: SingleBlog,
    params:true
  }
]

const router = new VueRouter({
  routes
})

export default router
