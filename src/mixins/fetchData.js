export default {
  data() {
    return {
      loading: true,
      data: null,
    };
  },
  methods: {
    fetchData(endpoint) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000/${endpoint}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.data = r;
            this.loading = false;
          }, 1000);
        });
    },
  },
};
