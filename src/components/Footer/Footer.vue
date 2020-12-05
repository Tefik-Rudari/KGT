<template>
  <div id="footer" class="back" padless>
    <div id="footer" class="back">
      <v-footer padless>
        <v-card flat class="text-center container back">
          <v-card-text class="black--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

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