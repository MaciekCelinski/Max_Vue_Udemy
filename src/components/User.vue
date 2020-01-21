<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName" class="btn btn-primary">Change my Name</button>
    <p>My name is {{name}}</p>
    <hr />
    <div class="row">
      <div class="col-sm-6">
        <!-- :name = "name" -> PROP -->
        <!-- listening to the event nameWasReset and changing name to sended value -->
        <app-user-detail :myName="name" :resetFn="resetName" :userAge="age"></app-user-detail>
      </div>
      <div class="col-sm-6">
        <app-user-edit :userAge="age"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Maciek",
      age: 27
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "MAX";
    }
  }
};
</script>

<style>
div {
  background-color: lightblue;
}
</style>
