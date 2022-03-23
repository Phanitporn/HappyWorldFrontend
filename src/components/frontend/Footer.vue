<template>
<div >
  <v-footer padless dark color="">
    <v-col class="text-center" cols="12">
      <div>
        <div>
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </div>
        นางสาว พนิตพร ปินตา รหัสนักศึกษา 6204101333 ชั้นปีที่ 3
        <br />
        สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
        <br />
        Website นี้ เป็น Project วิชา คพ495
        หัวข้อพิเศษทางวิทยาการคอมพิวเตอร์ 2
        <br />
        อาจารย์ผู้สอน อาจารย์ ดร. กิติศักดิ์ โอสถานันต์กุล
        
      </div>
      <br>
      <v-divider></v-divider>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-col>
  </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-github"],
  }),
};
</script>

<style>

</style>
