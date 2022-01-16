<template>
  <div> 请求 </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { get } from 'src/request/xhr'
  export default defineComponent({
    setup() {
      function getdata() {
        get('/contents/list').then((res) => {
          console.log(res)
        })
      }
      onMounted(() => {
        console.log(12121)
        getdata()
      })
      return {}
    }
  })
</script>
