<template>
    <div>
        <HeaderAdmin/>
            <router-view/>
        
    </div>
</template>

<script>
import HeaderAdmin from '../components/frontend/HeaderAdmin.vue'

export default {
  components: { HeaderAdmin },

}
</script>

<style>

</style>