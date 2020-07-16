<template>
  <div class="Home">
      <welcome />
      <HowItWorks />
      <PlansOverview />
      <Footer />
  </div>
</template>

<script>
import welcome from './HomePageElements/Welcome'
import HowItWorks from './HomePageElements/HowItWorks'
import PlansOverview from './HomePageElements/PlanOverview'
import Footer from '../Footer/Footer'

export default {
  name: 'Home',
  components: {
    welcome,
    HowItWorks,
    PlansOverview,
    Footer
  }
}
</script>

<style scoped>
  .Home{
    position: absolute;
    top: 30px;
  }
</style>
