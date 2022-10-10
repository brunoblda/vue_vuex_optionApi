import { createStore } from 'vuex'
import { testPosts } from '@/composable/testPost'
import IPost from '@/interfaces/IPost'

const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {
  namespaced: true,
  state() {
    return{
      count: 0,
      postId: null,
      all:  []
    }
  },
  getters: {

    currentPost(state : any){
      return state.all.find((x : IPost) => {
        return x.id === state.postId
      })
    } 

  },
  mutations: {
    increment(state: any, payload: any) {
      state.count += payload
    },
    setPostId(state: any, postId : any){
      state.postId = postId
    },
    setPosts(state : any, posts: any) {
      state.all= posts
    }
  },
  actions: {
    async fetch(ctx: any, payload: any){
      await delay()
      console.log(payload)

      ctx.commit('setPosts', testPosts)

    }

  },

}

export default createStore({
  modules: {
    posts
  }
})
