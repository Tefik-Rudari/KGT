<template>
<div id="app">

    <div id="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
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
