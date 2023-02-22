<template>
  <div
    class="bottom-3 absolute p-5 w-full d-flex input-box text-center align-items-center"
  >
    <form v-on:submit.prevent="handleSubmit">
      <div class="text-center flex justify-center">
        <input
          class="p-3 bg-[#40414f] w-2/5 rounded-lg text-zinc-100"
          type="text"
          placeholder="Type your message here..."
          v-model="input"
        />
        <div
          class="btn-icon relative ms-2 ml-1 flex justify-center items-center"
        >
          <button
            class="absolute w-6 h-6 flex justify-center items-center"
            type="submit"
          >
            <svg
              data-v-ccf5c4c6=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                data-v-ccf5c4c6=""
                fill="currentColor"
                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>

    <div class="text-slate-300 mt-5">
      Plagiarized by
      <a
        class="underline underline-offset-2"
        :href="'https://www.facebook.com/mieo.mieo.1102/'"
        >Tung Manh</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit("setMessage", this.input);
      this.$emit("sentMessage");
      this.input = "";
    },
  },
};
</script>
<style>
.btn-icon {
  width: 30px;
  color: aliceblue;
}
</style>
