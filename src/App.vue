<template>
  <component :is="layout.value"><router-view></router-view></component>
</template>

<script setup lang="ts">
import { computed, shallowRef } from "vue";
import { useRoute } from "vue-router";
import AppLayout from "./layouts/app.vue";
import LoginLayout from "./layouts/login.vue";
const route = useRoute();
const layout = computed(() => {
  if (route.meta?.layout == "login") {
    return shallowRef(LoginLayout);
  }
  return shallowRef(AppLayout);
});
</script>
<style scoped></style>
