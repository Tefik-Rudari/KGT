<template>
<div id="home">
<div class="wrapper">
    <header class="showcase">
        <div class="content">
        <h1>KGT</h1>
        <p>
            Tregti me pakicë të gazetave dhe materialit të shkrimit, në dyqane të specializuara!
        </p>
         <a href="#about" v-smooth-scroll><button class="btn btn-outline-light"> Rreth nesh </button></a>
        </div>
    </header>
</div>
</div>
</template>

<style scoped>
.showcase {

    min-height: 600px;

    background: url("../assets/printing.jpg");
    background-position: -2px -542px;
    background-attachment: fixed;
    color: #fff;
    border-bottom: 1px #eee solid;
    padding-top: 50px;
}

.content {
        padding-top: 7%;
}

.showcase h1 {
    font-size: 4rem;
    margin-bottom: 0;
    color: black;
    /* text-shadow: 0 4px 4px rgba(104, 104, 104, 0.8); */
}

.showcase p {
    font-size: 1.3rem;
    margin-top: 0;
    color: black;

}
</style>
