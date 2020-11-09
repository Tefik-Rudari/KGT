<template>
<div id="app">

    <div id="navbar">
        <ul>

            <li><a href="#home" v-smooth-scroll>Home</a></li>
            <li><a href="#about" v-smooth-scroll>About</a></li>
            <li><a href="#services" v-smooth-scroll>Serviset </a></li>
            <li><a href="#contact" v-smooth-scroll>Contact</a></li>
        </ul>
    </div>
</div>
</template>

<script>


export default {
    name: 'Header',
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "-60px";
    } else {
        document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}
</script>

<style>
@import "./Header.css";
</style>
