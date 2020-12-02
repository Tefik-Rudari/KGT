<template>
<<<<<<< HEAD
  <div id="footer" class="back" padless >
    <v-footer>
      <v-card flat class="text-center container back" >
        <v-card-text class="black--text">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

=======
  <div id="footer" class="back">
    <v-footer padless>
      <v-card flat class="text-center container back">
>>>>>>> 0a514eec7d4aa039051550b9c64bbcf419ec3d99
        <v-card-text class="black--text pt-0">
          Na gjeni ne lokacionin me larte ose na kontaktoni ne emailin tone per cdo pyetje apo printime te radhes.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>KGT</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style>
.back {
  background-color: #f5f5f5 !important;
}
.v-btn__content:hover {
  box-shadow: 0 5px 15px antiquewhite;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>