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
    top: 150px;
    height: 250px;
    background-color: rgb(30, 177, 221);
    margin-top: 1300px;
}


</style>