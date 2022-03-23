<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">image</th>
            <th class="text-left">category</th>
            <th class="text-left">price</th>
            <th class="text-left">description</th>
            <th class="text-left">amount</th>

            <th class="text-left">Total</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td><img :src="item.image" width="50px" /></td>
            <td>{{ item.category }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.descrition }}</td>
            <td>
              <v-icon @click="minus(item)">remove_circle_outline</v-icon>
              {{ item.qty }}
              <v-icon @click="add(item)">add_circle_outline</v-icon>
            </td>
            <td>{{ item.total }}</td>
            <td><v-btn @click="del(item)">Delete</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div>
    <v-row id="myrowcart">
      <v-col cols="5"></v-col>
      <v-col id="mycols">
        <v-card id="totalcart">
          <div>
            <br />
            <h2>ราคารวมของสินค้า</h2>
            {{ total }}
            <h3>บาท</h3>

            <v-btn
              rounded
              color="#1EA40C"
              dark
              elevation="2"
              x-large
              @click="buy"
            >
              BUY
            </v-btn>
          </div></v-card
        ></v-col
      >
      <v-col cols="4"></v-col>
    </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.cart = this.$store.getters.ItemFromCart;
  },
  computed: {
    total() {
      var sum = 0;
      this.cart.forEach((item) => {
        sum += parseFloat(item.total);
      });
      return sum;
    },
  },
  methods: {
    minus(item) {
      item.qty -= 1;

      if (item.qty < 1) {
        item.qty = 1;
      }
      item.total = item.qty * item.price;
    },
    add(item) {
      item.qty += 1;
      item.total = item.qty * item.price;
    },
    del(item) {
      var i = this.cart.indexOf(item);
      this.cart.splice(i, 1);
    },
    buy() {
      if (this.total > 0) {
        alert("การสั่งซื้อสำเร็จ");
        window.location.href = "/front/products";
      }
    },
  },
};
</script>

<style>
#totalcart {
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  border: 2px solid rgb(131, 139, 139);
  width: 300px;
}
#myrowcart {
  overflow: hidden;
}
</style>
