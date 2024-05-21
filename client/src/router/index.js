import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue"
import Search from "@/views/Search.vue";
import DetailNotice from "@/views/DetailNotice.vue";
import TestComponents from "@/views/TestComponents.vue";

const routes = [
    {
      path: '/',
      component: Main
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/notice/:id',
        component: DetailNotice
    },
    {
        path: '/test',
        component: TestComponents
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
