<template>
  <div class="welcome-element">
      <div class="wrapper">
          <div class="welcome-el">
            <h1>Welcome</h1>
          </div>
          <div class="button-el">
            <a href="#a">Get Started</a>
          </div> 
      </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  components: {
  }
}
</script>

<style scoped>
  .welcome-element{
    position: relative;
    width: 100%;
  }

  .wrapper {
    position: relative;
    top: 50%;
    left: 25%;
    border: 1.5px grey solid;
    height: 300px;
    width: 1000px;
  }

  .welcome-el {
    position: absolute;
    top: 10%;
    left: 45%;
  }

   .button-el {
    position: absolute;
    top: 70%;
    left: 47%;
   }

   a {
       text-decoration: none;
       border: 2px grey solid;
       padding: 7px;
       border-radius: 5px;
       color: honeydew;
       background-color: rgb(3, 102, 184);
   }
</style>
