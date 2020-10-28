<template>
<v-app>
    <Header />
    <router-view />
</v-app>
</template>

<style>
#app {
    text-align: center;
}
</style>

<script>
import Header from './components/Header/Header';
// import LandingView from './components/LandingView';

export default {
    name: 'App',

    components: {
        // LandingView,
        Header,
    },

    data: () => ({
        //
    }),
};
</script>
