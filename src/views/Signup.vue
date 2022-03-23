<template>
  <div id="backgroundRegister">
    <v-card id="cardcolor" class="mx-auto " max-width="700">
      <v-container>
        <h1 class="color">Register</h1>
        <br />
        <v-form ref="form">
          <v-text-field
            v-model="firstname"
            label="FirstName"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            label="LastName"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="phonenumber"
            label="PhoneNumber"
            required
          ></v-text-field>
          <h4>Gender</h4>
          <v-radio-group v-model="gender" row>
            <v-radio label="Male" value="Male"></v-radio>
            
            <v-radio label="Female" value="Female"></v-radio>
          </v-radio-group>

          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="passwordconfirm"
            label="Password Confirm"
            required
          ></v-text-field>

          <v-btn color="#D0B49F" class="mr-4" @click="submit"> Submit </v-btn>
          <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn> -->
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import http from "../Services/Authen";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      gender: "",
      password: "",
      passwordconfirm: "",
    };
  },
  methods: {
    submit() {
      http
        .post("register", {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phoneNumber: this.phonenumber,
          gender: this.gender,
          password: this.password,
          password_confirmation: this.passwordconfirm,
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/Signin";
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style>
#backgroundRegister {
  background-image: url(https://www.greatitude.live/wp-content/uploads/2021/02/cafe-bar-hotel-loft-style-coffeeshop-homemade-thefotodio-bakery-thecafefio-coffeebean-%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F-08.jpg);
  background-size: 2000px 1000px;
  
}
#cardcolor {
  background-color: #fdf7f2;
}
.color {
  color: rgb(180, 128, 86);
}

</style>
