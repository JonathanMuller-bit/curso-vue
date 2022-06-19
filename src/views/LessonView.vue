<template>
  <div id="app">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <div v-if="data">
      <h3>{{ data.nome }}</h3>
      <div class="video">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${data.youtube}`"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "LessonView",
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchData(`aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`aula/${to.params.aula}`);
    next();
  },
};
</script>
<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
