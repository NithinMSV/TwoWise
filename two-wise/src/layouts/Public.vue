<template>
<div class="public">
  <Nav />
    <div class="route">
    <router-view />
    </div>
  <Footer />
</div>
</template>

<script>
import Nav from '../components/HomePage/HomePageComponents/Nav'
import Footer from '../components/Footer/Footer'
export default {
  name: 'PublicLayout',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
</style>