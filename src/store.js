import { reactive } from "vue";

const store = reactive({
  projects: [],
  technologies: [],
  types: [],
  apiUrl: "http://127.0.0.1:8000/api/",
});

export default store;
