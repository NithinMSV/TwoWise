<template>
  <div class="plans">
    <div class="heading">
      <p>Simple plans to drive traffic,</p>
      <p>pick your right plan</p>
    </div>
    <plantemp />
  </div>
</template>

<script>
import plantemp from './Plan-Temp'

export default {
  name: 'Plans',
  components: {
    plantemp
  }
}
</script>

<style scoped>
.plans{
  position: relative;
  top: 50px;
  }
.heading {
  position: absolute;
  left: 500px;
  line-height: 1;
}

.heading p:nth-child(1) {
  font-size: 50px;
  font-weight: 100;
}

.heading p:nth-child(2) {
  font-size: 65px;
  font-weight: 400;
 }  
</style>
