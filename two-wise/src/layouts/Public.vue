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
import Nav from '../components/Default View/Nav/Nav'
import Footer from '../components/Default View/Footer/Footer'
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