<template>
  <p>{{count}}</p>
  <button @click="click">Increment</button>
  <p></p>
  <button 
    v-for="post in posts"
    :key="post.id"
    @click="click2(post)"
  >
    {{post.title}}
  </button>
<p></p>
  <button 
    v-for="post in posts2"
    :key="post.id"
    @click="click3(post)"
  >
    {{post.title}}
  </button>

  {{postId}}

  <div
    v-if="currentPost"
  >
    <h2>{{currentPost.title}}</h2>
    <h4>{{currentPost.content}}</h4>

  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',

  data(){

    return {
      posts: [
      { id: 1, title: 'Post #1'},
      { id: 2, title: 'Post #2'},
      ]
    }


  },

  created(){
    this.$store.dispatch('posts/fetch')
  },


  computed: {
    posts2(){
      return this.$store.state.posts.all
    },

    currentPost(){
      return this.$store.getters['posts/currentPost']
    },

    count(){
      return this.$store.state.posts.count
    },

    postId(){
      return this.$store.state.posts.postId
    }
  },

  methods: {

    click(){
      this.$store.commit('posts/increment', 10)
    },
    click3(post: any){
      this.$store.commit('posts/setPostId', post.id)
    },
    click2(post: any){
      this.$store.commit('posts/setPostId', post.id)
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
