<template>
  <section id="info" class="info-seaction">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center" data-aos="fade-right">
          <h3 class="headtitle">KGT</h3>
          <!-- <i class="fas fa-wrench fa-3x mb-2"></i> -->
          <p class="subtitle">
            Printo shpejt
            <br />
            Dhe arsyeshem
            <!-- HERE YOU CAN USE LINE HEIGHT -->
          </p>
          <p class="price"></p>
          <div class="text-center">
            <a href="#contact" v-smooth-scroll
              ><v-btn rounded dark> Na kontaktoni </v-btn></a
            >
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
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
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
