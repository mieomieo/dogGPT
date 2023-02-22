<template>
  <div>
    <p ref="textContainer">{{ displayedText }}</p>
  </div>
</template>

<script>
import soundFile from "../assets/sound.mp3";
export default {
  data() {
    return {
      isLoading: false,
      displayedText: "",
      audio: new Audio(soundFile),
    };
  },
  mounted() {
    setTimeout(() => {
      const container = this.$refs.textContainer;
      const words = this.text.split(" ");

      let i = 0;
      const intervalId = setInterval(() => {
        if (i === words.length) {
          clearInterval(intervalId);
          return;
        }

        this.displayedText += words[i] + " ";
        i++;
        //   if (i !== words.length) {
        this.audio.play();
        setTimeout(() => this.audio.play(), 200);
      }, 500);
    }, Math.round(Math.random() * 1500));
    this.isLoading = true;
    console.log("true");
  },
  computed: {
    text() {
      return this.$store.state.DogMessage;
    },
  },
};
</script>

<style>
/* Define any other styles you need here */
</style>
