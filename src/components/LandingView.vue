<template>
  <div class="wrapper">
    <header class="showcase">
      <h1>Your Web Presence</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos
        cum, reiciendis laboriosam corporis voluptate?
      </p>
      <button class="btn btn-outline-light">Read More</button>
    </header>
  </div>
</template>

<style scoped>
.showcase {
  min-height: 600px;
  font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: url("../assets/printing.jpg");
  background-size: cover;
  background-position: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: var(--shadow);
}

.showcase h1 {
  font-size: 4rem;
  margin-bottom: 0;
  color: rgb(245, 243, 243);
  /* text-shadow: 0 4px 4px rgba(104, 104, 104, 0.8); */
}

.showcase p {
  font-size: 1.3rem;
  margin-top: 0;
  color: rgb(245, 243, 243);
}
</style>