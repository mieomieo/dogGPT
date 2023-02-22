<template>
  <hello-world msg="DogGPT" sologan="What if ChatGPT were a dog ?" />
  <div
    id="myDiv"
    ref="myDiv"
    v-scroll-to-bottom
    class="scrollable-div overflow-y-scroll max-h-[600px]"
  >
    <div v-for="(item, index) in msg" :key="index">
      <div class="py-3 px-[10%] flex text-align">
        <img
          class="object-cover w-[40px] h-[40px] mr-5 rounded-md"
          src="./assets/human.jpg"
          alt=""
        />
        <p class="py-2">{{ item }}</p>
      </div>
      <div
        class="py-3 px-[10%] flex"
        :style="{
          backgroundColor: 'rgb(79, 81, 99)',
        }"
      >
        <img
          src="./assets/dog.png"
          class="object-cover w-[40px] h-[40px] rounded-md bg-white mr-5"
          alt=""
        />
        <p class="py-2"><testCase /></p>
      </div>
    </div>
  </div>
  <footer>
    <input-text @sentMessage="HandleSend" class="bottom-0 fixed py-2 mt-7" />
  </footer>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import InputText from "./components/InputText.vue";
import testCase from "./components/testCase.vue";
export default {
  components: {
    HelloWorld,
    InputText,
    testCase,
  },
  data() {
    return {
      msg: [],
      displayedText: "",
      text: "",
    };
  },
  methods: {
    GenerateMessage(length) {
      var dogMessage = "";
      for (var i = 0; i < length; i++) {
        dogMessage = dogMessage + "woof" + " ";
      }
      var str = dogMessage.trim();
      str += ".";
      // dogMessage = dogMessage + ".";
      this.$store.commit("setLengthSound", str);
    },
    HandleSend() {
      // console.log(this.msg);
      this.msg.push(this.$store.state.message);
      this.GenerateMessage(Math.floor(Math.random() * 5) + 3);
    },
  },
  directives: {
    "scroll-to-bottom": {
      // Hàm được gọi khi div được tải hoặc thêm nội dung mới
      inserted: function (el) {
        // Di chuyển thanh cuộn xuống dưới cùng của div
        el.scrollTop = el.scrollHeight;
      },

      // Hàm được gọi khi có sự thay đổi nội dung trong div
      componentUpdated: function (el) {
        // Di chuyển thanh cuộn xuống dưới cùng của div
        el.scrollTop = el.scrollHeight;
      },
    },
  },
  mounted() {
    // Lắng nghe sự kiện DOMNodeInserted để di chuyển thanh cuộn xuống cuối trang khi có một div mới được thêm vào
    this.$refs.myDiv.addEventListener("DOMNodeInserted", () => {
      this.$refs.myDiv.scrollTop = this.$refs.myDiv.scrollHeight;
    });
  },
};
</script>
<style scoped>
.scrollable-div {
  overflow-y: scroll; /* Thiết lập thanh cuộn dọc */
  height: calc(100vh - 100px); /* Thiết lập chiều cao của div */
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(41, 35, 35);
  border-radius: 10px;
}
</style>
