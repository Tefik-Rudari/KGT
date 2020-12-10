<template>
  <div id="footer" class="back" padless>
    <div id="footer" class="back">
      <v-footer padless>
        <v-card flat class="text-center container back">
          <v-card
            id="contacti"
            max-width="375"
            class="mx-auto back"
            flat
          >
            <v-list two-line color="#f5f5f5">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">
                    mdi-phone
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>(650) 555-1234</v-list-item-title>
                  <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>aliconnors@example.com</v-list-item-title>
                  <v-list-item-subtitle>Personal</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

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
#contacti {
  background-color: #f5f5f5 !important;
}
</style>
