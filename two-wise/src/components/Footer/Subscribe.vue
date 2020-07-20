<template>
    <div class="subcribe">
        <div class="sub">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Subscribe to our newsletter</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your email address" aria-describedby="emailHelp">
        </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Subscribe",
    components: {

    }
}
</script>

<style scoped>

.subcribe {
    position: relative;
    top: 40px;
    color: white;
    font-size: 20px;
}

.sub {
    position: absolute;
    top: 0px;
    right: 500px;
}
label {
    font-size: 12px;
}
</style>
