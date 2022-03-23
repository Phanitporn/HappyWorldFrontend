<template>
  <div>
    <v-app-bar height="90" elevation="3" color="#b99768">
      <div>
        <router-link to="">
          <img class="imgwh" src="../../assets/logocafe.png" alt=""
        /></router-link>
      </div>

      <div class="menu-item">
        
        <router-link id="head1" to="Products">SHOP</router-link>
        
      </div>

      <v-spacer></v-spacer>
      <router-link to="/front/cart" style="text-decoration: none"
        ><v-btn icon >
          <v-icon>shopping_cart</v-icon>
        </v-btn></router-link
      >
      <v-btn color="error" fab dark>
        <v-icon @click="logout">logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import http from "../../Services/FrontendServices";
export default {
  methods: {
    logout() {
      http
        .post("logout")
        .then(() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        })
        .catch((error) => {
          alert(JSON.stringify(error.response.data));
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style>

</style>
