<template>
  <div>
    <DashNav />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashNav from '../views/Dashboard/DashNav';
export default {
  name: "DashboardLayout",
  components: {
    DashNav
  }
};
</script>

<style scoped>

</style>