<template>
  <div class="app">
    <Nav />
    <div class="route">
    <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/HomePage/HomePageComponents/Nav'
export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style scoped>
</style>