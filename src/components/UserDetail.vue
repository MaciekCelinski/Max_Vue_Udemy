<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName" class="btn btn-danger">Reset Name</button>
    <button @click="resetFn()" class="btn btn-danger">Reset Name</button>
  </div>
</template>

<script>
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
      this.$emit("nameWasReset", this.myName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
