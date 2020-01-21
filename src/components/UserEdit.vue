<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>UserAge: {{userAge}}</p>
    <button class="btn btn-info" @click="editAge">Edit age</button>
  </div>
</template>

<script>
import { eventBuss } from "../main";
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      //   eventBuss.$emit("ageWasEdited", this.userAge);
      eventBuss.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
