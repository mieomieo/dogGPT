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
      displayedText: "",
      audio: new Audio(soundFile), // Thay đổi đường dẫn đến file âm thanh tại đây
      currentIndex: 0,
    };
  },
  mounted() {
    const container = this.$refs.textContainer;
    const words =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".split(" ");

    const intervalId = setInterval(() => {
      if (this.currentIndex === words.length) {
        clearInterval(intervalId);
        return;
      }

      this.displayedText += words[this.currentIndex] + " ";
      this.currentIndex++;

      if (this.currentIndex % 2 === 0) {
        this.audio.play();
      }
    }, 500);
  },
};
</script>

<style>
/* Define any other styles you need here */
</style>
