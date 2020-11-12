<template>
  <div id="services">
    <v-app id="inspire">
      <div>
        <h1
          class="d-flex justify-center mb-6 head-title"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        >
          Sherbimet qe i kryejm ne
        </h1>
        <v-card
          class="d-flex justify-center mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <!-- Part 1-->
          <div class="part1">
            <v-row justify-space-around>
              <v-flex xs12 sm12 md12>
                <v-card class="mx-5 my-5 px-15 py-15" data-aos="fade-left">
                  <v-icon class="pb-5" x-large color="green darken-2">
                    mdi-flash
                  </v-icon>
                  <div class="sherbimet">
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                  </div>
                </v-card>
              </v-flex>
            </v-row>
          </div>
          <!--Part 2 -->
          <div class="part2">
            <v-row justify-space-around>
              <v-flex xs12 sm12 md12>
                <v-card class="mx-5 my-5 px-15 py-15" data-aos="fade-bottom">
                  <v-icon class="pb-5" x-large color="green darken-2">
                    mdi-bookmark-multiple-outline
                  </v-icon>
                  <div class="sherbimet">
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                  </div>
                </v-card>
              </v-flex>
            </v-row>
          </div>
          <!-- Part 3-->
          <div class="part3">
            <v-row justify-space-around>
              <v-flex xs12 sm12 md12>
                <v-card class="mx-5 my-5 px-15 py-15" data-aos="fade-right">
                  <v-icon class="pb-5" x-large color="green darken-2">
                    mdi-book-open-variant
                  </v-icon>
                  <div class="sherbimet">
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                    <ul>
                      <h4>sherbimi</h4>
                    </ul>
                  </div>
                </v-card>
              </v-flex>
            </v-row>
          </div>
        </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.head-title {
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.services {
    margin: 0px 20px 0px 20px
}
.titulli {
    margin: 10px;
    padding: 10px;
    position: relative;
}
.sherbimet ul{
    margin: 10px 0px;
    padding: 10px 0px 0px 0px;
}
.v-card:hover .v-card:hover {
    box-shadow: 0 5px 15px antiquewhite;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>
