<template>
<div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- IMPORT COMPONENTS HERE IN ORDER -->
    <LandingView />
    <Section-1 />
    <Section2 />
    <Section3 />
    <Section4 />
</div>
</template>

<script>
// @ is an alias to /src
import LandingView from '@/components/LandingView.vue'
import Section1 from '@/components/Section1/Section1.vue'
import Section2 from '@/components/Section2/Section2.vue'
import Section3 from '@/components/Section3/Section3.vue'
import Section4 from '@/components/Section4/Section4.vue'

export default {
    name: 'Home',
    components: {
        LandingView,
        Section1,
        Section2,
        Section3,
        Section4,
    }
}
</script>
