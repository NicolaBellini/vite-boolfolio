import { reactive } from "vue";
import axios from "axios";

const store = reactive({
  projects: [],
  technologies: [],
  types: [],
  apiUrl: "http://127.0.0.1:8000/api/",
  getUrl(apiUrl, type = "") {
    axios
      .get(apiUrl + type)
      .then((res) => {
        // this.store.projects = res.data.data;
        switch (type) {
          case "technologies":
            this.technologies = res.data;
            break;
          case "types":
            this.types = res.data;
            break;
          default:
            this.projects = res.data.data;
            break;
        }
      })
      .catch((error) => {
        error = error;
        console.log(error.message);
      });
  },
});

export default store;
