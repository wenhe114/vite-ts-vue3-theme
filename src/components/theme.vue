<script lang="ts">
  import { defineComponent } from 'vue'
  import Test from '@/components/test.vue'
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'

  export default defineComponent({
    components: {
      Test
    },
    setup() {
      console.log(111111)

      console.log('import.meta', process.env.NODE_ENV)

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
    <a-button
      type="primary"
      style="margin-left: 20px"
      @click="toggleTheme({ scopeName: 'theme-dark' })"
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
    <a-row>
      <a-col :span="12"
        ><a-typography-title>Buttons</a-typography-title>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
        <a-divider />
        <a-typography-title>Alert</a-typography-title>
        <a-alert style="margin-bottom: 10px" message="success" type="success" />
        <a-alert style="margin-bottom: 10px" message="info" type="info" />
        <a-alert style="margin-bottom: 10px" message="warning" type="warning" />
        <a-alert message="error" type="error" />
        <a-divider />
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider />
        <Notification />
        <a-divider />
        <Modal />
        <a-divider />
        <Message />
      </a-col>
      <a-col :span="12"
        ><a-typography-title>Slider</a-typography-title>
        <Slider />
        <a-divider />
        <a-typography-title>Forms</a-typography-title>

        <Forms />
        <a-divider />
        <a-typography-title>Table</a-typography-title>
        <Table />

        <a-typography-title>TimeLine</a-typography-title>
        <TimeLine
      /></a-col>
    </a-row>
  </div>
</template>

<style scoped lang="less">
  .tailwind-test {
    background: theme('colors.orange.50');
    color: @theme;
  }
  a {
    color: #000;
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
