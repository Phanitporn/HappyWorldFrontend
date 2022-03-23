<template>
  <div>
    <v-container>
      <div class="padding0">
        <h2><div class="font09">หมวดหมู่</div></h2>
        <div class="flex width100">
          <div
            class="center flex-1"
            onclick=""
          >
            <img
              class="type_list"
              src="../assets/5-removebg-preview (1).png"
              alt=""
            />

            <div class="font07">Coffee</div>
          </div>
          <div
            class="center flex-1"
            onclick=""
          >
            <img
              class="type_list"
              src="../assets/7-removebg-preview.png"
              alt=""
            />

            <div class="font07">Drinks</div>
          </div>
          <div
            class="center flex-1"
            onclick=""
          >
            <img
              class="type_list"
              src="../assets/8-removebg-preview.png"
              alt=""
            />
            <div class="font07">Cakes</div>
          </div>
          <div
            class="center flex-1"
            onclick=""
          >
            <img
              class="type_list"
              src="../assets/6-removebg-preview.png"
              alt=""
            />

            <div class="font07">Cookie</div>
          </div>
        </div>
      </div>
      <v-row>
        <v-card
          class="mx-2 my-12"
          max-width="300px"
          v-for="item in productsFromDB"
          :key="item.id"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" width="300px" :src="item.image"></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0 my-2">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              {{ item.price }}$ • {{ item.category }}, Cafe
            </div>

            <div>{{ item.descrition }}.</div>
          </v-card-text>
          <v-card-actions>
            <router-link to="/Signin" style="text-decoration: none">
              <v-btn color="deep-purple lighten-2" text> BUY </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import http from "../Services/FrontendServices";
export default {
  data() {
    return {
      productsFromDB: [],
    };
  },
  mounted() {
    http
      .get("productRead")
      .then((response) => {
        this.productsFromDB = response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  },
};
</script>
