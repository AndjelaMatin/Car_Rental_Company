<template>
  <div id="prvi-div">
    <section class="container-fluid">
      <!-- row and justify-content-center class is used to place the form in center -->
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <h4 class="text-center font-weight-bold">SIGN IN</h4>
              <label for="InputEmail1">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                aria-describeby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="InputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword1"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <button
              type="submit"
              @click="prijava"
              class="btn btn-primary btn-block"
            >
              Submit
            </button>
            <div class="form-footer">
              <p>Don't have an account? <a href="Registracija">Sign Up</a></p>
            </div>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>

<style>
#prvi-div {
  margin-top: 75px;
}
</style>
<script>
import { auth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "prijava",
  data() {
    return {
      email: "",
      username: "",
      number: "",
      password: "",
    };
  },
  methods: {
    prijava() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          alert("jupiii");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
};
</script>
