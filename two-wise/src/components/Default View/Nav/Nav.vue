<template>
  <nav class="navbar navbar-expand-lg bg-orange">
  <a class="navbar-brand mx-auto" href="#">TwoWise</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link class="router-link nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="router-link nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="router-link nav-link" to="/plans">Pricing</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/login">Login</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "nav"
        }
</script>

<style scoped>

.navbar-brand, .nav-link {
  color: white;
}

.bg-orange {
  background-color: orange;
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

</style>