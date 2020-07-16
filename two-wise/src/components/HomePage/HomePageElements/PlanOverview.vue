<template>
<div class="plan">
    <div class="plan-grid-container">
        <div class="plan-grid-item plan1">
            <h4>Design A</h4>
            <div class="plan1-button-el">
            <a href="#a">Start</a>
            </div> 
            <ExpComp />
        </div>  
        <div class="plan-grid-item plan2">
            <h4>Design B</h4>
            <div class="plan2-button-el">
            <a href="#a">Start</a>
            </div> 
            <EduComp />
        </div>
    </div>
</div>   
</template>

<script>
export default {
    name: 'PlansOverview',
  components: {
  }
}
</script>

<style scoped>
.plan {
    position: relative;
    background-color: transparent;
    font-family: SemiBold;
    top: 120px;
    left: 250px;
}

.plan-grid-container {
    display: grid;
    grid-gap: 5px;
    padding: 1px;
    background-color: transparent;
  }
  
.plan-grid-item {
  background-color: transparent;
  text-align: center;
  border: 1.5px grey solid;
  padding: 0px;
  font-size: 30px;
}
.plan1 , .plan2{
  height: 500px;
  color: black;
}

.plan1 {
  grid-column: 1;
  grid-row: 1;
}

.plan2 {
  grid-column: 2;
  grid-row: 1;
}

.plan1-button-el {
    position: absolute;
    bottom: 3.2%;
    left: 0.3%;
}

.plan2-button-el {
    position: absolute;
    bottom: 3.2%;
    left: 50.4%;
}

a {
    text-decoration: none;
    padding: 15px 219px;
    color: rgb(0, 0, 0);
    background-color: rgb(0, 136, 113);
}

</style>