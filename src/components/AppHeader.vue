<template>
  <header class="header">
    <nav-bar/>
  </header>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import NavBar from "@/components/NavBar.vue";

@Options({
  components: {
    NavBar
  }
})
export default class AppHeader extends Vue {}
</script>

<style scoped>
.header {
  margin: 0;
  padding: 0;
}
</style>