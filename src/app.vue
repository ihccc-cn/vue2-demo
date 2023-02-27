<template>
  <main-nav-layout />
</template>

<script>
import MainNavLayout from "@/layout/main-nav-layout/index.vue";

export default {
  name: "App",
  components: {
    "main-nav-layout": MainNavLayout
  },
  mounted() {
    console.log("🚀 Vue :", this);
  },
};
</script>
