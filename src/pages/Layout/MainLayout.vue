<template>
<div class="wrapper">
  <sidebar></sidebar>
    <top-navbar></top-navbar>
</div>
</template>


<script>
import TopNavbar from "./TopNavbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    TopNavbar,
    Sidebar
  }
};
</script>