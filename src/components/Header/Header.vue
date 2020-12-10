<template>
  <div>
    <div id="navbar">
      <ul>
        <li><a href="#home" v-smooth-scroll>Home</a></li>
        <li><a href="#info" v-smooth-scroll>Fillo</a></li>
        <li><a href="#services" v-smooth-scroll>Serviset </a></li>
        <li><a href="#about" v-smooth-scroll>About</a></li>
        <li><a href="#contact" v-smooth-scroll>Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
};
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 60px;
  opacity: 0.979;
  transition: top 0.99s;
  background: white;
  box-shadow: 0 1.3px 5px rgb(3 3 3 / 20%);
}

#navbar ul {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
}

#navbar ul li {
  margin: 0 1rem;
  padding: 1rem;
}

#navbar ul li a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

#navbar ul li a:hover {
  color: darkslategray;
  text-decoration: underline;
}
</style>
