<template>
  <div id="services" class="back">
    <v-container>
      <h1
        class="d-flex justify-center mb-6 head-title"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      >
        Sherbimet qe i kryejm ne
      </h1>
      <v-container
        id="carda"
        class="d-flex justify-center karta"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
      >
        <!-- Part 1-->
        <v-row wrap justify-space-around>
          <v-flex xs12 sm4 md4>
            <v-card class="mx-5 my-5 py-15 kart" data-aos="fade-left">
              <v-icon class="pb-5" x-large color="green darken-2">
                mdi-flash
              </v-icon>
              <div class="sherbimet">
                <ul>
                  <h4 class="py-8" href="#about" v-smooth-scroll>Tregeti</h4>
                </ul>
              </div>
            </v-card>
          </v-flex>
          <!--Part 2 -->
          <v-flex xs12 sm4 md4>
            <v-card class="mx-5 my-5 py-15 kart" data-aos="fade-bottom">
              <v-icon class="pb-5" x-large color="green darken-2">
                mdi-bookmark-multiple-outline
              </v-icon>
              <div class="sherbimet">
                <ul>
                  <h4 class="py-8" href="#about" v-smooth-scroll>Këshillim</h4>
                </ul>
              </div>
            </v-card>
          </v-flex>
          <!-- Part 3-->
          <v-flex xs12 sm4 md4>
            <v-card class="mx-5 my-5 py-15 kart" data-aos="fade-right">
              <v-icon class="pb-5" x-large color="green darken-2">
                mdi-book-open-variant
              </v-icon>
              <div class="sherbimet">
                <ul>
                  <h4 class="py-8" href="#about" v-smooth-scroll>Të tjera</h4>
                </ul>
              </div>
            </v-card>
          </v-flex>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.back {
  margin-top: 150px;
  padding-top: 50px;
  background-color: #f5f5f5 !important;
}
.head-title {
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.services {
  margin: 0px 20px 0px 20px;
}
.titulli {
  margin: 10px;
  padding: 10px;
  position: relative;
}
.sherbimet ul {
  margin: 10px 0px;
  padding: 10px 0px 0px 0px;
}
#carda:hover .kart:hover {
  box-shadow: 0 5px 15px antiquewhite;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  cursor: pointer;
}
/* .kart:hover {
  cursor: pointer;
} */
</style>
