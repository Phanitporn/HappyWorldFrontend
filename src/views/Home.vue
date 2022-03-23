<template>
  <div id="homefoot">
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <div class="padding0">
        <h2><div class="font09">หมวดหมู่</div></h2>
        <div class="flex width100">
          <div class="center flex-1" onclick="">
            <img
              class="type_list"
              src="../assets/5-removebg-preview (1).png"
              alt=""
            />

            <div class="font07">Coffee</div>
          </div>
          <div class="center flex-1" onclick="">
            <img
              class="type_list"
              src="../assets/7-removebg-preview.png"
              alt=""
            />

            <div class="font07">Drinks</div>
          </div>
          <div class="center flex-1" onclick="">
            <img
              class="type_list"
              src="../assets/8-removebg-preview.png"
              alt=""
            />
            <div class="font07">Cakes</div>
          </div>
          <div class="center flex-1" onclick="">
            <img
              class="type_list"
              src="../assets/6-removebg-preview.png"
              alt=""
            />

            <div class="font07">Cookie</div>
          </div>
        </div>
      </div>
      <section class="content">
        <v-row >
          <!--item 1-->
          <v-card  v-for="item in producthome" :key="item.id" class="mx-auto my-12" max-width="350px">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src= "item.image"
            ></v-img>

            <v-card-title>{{item.name}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4 my-3">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">{{item.price}}$ • Cakes, Cafe</div>

              <div>{{item.descrition}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <router-link to="/Signin" style="text-decoration: none">
                <v-btn color="deep-purple lighten-2" text> BUY </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
import http from "../Services/FrontendServices";
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/4.png"),
        },
        {
          src: require("../assets/2.png"),
        },
        {
          src: require("../assets/3.png"),
        },
        {
          src: require("../assets/1.png"),
        },
      ],
      producthome: [],
    };
  },
  created() {
    http.get("productReadGuest").then((response) => {
      this.producthome = response.data;
    });
  },
};
</script>
<style>
i {
  font-size: 70px;
  margin: 20px;
  color: whitesmoke;
}

img {
  width: 100px;
  height: 100px;
}

.center {
  text-align: center;
}
.flex-1 {
  flex: 0.1;
}
.flex {
  display: inline-flex;
  justify-content: center;
}
.width100 {
  width: 100%;
}
.padding0 {
  padding: 20px;
}
.font09 {
  text-align: center;
  /* font-size: 30px; */
  margin-right: 700px;
}
#homefoot{
  margin-bottom: 50vh;
}
</style>
