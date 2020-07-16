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

* {
  margin: 0;
  padding: 0px;
}

.navigation {
  margin-top: 0;
  background-color: rgb(255, 189, 65);
  height: 70px;
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
  color: white;
  }

.links {
  position: relative;
  top: 15px;
  left: 1000px;
  height: 30px;
  width: 400px;
  padding-top: 5px;
  background-color: transparent;
}

h1 {
  position: absolute;
  top: 15px;
  left: 200px; 
  color: white;
}

</style>