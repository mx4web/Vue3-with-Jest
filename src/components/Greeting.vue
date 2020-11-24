<template>
  <div>
    <div>
      <span v-if="show">{{ msg }}</span>
      <span v-else>{{ msg }} again!</span>
    </div>
    <div>
      <span class="counter">Click the button {{ counter }} times!</span>
      <button @click="increaseCounter">Click me</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },

  setup() {
    const counter = ref(0);
    function increaseCounter() {
      counter.value++;
    }

    return { counter, increaseCounter };
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: lightblue;
  margin-bottom: 20px;
}
</style>
