<template>
  <div class="box-element">
      <div class="wrapper">
          <div class="box-el">
            <h1>{{name}}</h1>
          </div>
          <div class="text-el">
            <p>{{text}}</p>
          </div>
          <div class="button-el">
            <button type="button" class="btn btn-primary">{{button}}</button>
          </div> 
      </div>
  </div>
</template>

<script>

export default {
  name: 'Box',
  props: ['name','text','button']
}
</script>

<style scoped>
  
.box-element{
  position: relative;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}

.wrapper {
  position: relative;
  top: 50px;
  left: 25%;
  border: 1.5px grey solid;
  height: 400px;
  width: 1000px;
}

.box-el {
  position: absolute;
  top: 10%;
  left: 40%;
  text-align: center;
  align-items: center;
}

.text-el {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 80%;
  font-size: 18px;
}

.button-el {
  position: absolute;
  top: 70%;
  left: 43%;
}

</style>
