<template>
  <div class="home">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <transition>
      <div v-if="data" class="conteudo">
        <div>
          <h1>Sobre a {{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
          <router-link
            tag="button"
            class="btn-courses"
            :to="{ name: 'coursesview' }"
            >Courses</router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
                <h4>{{ avaliacao.nome }}</h4>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="aprender" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("home");
  },
};
</script>

<style scoped>
.btn-courses {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: 10px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>
