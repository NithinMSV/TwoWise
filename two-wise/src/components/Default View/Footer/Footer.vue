<template>
    <div class="footer">
        <ftrlinks />
        <Subscribe />
        <cr />
    </div>
</template>

<script>
import ftrlinks from './Links'
import cr from './copyright'
import Subscribe from './Subscribe'

export default {
    name: "Footer",
    components: {
        ftrlinks,
        cr,
        Subscribe
    }
}
</script>

<style scoped>

.footer {
  position: relative;
  top: 1500px;
  height: 250px;
  background-color: cyan;
}

@media all and (max-width: 768px) and (orientation: portrait) {
.footer {
  position: relative;
  top: 1500px;
  height: 250px;
  margin: 0;
  padding: 0;
  background-color: cyan;
}
}

</style>