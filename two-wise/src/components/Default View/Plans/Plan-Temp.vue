<template>
    <div class="temp">
        <div class="starter">
            <h4 class="starter-header">Starter Plan</h4>
            <h1 class="starter-price">$3/</h1>
            <p class="starter-month-text">month</p>
            <div class="starter-left-line"></div>
            <p class="starter-benefit-text">Benefits</p>
            <div class="starter-right-line"></div>
            <ul class="starter-benefits">
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
            </ul>
        </div>
        <div class="premium">
            <h4 class="premium-header">Premium Plan</h4>
            <h1 class="premium-price">$6/</h1>
            <p class="premium-month-text">month</p>
            <div class="premium-left-line"></div>
            <p class="premium-benefit-text">Benefits</p>
            <div class="premium-right-line"></div>
            <ul class="premium-benefits">
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "plantemp",
    components: {

    }
}
</script>

<style scoped>
.temp {
    position: relative;
    top: 250px;
}

.starter {
    position: absolute;
    background: #FF512F;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #DD2476, #FF512F);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #DD2476, #FF512F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    left: 250px;
    border-radius: 5px;
    height: 400px;
    width: 600px;
}

.premium {
    position: absolute;
    background: #283048;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #859398, #283048);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    top: -60px;
    left: 750px;
    border-radius: 5px;
    height: 500px;
    width: 600px;
}

.starter-header {
    position: absolute;
    top: 25px;
    left: 200px;
}

.starter-price {
    color: white;
    position: absolute;
    top: 25px;
    left: 250px;
}

.starter h1 {
    position: absolute;
    top: 60px;
    left: 120px;
    font-size: 100px;
}

.starter-month-text {
    position: absolute;
    color: white;
    top: 110px;
    left: 280px;
    font-size: 40px;
}

.starter-benefit-text {
    position: absolute;
    color: white;
    top: 185px;
    left: 230px;
    font-size: 20px;
}

.starter-left-line {
    position: absolute;
    top: 200px;
    background-color: white;
    height: 2px;
    width: 150px;
}

.starter-right-line {
    position: absolute;
    top: 200px;
    left: 350px;
    background-color: white;
    height: 2px;
    width: 150px;
}

.starter-benefits {
    position: absolute;
    top: 250px;
    left: 100px;
}

/* Premium Plans */

.premium-header {
    position: absolute;
    top: 25px;
    left: 250px;
}

.premium-price {
    color: white;
    position: absolute;
    top: 25px;
    left: 250px;
}

.premium h1 {
    position: absolute;
    top: 50px;
    left: 120px;
    font-size: 150px;
}

.premium-month-text {
    position: absolute;
    color: white;
    top: 160px;
    left: 350px;
    font-size: 40px;
}

.premium-benefit-text {
    position: absolute;
    color: white;
    top: 240px;
    left: 260px;
    font-size: 25px;
}

.premium-left-line {
    position: absolute;
    top: 260px;
    background-color: white;
    height: 2px;
    width: 200px;
}

.premium-right-line {
    position: absolute;
    top: 260px;
    left: 400px;
    background-color: white;
    height: 2px;
    width: 200px;
}

.premium-benefits {
    position: absolute;
    top: 350px;
    left: 100px;
}

ul {
    list-style-type:square;
}
</style>