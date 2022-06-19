<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'homeview' }">Techno</router-link>
      </div>
    </nav>
    <ul>
      <li>
        <router-link :to="{ name: 'coursesview' }">Courses</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contactview' }">Contact</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
header {
  background: #234;
  display: flex;
  align-content: space-between;
  align-items: center;
  margin: 0 auto;
}

header a {
  color: white;
}

a.router-link-active {
  color: #4b8;
}

nav {
  padding: 20px;
  flex: 1;
}

.logo a {
  font-size: 1.2rem;
  color: white;
}

ul li {
  padding-right: 20px;
  display: inline-block;
}

li a {
  margin-left: 10px;
}
</style>
