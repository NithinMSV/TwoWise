<template>
  <div class="navigation">
      <h1>Two Wise</h1>
    <div class="links">
    <ul>
    <li>
      <router-link to="/" class="router-link">Home</router-link>
    </li>
    <li>
      <router-link to="/about" class="router-link">About</router-link>
    </li>
    <li>
      <router-link to="/plans" class="router-link">Plans</router-link>
    </li>
    <li>
      <router-link to="/contactus" class="router-link">ContactUs</router-link>
    </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
        }
</script>

<style scoped>
div {
  position: relative;
}

ul {
  list-style: none;
}

li {
  display: inline;
  padding: 20px;
  font-size: 20px;
}

.router-link {
  text-decoration: none;
  }

.links {
  position: absolute;
  top: 10px;
  right: 100px; 
}

h1 {
  position: absolute;
  top: 0px;
  left: 200px; 
}

</style>