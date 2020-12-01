<template>
  <div id="home">
    <div class="wrapper">
      <header class="showcase">
        <div class="container content">
          <h1 class="head-title">KGT</h1>
          <p>
            Tregti me pakicë të gazetave dhe materialit të shkrimit, në dyqane
            të specializuara!
          </p>
          <a href="#about" v-smooth-scroll
            ><button class="btn btn-outline-light">Rreth nesh</button></a
          >
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
.head-title {
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
.showcase {
  min-height: 90vh;
  background: linear-gradient(0deg, #9c888924, #776163ad),
    url("../assets/desk.jpg");
  background-attachment: fixed;
  background-position: center;
  color: #fff;
  border-bottom: 1px #eee solid;
  padding-top: 250px;
}

.content {
  padding-top: 7%;
  text-align: start;
}

.showcase h1 {
  font-size: 4rem;
  margin-bottom: 0;
  color: white;
  /* text-shadow: 0 4px 4px rgba(104, 104, 104, 0.8); */
}

.showcase p {
  font-size: 1.3rem;
  margin-top: 0;
  color: white;
}
</style>
