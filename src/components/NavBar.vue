<template>
  <nav class="nav">
    <span class="nav__title">XML-to-JSON converter</span>
  </nav>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  display: inline-flex;
  justify-content: center;

  background: #cc79fa;

  &__title {
    padding: 10px;
    color: white;
    font-weight: bold;
  }
}
</style>