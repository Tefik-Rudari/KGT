<template>
  <v-container class="mb-16">
    <h1 data-aos="fade-top" class="head-title">Start today!</h1>
    <v-row class="mt-16" wrap justify-sm="center" data-aos="fade-left">
      <v-flex xs12 sm9 md6>
        <img src="../../assets/work.jpg" alt class="img-fluid" />
      </v-flex>
      <v-flex xs12 sm9 md6 class="px-7" data-aos="fade-right">
        <div class="description mt-sm-16">
          <h2 class="head-title mb-5">Your Business On the Web</h2>
          <p class="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
            molestiae totam? Quibusdam vel qui, corporis nesciunt esse sit sint.
            Consequatur minus dolore nihil ab? Veritatis libero ipsam officia
            assumenda perferendis, eligendi ex cupiditate dolore magni?
          </p>
          <div class="text-center">
            <v-btn rounded light> Read more </v-btn>
          </div>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>

<style scoped>
.context {
  margin-top: 30px;
}
.head-title {
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  .description {
    margin-top: 70px;
  }
}
</style>
