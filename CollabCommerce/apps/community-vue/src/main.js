
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import List from './List.vue'
import Post from './Post.vue'

const store = createStore({
  state(){ return { posts: [] } },
  mutations:{ setPosts(s, p){ s.posts = p }, upvote(s, id){ const p=s.posts.find(x=>x.id===id); if(p) p.votes++ } },
  actions:{
    async load({commit}){
      const res = await fetch('/CollabCommerce/data/posts.json')
      commit('setPosts', await res.json())
    }
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: List },
    { path: '/post/:id', component: Post, props: true }
  ]
})

createApp(App).use(store).use(router).mount('#app')
