<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<style>
#app {
  text-align: center;
}
</style>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import LandingView from './components/LandingView';

export default {
  name: "App",

  components: {
    // LandingView,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
