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
          <li v-for="curso in data.cursos" :key="curso.id">
            <h2>
              <router-link
                :to="{ name: 'course', params: { course: curso.id } }"
              >
                {{ curso.nome }}
              </router-link>
            </h2>
            <span>{{ curso.totalAulas }} aulas | {{ curso.horas }} horas</span>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "CourseView",
  mixins: [fetchData],
  created() {
    this.fetchData("cursos");
  },
};
</script>
<style></style>
