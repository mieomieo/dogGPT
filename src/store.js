import { createApp } from "vue";
import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      message: "",
      DogMessage: "",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setMessage(state, payload) {
      this.state.message = payload;
      // console.log(this.state.message);
    },
    setLengthSound(state, payload) {
      this.state.DogMessage = payload;
      console.log(this.state.DogMessage);
    },
  },
});

export default store;
