<template>
  <div class="text-center mt-5">
    <h1 class="text-6xl font-bold text-indigo-50">{{ msg }}</h1>
    <p class="mt-5 fs-6 fst-italic italic text-violet-50 mb-5">{{ sologan }}</p>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    msg: String,
    sologan: String,
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
