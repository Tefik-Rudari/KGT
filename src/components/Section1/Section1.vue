<template>
  <section class="info-seaction">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center" data-aos="fade-right">
          <h3 class="headtitle">KGT</h3>
          <p class="subtitle">
            Kryej sherbimet permes
            <br />
            telefonit tuaj te mencur
          </p>
          <p class="price">Nga 0.10€</p>
          <div class="text-center">
            <v-btn rounded>
              <a class="black--text" href="#contact" v-smooth-scroll>Printo prej shpis</a>

            </v-btn>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <img src="../../assets/images.png" alt class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.info-seaction {
  margin: 100px 0;
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
  line-height: 1.3;
}
.price {
  font-size: 21px;
  font-weight: 600;
  margin: 30px auto;
}
</style>