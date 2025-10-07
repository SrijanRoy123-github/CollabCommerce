
<template>
  <div class="card" v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <button @click="up">Upvote</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()
const post = computed(()=> store.state.posts.find(p=> p.id == route.params.id))
const up = ()=> store.commit('upvote', Number(route.params.id))
</script>
