<template>
  <div id="app">
    <app-header/>
    <converter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from "@/components/AppHeader.vue";
import Converter from "@/components/Converter.vue";

@Options({
  components: {
    AppHeader,
    Converter
  }
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Zen Maru Gothic', sans-serif;
}
</style>
