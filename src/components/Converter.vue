<template>
  <div class="converter">
    <div class="converter__row">
      <h2 class="text-center">XML</h2>
    </div>
    <div class="converter__row">
      <textarea class="converter__textarea" name="xml" id="xml-text" cols="70" rows="10" v-model="xml"></textarea>
    </div>

    <div class="converter__row">
      <h2 class="text-center">JSON</h2>
    </div>
    <div class="converter__row">
      <textarea class="converter__textarea" name="json" id="json-text" cols="70" rows="10" readonly v-model="json"></textarea>
    </div>

    <div class="converter__row" v-if="invalidXml">
      <p class="converter__error">Invalid XML inserted.</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import XMLConverter from "@/services/XMLConverter";

@Options({})
export default class Converter extends Vue {
  xml = "";
  converter = new XMLConverter();
  invalidXml = false;

  get json(): string {
    try {
      this.invalidXml = false;
      return this.converter.convertFromText(this.xml);
    } catch (e) {
      this.invalidXml = true;
      return "";
    }
  }
}
</script>

<style scoped lang="scss">
.converter {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  &__row {
    display: inline-flex;
    justify-content: center;
  }

  &__textarea {
    border-radius: 4px;
    border: solid 1px #2d2d2d;
    padding: 4px;
    max-width: 40rem;
  }

  &__error {
    color: darkred;
    padding: 10px;
  }
}
</style>