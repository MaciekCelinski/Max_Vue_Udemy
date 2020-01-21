<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName" class="btn btn-primary">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-sm-6">
        <!-- :name = "name" -> PROP -->
        <app-user-detail :myName="name"></app-user-detail>
      </div>
      <div class="col-sm-6">
        <app-user-edit></app-user-edit>
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
      name: "Maciek"
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Anna";
    }
  }
};
</script>

<style>
div {
  background-color: lightblue;
}
</style>
