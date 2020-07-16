<template>
  <div class="hiw-element">
      <div class="wrapper">
          <div class="hiw-el">
            <h1>How It Works</h1>
          </div>
          <div class="button-el">
            <a href="#a">Become our partner</a>
          </div> 
      </div>
  </div>
</template>

<script>

export default {
  name: 'HowItWorks',
  components: {
  }
}
</script>

<style scoped>
  .hiw-element{
    position: relative;
    width: 100%;
    margin-top: -30px;
  }

  .wrapper {
    position: relative;
    top: 100px;
    left: 25%;
    border: 1.5px grey solid;
    height: 400px;
    width: 1000px;
  }

  .hiw-el {
    position: absolute;
    top: 10%;
    left: 40%;
  }

  .button-el {
    position: absolute;
    top: 70%;
    left: 40%;
   }

a {
    text-decoration: none;
    border: 2px grey solid;
    padding: 20px 30px;
    border-radius: 5px;
    color: honeydew;
    background-color: rgb(3, 102, 184);
}
</style>