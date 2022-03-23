<template>
    <div>
      <form>
          <h5>Dobrodošli</h5>
          <h3>Prijavite se</h3>
          <div>
              <label>Email adresa</label>
              <input type="email" v-model="email"/>
          </div>
          <div>
            <label>Lozinka</label>
            <input type="password" v-model="password"/>
          </div>
          <button type="button" @click="login">Prijava</button>
      </form>
    </div>
</template>
<script>
  export default {
    name:"Prijava",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      login(){
        console.log("login...");
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
          function(){
            console.log("uspješna prijava");
          }).catch(function(error){
            alert('Došlo je do greške');
          });
         console.log('Nastavak'); 
      },
    },
  };
</script>
