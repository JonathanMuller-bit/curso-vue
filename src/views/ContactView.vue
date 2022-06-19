<template>
  <div id="app">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>
        <ul>
          <li v-for="(value, key) in data.contato" :key="value">
            <strong class="capitalize">{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "ContactView",
  mixins: [fetchData],
  created() {
    this.fetchData("contato");
  },
};
</script>
<style>
.capitalize {
  text-transform: capitalize;
}
</style>
