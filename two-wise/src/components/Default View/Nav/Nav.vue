<template>
  <div class="navigation">
      <h4>twowise</h4>
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
      <router-link to="/contactus" class="router-link">Contact</router-link>
    </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav"
        }
</script>

<style scoped>

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
.router-link:hover {
  color: black;
}

.router-link:active {
  color: black;
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

h4 {
  position: absolute;
  top: 20px;
  left: 200px; 
  color: white;
}

</style>