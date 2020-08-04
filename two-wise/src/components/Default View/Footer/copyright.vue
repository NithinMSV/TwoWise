<template>
    <div class="cr">
        <div class="cr-text">
        &copy; twowise 2020
        </div>
        <div class="pow">
            powered by Prototype
        </div>
    </div>
</template>

<script>
export default {
    name: "cr",
    components: {

    }
}
</script>

<style scoped>
.cr {
    position: relative;
    top: 100px;
    color: white;
    font-size: 20px;
}

.cr-text {
    position: absolute;
    top: 0px;
    left: 1200px;
}

.pow {
    position: absolute;
    top: 30px;
    left: 1200px;
}
</style>