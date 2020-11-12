<template>
  <div id="about">

    <v-app id="inspire">
      <h1 data-aos="fade-top" class="absolute">Rreth nesh!</h1>

      <v-row align="center">
        <v-item-group
          v-model="window"
          class="shrink mr-6"
          mandatory
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
                  <v-row class="mb-4" align="center">
                    <v-icon data-aos="fade-right">{{ item.icon }}</v-icon>
                    <strong class="title" data-aos="fade-right">{{ item.title }}</strong>
                    <v-spacer></v-spacer>
                  </v-row>

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
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    window: 0,
    items: [
      {
        title: " Flash",
        icon: "mdi-flash",
        description:"LoremLorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis, molestiae totam? Quibusdam vel qui, corporis nesciunt esse sit sint. Consequatur minus dolore nihil ab? Veritatis libero ipsam officia assumenda perferendis, eligendi ex cupiditate dolore magni?",
        image: require("../../assets/work.jpg"),
      },
      {
        title: " Bookmark",
        icon: " mdi-bookmark-multiple-outline",
        description:"LoremLorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis, molestiae totam? Quibusdam vel qui, corporis nesciunt esse sit sint. Consequatur minus dolore nihil ab? Veritatis libero ipsam officia assumenda perferendis, eligendi ex cupiditate dolore magni?",
        image: require("../../assets/work.jpg"),
      },
      {
        title: " Book",
        icon: "mdi-book-open-variant",
        description:"LoremLorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis, molestiae totam? Quibusdam vel qui, corporis nesciunt esse sit sint. Consequatur minus dolore nihil ab? Veritatis libero ipsam officia assumenda perferendis, eligendi ex cupiditate dolore magni?",
        image: require("../../assets/work.jpg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-application .mr-6 {
  margin-left: 50px;
}
</style>
