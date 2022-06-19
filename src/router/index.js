import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import CoursesView from "@/views/CoursesView.vue";
import CourseView from "@/views/CourseView.vue";
import LessonView from "@/views/LessonView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contactview",
      component: ContactView,
    },
    {
      path: "/courses",
      name: "coursesview",
      component: CoursesView,
    },
    {
      path: "/courses/:course",
      name: "course",
      component: CourseView,
      props: true,
      children: [
        {
          path: ":aula",
          name: "aula",
          component: LessonView,
          props: true,
        },
      ],
    },
  ],
});
