<template>
<div>
    <div class="wrapper">
        <header class="background-video">
            <h1>KGT</h1>
            <p>
                Tregti me pakicë të gazetave dhe materialit të shkrimit, në dyqane të specializuara!
            </p>

            <div class="video">
                <video width="100%" height="100%" autoplay muted loop id="myVideo">
                    <source src="../../assets/tw3.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div class="contact">
                <div class="name">
                    <input type="text" class="form-control" placeholder="First and Last Name" />
                </div>
                <div class="lastname">
                    <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="message">
                    <input type="text" class="form-control" placeholder="Write a message..." />
                </div>
                <div class="btnn">
                    <input type="submit" value="Submit" class="btn btn-outline-3.dark block" />
                </div>
            </div>
        </header>
    </div>

</div>
</template>

<script>

</script>

<style>
@import "./Section4.css";
</style>
