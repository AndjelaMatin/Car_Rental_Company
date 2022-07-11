<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CAR RENTAL COMPANY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" id="sene">Početna</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/onama" class="nav-link">O nama</router-link>

        </li>
           <li   class="nav-item">
          <router-link to="/poslovnice" class="nav-link">Poslovnice</router-link>
        </li>
              
           <li   class="nav-item">
          <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
        </li>
                   <li   class="nav-item">
          <router-link to="/Prijava" class="nav-link">Prijava</router-link>
        </li>

      </ul>
    </div>
  </div>
    </nav>
    <router-view/>
  </div>
</template>
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
