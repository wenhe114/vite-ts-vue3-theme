<template>
  <div class="login-wrap">
    <a-button @click="login">登录</a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  // import {post} from "src/request/xhr"
  import { req } from 'src/request/index'
  export default defineComponent({
    components: {},
    setup() {
      const body = new FormData()
      body.append('user', 'wenhe')
      body.append('password', '12121')
      function login() {
        // post({url:"/login",body:body})
        req({ type: 'get', url: '/contents/list/', query: { id: 11, age: 12 } })?.then((res) => {
          console.log(res)
        })
        req({
          type: 'post',
          url: 'http://192.168.0.107:7001/contents/list/{{id}}/{{age}}',
          urlQuery: { id: 11, age: 27 },
          // body,
          body: {
            name: 'wenhe',
            have: {
              age: '25',
              card: 'card'
            },
            chidren: [
              {
                name: 'xwh',
                age: '11'
              },
              {
                name: 'xxm',
                age: '13'
              },
              {
                name: 'gxr',
                age: '12'
              }
            ]
          },
          dataType: 'formdata'
        })
      }
      return {
        login
      }
    }
  })
</script>

<style lang="less" scoped>
  .login-wrap {
    background: @theme;
    font-size: 18px;
  }
</style>
