<template>
  <div class="hello">
    <section class="image">
      <div class="image__bg" style="background-image: url('https://img3.goodfon.com/wallpaper/nbig/0/56/art-avtomobil-mercedes-benz.jpg');"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #213850;
}

.image {
  position: relative;
  
  height: 100vh;
  width: 100%;
  
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
}

</style>
