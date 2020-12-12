<template>
  <div id="about" class="section2">
    <v-container id="inspire" >
      <h1 data-aos="fade-top" class="absolute head-title">Rreth nesh!</h1>

      <v-row align="center">
        <v-item-group
          v-model="window"
          class="shrink mr-6"
          tag="v-flex"
        >
          <v-item
            v-for="item in items"
            :key="item.title"
            v-slot="{ active, toggle }"
          >
            <div>
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-col>
          <v-window v-model="window" class="elevation-0" vertical>
            <v-window-item v-for="item in items" :key="item.title">
              <v-card flat>
                <v-card-text>
                  <v-row
                    class="container mt-sm-12"
                    justify-space-around
                    data-aos="fade-left"
                  >
                    <v-flex xs12 sm12 md6>
                      <img :src="item.image" alt class="img-fluid" />
                    </v-flex>
                    <v-flex
                      xs12
                      sm12
                      md6
                      class="mt-sm-16"
                      data-aos="fade-right"
                    >
                      <div class="ml-md-16">
                        <h2>{{ item.title }}</h2>
                        <p>
                          {{ item.description }}
                        </p>
                      </div>
                    </v-flex>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    window: 0,
    items: [
      {
        title: " Partneritet",
        icon: "mdi-flash",
        description:
          "Kompania jonë ofron shërbime tregtare për pakicë të gazetave dhe materialeve të shkrimit, për dyqane të specializuara dhe jo të specializuara. Çmimet e volitshme dhe cilësia e produkteve janë prioriteti i kompanisë sonë.",
        image: require("../../assets/work.jpg"),
      },
      {
        title: " Këshillim",
        icon: " mdi-bookmark-multiple-outline",
        description:
          "KGT i ofron klientëve edhe këshillim për fusha të ndryshme. Ato fusha janë: Aktivitetet e këshillimeve kompjuterike, Teknologjia tjetër informative dhe aktivitetet shërbyese kompjuterike, Aktivitetet e ndërmjetësimit të specializuar për shitjen e produkteve të veçanta, Publikimi i softuerëve të tjerë, Aktivitetet e programimit kompjuterik dhe Aktivitete të menaxhimit të instalimeve kompjuterike.",
        image: require("../../assets/meeting.jpg"),
      },
      {
        title: " Të tjera",
        icon: "mdi-book-open-variant",
        description:
          "KGT ofron shërbime si: përkthime dhe interpretim, prodhim të materialit prej letrës për zyre, publikim të librave, publikim të gazetave, publikim të revistave dhe peridikëve, shtypje të gazetave. Poashtu edhe: libërlidhja dhe shërbime të ngjashme, prodhim të artikujve të tjerë të prej letrës dhe kartoni, përgatitje para-shtypjes dhe para-publikimit. ",
        image: require("../../assets/other.jpg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section2{
  margin-top: 150px;;
}
.v-application .mr-6 {
  margin-left: 50px;
}
.head-title {
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
</style>
