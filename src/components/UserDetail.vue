<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName" class="btn btn-danger mx-1">Reset Name</button>
    <button @click="resetFn()" class="btn btn-danger mx-1">Reset Name</button>
  </div>
</template>

<script>
import { eventBuss } from "../main";
export default {
  props: {
    // myName: [String, Array]
    // myName: String
    myName: {
      type: String,
      //   required: true,
      default: "Mary"
    },
    userAge: Number,
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Maciek";
    }
  },
  created() {
    eventBuss.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
