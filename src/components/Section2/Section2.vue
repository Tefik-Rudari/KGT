<template>
<section id="info" class="py-3">
    <div class="container info-seaction">
        <div class="row">
            <div class="col-md-6 align-self-center" data-aos="fade-right">
                <h3 class="headtitle">APPLE WATCH</h3>
                <!-- <i class="fas fa-wrench fa-3x mb-2"></i> -->
                <p class="subtitle">
                    Heavy on features.
                    <br />
                    Light on price.
                    <!-- HERE YOU CAN USE LINE HEIGHT -->
                </p>
                <p class="price">From $246</p>
                <div class="text-center">
                    <v-btn rounded dark> Rounded Button </v-btn>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-left">
                <img src="../../assets/apple-watch.png" alt class="img-fluid" />
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.info-seaction {
    margin-top: 200px 200px;
    margin-bottom: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.headtitle {
    font-weight: 600;
    color: black;
    margin-bottom: 50px;
}

.subtitle {
    font-size: 48px;
    color: #333;
    font-weight: 600;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
        "Arial", sans-serif;
    padding: 0;
    margin: 0;
}

.price {
    font-size: 21px;
    font-weight: 600;
    margin: 30px auto;
}
</style>
