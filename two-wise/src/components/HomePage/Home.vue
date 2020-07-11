<template>
  <div class="Home">
      <h1>Home Page</h1>
      <welcome />
  </div>
</template>

<script>
import welcome from './HomePageElements/Welcome'
export default {
  name: 'Home',
  components: {
    welcome
  }
}
</script>

<style scoped>
  .Home{
    position: absolute;
    top: 50px;
  }
</style>
