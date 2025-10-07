
<template>
  <section>
    <div class="card" v-for="p in posts" :key="p.id">
      <h3>{{p.title}}</h3>
      <p class="meta">by {{p.author}} • 👍 {{p.votes}}</p>
      <p>{{p.body}}</p>
      <router-link :to="'/post/'+p.id">Open</router-link>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const posts = computed(()=> store.state.posts)
onMounted(()=> store.dispatch('load'))
</script>

<style scoped>.meta{color:#555;font-size:.9em}</style>
