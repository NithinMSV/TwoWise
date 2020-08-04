<template>
    <div class="footer-links">
        <div class="ftr-links">
    <ul>
        <li>
        <router-link to="/about" class="router-link">About Us</router-link>
        </li>
        <li>
        <router-link to="/contactus" class="router-link">Contact</router-link>
        </li>
        <li>
        <router-link to="/tc" class="router-link">Terms & Conditions</router-link>
        </li>
    </ul>
        </div>
    </div>
</template>

<script>
export default {
   name: "ftrlinks",
   components: {

   }
}
</script>

<style scoped>

.footer-links {
    position: relative;
    top: 40px;
}

.ftr-links {
    position: absolute;
    top: 0px;
    left: 250px;
}

ul {
  list-style: none;
}

li {  
  padding: 1px;
  line-height: 1.1em;
  font-size: 20px;
  display: block;
}

.router-link {
    font-size: 13px;
    text-decoration: none;
    color: white;
}
</style>