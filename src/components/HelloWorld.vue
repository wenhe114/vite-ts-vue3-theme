<script lang="ts">
import { defineComponent } from "vue";
import Test from "@/components/test.vue";
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js";
export default defineComponent({
  components: {
    Test,
  },
  setup() {
    return {
      toggleTheme,
    };
  },
});
</script>

<template>
  <div>
    <a-button @click="toggleTheme({ scopeName: 'theme-default' })"
      >默认主题</a-button
    >
    <a-button
      @click="toggleTheme({ scopeName: 'theme-dark' })"
      style="margin-left: 20px"
      >暗黑主题</a-button
    >
    <a-button
      @click="toggleTheme({ scopeName: 'theme-red' })"
      style="margin-left: 20px"
      >红色主题</a-button
    >
    <a-button
      @click="toggleTheme({ scopeName: 'theme-red-dark' })"
      style="margin-left: 20px"
      >暗黑红色主题</a-button
    >
    <Test></Test>
    <a-button type="primary">测试</a-button>
  </div>
</template>

<style scoped>
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
