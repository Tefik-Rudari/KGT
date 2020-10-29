<template>
<div>
    <v-carousel hide-delimiters :show-arrows="false" height="700px">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="slide-x-transition" transition="slide-x-transition">
            <div class="container text-right">
                <div class="container title" color="primary">
                    {{ item.title }}
                    <p class="lead">
                        DEC Pro është kompani me seli në Prishtinë e cila kryen shërbime
                        të inxhinierisë civile me prioritet projektimin dhe ndërtimin.
                    </p>
                </div>
            </div>
        </v-carousel-item>
    </v-carousel>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                src: require("../../assets/schematic.jpg"),
                title: "Dec PROJECTS"
            }]

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
