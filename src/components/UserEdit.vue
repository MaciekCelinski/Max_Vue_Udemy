<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>UserAge: {{userAge}}</p>
    <button class="btn btn-info" @click="editAge">Edit age</button>
  </div>
</template>

<script>
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      this.$emit("ageWasEdited", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
