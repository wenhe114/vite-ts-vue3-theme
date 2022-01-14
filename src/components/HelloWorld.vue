<script lang="ts">
  import { defineComponent } from 'vue'
  import Test from '@/components/test.vue'
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
  export default defineComponent({
    components: {
      Test
    },
    setup() {
      let test = ''
      console.log(test)
      const testfui = () => {
        console.log(1212)
      }
      console.log(testfui)

      return {
        toggleTheme
      }
    }
  })
</script>

<template>
  <div class="tailwind-test">
    <a-button @click="toggleTheme({ scopeName: 'theme-default' })">默认主题</a-button>
    <a-button style="margin-left: 20px" @click="toggleTheme({ scopeName: 'theme-dark' })"
      >暗黑主题</a-button
    >
    <a-button style="margin-left: 20px" @click="toggleTheme({ scopeName: 'theme-red' })"
      >红色主题</a-button
    >
    <a-button style="margin-left: 20px" @click="toggleTheme({ scopeName: 'theme-red-dark' })"
      >暗黑红色主题</a-button
    >
    <Test></Test>
    <a-button type="primary">测试</a-button>
  </div>
</template>

<style scoped lang="less">
  .tailwind-test {
    background: theme('colors.orange.50');
  }
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
  .wwwwwwwwwwwwww {
    color: red;
  }
</style>
