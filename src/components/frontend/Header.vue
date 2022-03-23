<template>
  <div>
    <v-card >
      <v-app-bar                    
        height="90"
        elevation="3"
        color="#b99768"
      >
        <div>
          <router-link to="/">
            <img
              class="imgwh"
              src="../../assets/logocafe.png"
              alt=""
          /></router-link>
        </div>

        <div class="menu-item">
          <router-link id="head1" to="/">HOME</router-link>
          <router-link id="head1" to="Shop">SHOP</router-link>
          <router-link id="head1" to="About">ABOUT US</router-link>
          
        </div>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="white">mdi-heart</v-icon>
        </v-btn>

        <router-link to="/Signin" style="text-decoration: none">
          <v-btn width="40" height="40" fab>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </router-link>
      </v-app-bar>

    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  src: require("/src/assets/logocafe.png");
}

.menu-item{
    margin-right: 10px;
    margin: 5;
    padding: 0;
}
#head1{
  margin-left: 30px;
  margin-right: 20PX;
  text-decoration: none;
  color: white;
  font-size: 1.6rem;
  
}
.imgwh{
 width: 80px;
 height: 80px;
}
</style>
