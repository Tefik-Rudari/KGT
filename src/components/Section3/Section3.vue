<template>
  <div id="ap">
    <v-app id="inspire" class="my-5">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          fill-dot
          data-aos="fade-right"
        >
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <p>{{ item.description }}</p>
              <v-card-text class="icon">
                <p>{{ item.icon }}</p>
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
export default {
  el: "#ap",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
        title: "Funksionet primare të kompanis",
        description:
          "Funksioni primar i KGT është shpërndarja efikase e materialeve të ndryshme, bëjmë tregti në sasi të vogëla me gazeta dhe materialit të shkrimit, në dyqane të specializuara. Si funksion secondar është edhe tregtia me shumicë jo e specializuar.",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: "Tregtia me shumicë jo e specializuar",
        description: "Tregtia me shumicë jo e specializuar",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
        title: "",
        description: "",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
        title: "",
        description: "",
      },
    ],
  }),
};
// new Vue({
// vuetify: new Vuetify(),
</script>

<style>
.ap {
  margin: 0px 20px 0px 20px;
}
</style>
