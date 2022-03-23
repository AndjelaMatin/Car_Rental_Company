<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg ">
          <a class="navbar-brand" href="#">
            <router-link to="/">CAR RENTAL COMPANY</router-link> 
          </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>  
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/onama" class="nav-link">O NAMA</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/poslovnice" class="nav-link">POSLOVNICE</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/kontakt" class="nav-link">KONTAKT</router-link>  
          </li>
          <li class="nav-item">
            <router-link to="/prijava" class="nav-link">PRIJAVI SE</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 padding: 10px;
 background-color: #4270A1;

  a {
    color: #fff;

    &.router-link-exact-active {
      color: #213850;
    }
  }
}
</style>
