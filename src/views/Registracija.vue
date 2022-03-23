<template>
  <div>
      <form>
          <h5>Dobrodošli</h5>
          <h3>Registrirajte se</h3>
          <div>
              <label>Email adresa</label>
              <input type="email" v-model="email"/>
          </div>
          <div >
              <label>Ime i prezime</label>
              <input type="text" v-model="namesurname"/>
          </div>
          <div>
            <label>Kontakt broj</label>
            <input type="number" v-model="number"/>
          </div>
          <div>
            <label>Lozinka</label>
            <input type="password" v-model="password"/>
          </div>
          <button type="button" @click="signup">Registracija</button>
      </form>
    </div>
</template>
<script>
  import {firebase} from '@/firebase';
  export default {
    name: 'Registracija',
    data() {
      return {
        email:'',
        namesurname:'',
        number:'',
        password:''
      };
    },
    methods:{
     signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
         function(){
           console.log('Uspješna registracija');
        }
      ).catch(function(error) {
      alert('Došlo je do greške');
      });
      console.log('Nastavak');
      },
    },
  };
</script>