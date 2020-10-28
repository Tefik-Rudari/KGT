<template>
<div class="hello">
    <Section-1 />
</div>
</template>

<script>
import Section1 from '../components/Section1/Section1.vue'

export default {
    name: 'LandingView',
    components: {
        Section1,
    },
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>
