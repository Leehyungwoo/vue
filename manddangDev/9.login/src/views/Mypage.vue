<template>
  <div>
    <h1>{{userInfo.name}}님 환영합니다</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "mypage",
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>
