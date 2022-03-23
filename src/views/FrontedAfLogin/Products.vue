<template>
  <div id="mycardfoot">
    <v-container  >
      <v-row > 
        <!-- <v-col cols="4" md-4> -->
          <v-card
            class="mx-2 my-12 "
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
                {{ item.price }}฿ • {{ item.category }}, Cafe
              </div>

              <div>{{ item.descrition }}.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="addToCart(item)"  > 
                BUY
              </v-btn>
            </v-card-actions>
          </v-card>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import http from "../../Services/FrontendServices";
export default {
  data() {
    return {
      productsFromDB: [],
    };
  },
  methods: {
    addToCart(item) {
      let product = {
        id: item.id,
        image: item.image,
        name: item.name,
        amount: item.amount,
        price: item.price,
        category: item.category,
        descrition: item.descrition,
        total: item.price,
        qty: 1,
      };
      this.$store.dispatch("itemFromProduct", product);
    },
  },
  mounted() {
    http
      .get("productRead")
      .then((response) => {
        console.log(response.data);
        this.productsFromDB = response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.header);
        }
      });
  },
};
</script>
<style>
#mycardfoot{
  margin-bottom: 180px;
}
</style>
