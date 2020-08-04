<template>
  <div class="Home">
    <div class="container">
      <div class="row">
        <Box 
        name="Welcome" 
        text="Elevate website visits with our Prototype's unique twowise SEO module and
        grow your business." 
        button="Get Started" />
      </div>
      <div class="row">
        <Box 
        name="How It Works?" 
        text="We have our own unique partner program where
              you can become one of our partner and earn to
              increase the website traffic of the clients that subscribed
              to us so it is genuine visits rather than bots." 
        button="Become our Partner"/>
      </div>
      <PlansOverview />
    </div>
  </div>
</template>

<script>
import Box from './HomeElements/BoxTemp'
import PlansOverview from './HomeElements/PlanOverview'

export default {
  name: 'Home',
  components: {
    Box,
    PlansOverview
  }
}
</script>

<style scoped>
  .Home{
    position: absolute;
    top: 30px;
  }
</style>


welcometext = 