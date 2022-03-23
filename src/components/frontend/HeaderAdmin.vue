<template>
  <div>
    <v-app-bar height="90" elevation="3" color="#b99768">
     

      

      <v-spacer></v-spacer>
     
      
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
