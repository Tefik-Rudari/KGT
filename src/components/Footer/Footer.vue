<template>
  <div id="footer" class="back" padless>
    <div id="footer" class="back">
      <v-footer padless>
        <v-card flat class="text-center container back">
          <v-card-text class="black--text pt-0">
            Kompania jonë ofron shërbime tregtare për pakicë të gazetave dhe
            materialeve të shkrimit, për dyqane të specializuara dhe jo të
            specializuara. Çmimet e volitshme dhe cilësia e produkteve janë
            prioriteti i kompanisë sonë.<br />
            Na gjeni ne lokacionin me larte ose na
            kontaktoni ne emailin tone per cdo pyetje apo printime te radhes.
          </v-card-text>

          <v-card-text class="black--text">
            {{ new Date().getFullYear() }} — <strong>KGT</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
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