<template>
  <div class="brain">
    <div class="page-wrapper chiller-theme toggled">
      <Sidenav2 />
      <Headernav />
      <div class="brain-children">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import Sidenav2 from "../../../components/SideNav/SideNav2_.vue";
import Headernav from "../../../components/HeaderNav/HeaderNav.vue";

export default {
  name: "Brain",
  components: {
    Sidenav2,
    Headernav
  }
};
</script>

<style scoped></style>
