<template>
  <div>
    <v-app id="inspire">
      <v-content class="background">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex >
              <v-card width="600px"  id="cardradius" >
                <v-toolbar color="#D0B49F">
                  <v-toolbar-title class="colorfont">
                    Login Form</v-toolbar-title
                  >
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      v-model="email"
                      label="E-mail"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      prepend-icon="lock"
                      v-model="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                  <router-link to="/Signup" style="text-decoration: none"
                    ><p>Create Acount?</p></router-link
                  >
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#BC9476" @click="submit">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import http from "../Services/Authen";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit(){
      http.post("login",{
        email:this.email,
        password:this.password
      }).then(response =>{
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
      
      }).then(() =>
        {
          if(localStorage.getItem("user")){
            if (localStorage.getItem("user")) {
              let userStorage = localStorage.getItem("user");
              let userStorageJSON = JSON.parse(userStorage);
              let user = userStorageJSON["user"];

              if (user.role == 1) {
                // หาก role = 1 (Admin) ให้ส่งไปที่หน้า 
                window.location.href = "/Backend/Admin";
              } else {
                // Login ผ่าน ให้ส่งไปที่หน้า Product
                window.location.href = "/front/products";
              }
            }
          }
        }).catch(error =>{
        console.log(error.response.data)
      });
    }
  },
};
</script>

<style>
.background {
  /* background-color: brown; */
  background-size: 2000px 1000px;
  background-image: url(https://www.greatitude.live/wp-content/uploads/2021/02/cafe-bar-hotel-loft-style-coffeeshop-homemade-thefotodio-bakery-thecafefio-coffeebean-%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F-08.jpg);
}
.colorfont {
  color: #523a28;
}
.v-toolbar__title {
    font-size: 2.5rem; 
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#cardradius{
  border-radius: 10px;
}

</style>
